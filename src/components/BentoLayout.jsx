import { useState } from 'react';
import mockPlaylists from '../data/mockPlaylists.js';
import SpotifyEmbed from './SpotifyEmbed.jsx';

/**
 * Bento span pattern for 8 cards across a 4-column grid.
 * Each entry: { colSpan, rowSpan }
 */
const SPAN_PATTERN = [
  { colSpan: 2, rowSpan: 2 }, // 1 — hero card
  { colSpan: 1, rowSpan: 1 }, // 2
  { colSpan: 1, rowSpan: 1 }, // 3
  { colSpan: 2, rowSpan: 1 }, // 4
  { colSpan: 1, rowSpan: 1 }, // 5
  { colSpan: 2, rowSpan: 1 }, // 6
  { colSpan: 1, rowSpan: 1 }, // 7
  { colSpan: 4, rowSpan: 1 }, // 8 — full-width footer card
];

// Alternates border color per card index
const borderColor = (index) => (index % 2 === 0 ? 'cyan' : 'magenta');

export default function BentoLayout() {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bento-page">
      {/* ── Header ── */}
      <header className="bento-header">
        <div className="bento-header__logo">
          <span className="bento-header__logo-ot">OTIS</span>
          <span className="bento-header__logo-pl">PLAYLISTS</span>
        </div>
        <p className="bento-header__sub">
          Curated sounds from{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-header__tiktok-link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok
        </p>
      </header>

      {/* ── Bento Grid ── */}
      <main className="bento-grid">
        {mockPlaylists.map((playlist, index) => {
          const { colSpan, rowSpan } = SPAN_PATTERN[index];
          const color = borderColor(index);
          const isWide = colSpan >= 2;
          const isTall = rowSpan >= 2;
          const isExpanded = expandedId === playlist.id;
          // Use compact embed for small (1×1) cards, full for larger ones
          const useCompact = colSpan === 1 && rowSpan === 1;

          return (
            <article
              key={playlist.id}
              className={`bento-card bento-card--${color} bento-col-${isExpanded ? 4 : colSpan} bento-row-${isExpanded ? 2 : rowSpan} ${isExpanded ? 'bento-card--expanded' : ''}`}
              onClick={() => handleCardClick(playlist.id)}
            >
              {/* Image */}
              <div className={`bento-card__img-wrap ${isExpanded ? 'bento-card__img-wrap--dimmed' : ''}`}>
                <img
                  src={playlist.placeholderImage}
                  alt={playlist.title}
                  className="bento-card__img"
                  loading="lazy"
                />
                <div className={`bento-card__img-overlay bento-card__img-overlay--${color}`} />
              </div>

              {/* Spotify Embed (shown when expanded) */}
              {isExpanded && (
                <div className="bento-card__spotify">
                  <SpotifyEmbed
                    spotifyId={playlist.spotifyId}
                    compact={useCompact}
                  />
                </div>
              )}

              {/* Text */}
              <div className={`bento-card__body ${isExpanded ? 'bento-card__body--expanded' : ''}`}>
                <p className={`bento-card__curator bento-card__curator--${color}`}>
                  {playlist.curator}
                </p>
                <h2 className={`bento-card__title ${isWide || isTall || isExpanded ? 'bento-card__title--lg' : ''}`}>
                  {playlist.title}
                </h2>
                {(isWide || isTall) && !isExpanded && (
                  <p className="bento-card__desc">{playlist.description}</p>
                )}
                {!isExpanded && (
                  <p className="bento-card__play-hint">▶ Click to play</p>
                )}
              </div>

              {/* Corner accent */}
              <div className={`bento-card__corner bento-card__corner--${color}`} />
            </article>
          );
        })}
      </main>

      {/* ── Footer ── */}
      <footer className="bento-footer">
        <span className="bento-footer__text">
          Follow{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-footer__link bento-footer__link--cyan"
          >
            @otisplaylists
          </a>{' '}
          on TikTok for new drops
        </span>
      </footer>
    </div>
  );
}
