import { useRef, useEffect, useState } from 'react';
import mockPlaylists from '../data/mockPlaylists.js';

export default function WheelLayout() {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wheel-page">
      {/* Header */}
      <header className="wheel-header">
        <div className="wheel-header__logo">
          <span className="wheel-header__logo-ot">OTIS</span>
          <span className="wheel-header__logo-pl">PLAYLISTS</span>
        </div>
        <p className="wheel-header__sub">
          Curated sounds from{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="wheel-header__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok
        </p>
      </header>

      {/* Carousel */}
      <main
        ref={scrollRef}
        className="wheel-carousel snap-x snap-mandatory"
      >
        {mockPlaylists.map((playlist, index) => {
          const isCenter = index === centerIndex;
          const isAdjacent =
            index === centerIndex - 1 || index === centerIndex + 1;

          return (
            <article
              key={playlist.id}
              className={`wheel-card snap-center ${
                isCenter
                  ? 'wheel-card--active'
                  : isAdjacent
                  ? 'wheel-card--adjacent'
                  : 'wheel-card--distant'
              }`}
            >
              <div className="wheel-card__img-wrap">
                <img
                  src={playlist.placeholderImage}
                  alt={playlist.title}
                  className="wheel-card__img"
                  loading="lazy"
                />
                <div className="wheel-card__img-overlay" />
              </div>

              <div className="wheel-card__body">
                <p className="wheel-card__curator">{playlist.curator}</p>
                <h2 className="wheel-card__title">{playlist.title}</h2>
                <p className="wheel-card__desc">{playlist.description}</p>
              </div>
            </article>
          );
        })}
      </main>

      {/* Scroll hint */}
      <div className="wheel-hint">
        <span className="wheel-hint__text">← scroll →</span>
      </div>

      {/* Footer */}
      <footer className="wheel-footer">
        <span className="wheel-footer__text">
          Follow{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="wheel-footer__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok for new drops
        </span>
      </footer>
    </div>
  );
}
