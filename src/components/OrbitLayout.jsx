import { useState, useRef, useEffect, useCallback } from 'react';
import mockPlaylists from '../data/mockPlaylists.js';
import SpotifyEmbed from './SpotifyEmbed.jsx';

const TOTAL = mockPlaylists.length;
const ANGLE_STEP = 360 / TOTAL;

// In CSS, rotate(Xdeg) translateY(-radius) places a card at angle X from the top.
// The "right" position (3 o'clock) is at 90°.
// A card at index i sits at angle (i * ANGLE_STEP).
// After the ring rotates by `rotation` degrees, that card's effective angle is
// (i * ANGLE_STEP + rotation). We want that to equal 90°.
// → i ≈ (90 - rotation) / ANGLE_STEP
function getRightIndex(rotation) {
  const raw = (90 - rotation) / ANGLE_STEP;
  const normalized = ((raw % TOTAL) + TOTAL) % TOTAL;
  return Math.round(normalized) % TOTAL;
}

// To place card `index` at the right (90°), we need:
//   index * ANGLE_STEP + rotation = 90
// → rotation = 90 - index * ANGLE_STEP
function rotationForIndex(index) {
  return 90 - index * ANGLE_STEP;
}

export default function OrbitLayout() {
  const [rotation, setRotation] = useState(() => rotationForIndex(0));
  const [isSpinning, setIsSpinning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const rafRef = useRef(null);
  const rotationRef = useRef(rotationForIndex(0));
  const dragStartRef = useRef({ y: 0, rotation: 0 });
  const stageRef = useRef(null);
  const velocityRef = useRef(0);
  const lastDragY = useRef(0);
  const lastDragTime = useRef(0);
  const momentumRef = useRef(null);

  const topIndex = getRightIndex(rotation);

  // Auto-spin
  useEffect(() => {
    if (!isSpinning) return;

    const spin = () => {
      rotationRef.current += 0.15;
      setRotation(rotationRef.current);
      rafRef.current = requestAnimationFrame(spin);
    };

    rafRef.current = requestAnimationFrame(spin);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isSpinning]);

  // Snap to nearest top card
  const snapToNearest = useCallback(() => {
    const idx = getRightIndex(rotationRef.current);
    const target = rotationForIndex(idx);
    // Find the closest equivalent rotation (avoid spinning the long way)
    const current = rotationRef.current;
    const diff = target - current;
    const shortDiff = diff - Math.round(diff / 360) * 360;
    rotationRef.current = current + shortDiff;
    setRotation(rotationRef.current);
  }, []);

  // Momentum decay after drag release
  const startMomentum = useCallback(() => {
    const decay = () => {
      velocityRef.current *= 0.93;

      if (Math.abs(velocityRef.current) < 0.08) {
        velocityRef.current = 0;
        snapToNearest();
        return;
      }

      rotationRef.current += velocityRef.current;
      setRotation(rotationRef.current);
      momentumRef.current = requestAnimationFrame(decay);
    };

    momentumRef.current = requestAnimationFrame(decay);
  }, [snapToNearest]);

  // Drag handlers
  const handleDragStart = (clientY) => {
    setIsSpinning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
    velocityRef.current = 0;

    setIsDragging(true);
    dragStartRef.current = { y: clientY, rotation: rotationRef.current };
    lastDragY.current = clientY;
    lastDragTime.current = Date.now();
  };

  const handleDragMove = useCallback((clientY) => {
    const stage = stageRef.current;
    if (!stage) return;

    const stageHeight = stage.getBoundingClientRect().height;
    const deltaY = clientY - dragStartRef.current.y;
    const degreesPerPixel = 360 / stageHeight;
    const newRotation = dragStartRef.current.rotation + deltaY * degreesPerPixel;

    // Track velocity
    const now = Date.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) {
      velocityRef.current =
        ((clientY - lastDragY.current) * degreesPerPixel) / Math.max(dt / 16, 1);
    }
    lastDragY.current = clientY;
    lastDragTime.current = now;

    rotationRef.current = newRotation;
    setRotation(newRotation);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    startMomentum();
  }, [startMomentum]);

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientY);
  };

  // Global mouse listeners
  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e) => handleDragMove(e.clientY);
    const onUp = () => handleDragEnd();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Touch events
  const onTouchStart = (e) => {
    handleDragStart(e.touches[0].clientY);
  };

  const onTouchMove = (e) => {
    if (isDragging) handleDragMove(e.touches[0].clientY);
  };

  const onTouchEnd = () => {
    if (isDragging) handleDragEnd();
  };

  // Click a card → spin it to the top
  const handleCardClick = (index) => {
    setIsSpinning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
    velocityRef.current = 0;

    const target = rotationForIndex(index);
    const current = rotationRef.current;
    const diff = target - current;
    const shortDiff = diff - Math.round(diff / 360) * 360;
    rotationRef.current = current + shortDiff;
    setRotation(rotationRef.current);
  };

  return (
    <div className="orbit-page">
      {/* Header */}
      <header className="orbit-header">
        <div className="orbit-header__logo">
          <span className="orbit-header__logo-ot">OTIS</span>
          <span className="orbit-header__logo-pl">PLAYLISTS</span>
        </div>
        <p className="orbit-header__sub">
          Curated sounds from{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="orbit-header__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok
        </p>
        <div className="orbit-hint">
          <span className="orbit-hint__text">drag to spin · click to select</span>
        </div>
      </header>

      {/* Split layout: orbit left, info right */}
      <div className="orbit-split">
        {/* Left: orbit ring */}
        <div className="orbit-split__left">
          <div
            className="orbit-stage"
            ref={stageRef}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Center logo */}
            <div className="orbit-center">
              <span className="orbit-center__otis">OTIS</span>
              <span className="orbit-center__playlists">PLAYLISTS</span>
            </div>

            {/* Rotating ring */}
            <div
              className="orbit-ring"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {mockPlaylists.map((playlist, index) => {
                const angle = index * ANGLE_STEP;
                const isActive = index === topIndex;

                return (
                  <div
                    key={playlist.id}
                    className={`orbit-card ${isActive ? 'orbit-card--active' : ''}`}
                    style={{
                      '--angle': `${angle}deg`,
                      '--counter-angle': `${-rotation - angle}deg`,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(index);
                    }}
                  >
                    <div className="orbit-card__inner">
                      <img
                        src={playlist.placeholderImage}
                        alt={playlist.title}
                        className="orbit-card__img"
                        loading="lazy"
                      />
                      <div className="orbit-card__overlay" />
                      <p className="orbit-card__title">{playlist.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: info panel */}
        <div className="orbit-split__right">
          <div className="orbit-info">
            <p className="orbit-info__curator">
              {mockPlaylists[topIndex].curator}
            </p>
            <h2 className="orbit-info__title">
              {mockPlaylists[topIndex].title}
            </h2>
            <p className="orbit-info__desc">
              {mockPlaylists[topIndex].description}
            </p>
            <div className="orbit-info__spotify">
              <SpotifyEmbed spotifyId={mockPlaylists[topIndex].spotifyId} compact={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="orbit-footer">
        <span className="orbit-footer__text">
          Follow{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="orbit-footer__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok for new drops
        </span>
      </footer>
    </div>
  );
}
