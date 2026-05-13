import { useState } from 'react';
import mockPlaylists from '../data/mockPlaylists.js';
import SpotifyEmbed from './SpotifyEmbed.jsx';

export default function CassetteLayout() {
  const [flippedId, setFlippedId] = useState(null);

  const toggle = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <div className="cassette-page">
      {/* Header */}
      <header className="cassette-header">
        <div className="cassette-header__logo">
          <span className="cassette-header__logo-ot">OTIS</span>
          <span className="cassette-header__logo-pl">PLAYLISTS</span>
        </div>
        <p className="cassette-header__sub">
          Curated sounds from{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="cassette-header__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok
        </p>
      </header>

      {/* Tape grid */}
      <main className="cassette-grid">
        {mockPlaylists.map((playlist, index) => {
          const isFlipped = flippedId === playlist.id;
          const color = index % 2 === 0 ? 'cyan' : 'magenta';

          return (
            <div
              key={playlist.id}
              className={`cassette-tape ${isFlipped ? 'cassette-tape--flipped' : ''}`}
              onClick={() => toggle(playlist.id)}
            >
              {/* Front — Side A */}
              <div className={`cassette-tape__face cassette-tape__front cassette-tape__front--${color}`}>
                {/* Top edge detail */}
                <div className="cassette-tape__top-edge">
                  <div className="cassette-tape__screw cassette-tape__screw--tl" />
                  <span className="cassette-tape__side-label">SIDE A</span>
                  <div className="cassette-tape__screw cassette-tape__screw--tr" />
                </div>

                {/* Label area */}
                <div className={`cassette-tape__label cassette-tape__label--${color}`}>
                  <span className="cassette-tape__label-curator">{playlist.curator}</span>
                  <span className="cassette-tape__label-title">{playlist.title}</span>
                  <div className="cassette-tape__label-lines">
                    <span /><span /><span />
                  </div>
                </div>

                {/* Reels */}
                <div className="cassette-tape__reels">
                  <div className={`cassette-tape__reel cassette-tape__reel--${color}`}>
                    <div className="cassette-tape__reel-hub" />
                  </div>
                  <div className="cassette-tape__tape-window" />
                  <div className={`cassette-tape__reel cassette-tape__reel--${color}`}>
                    <div className="cassette-tape__reel-hub" />
                  </div>
                </div>

                {/* Bottom edge */}
                <div className="cassette-tape__bottom-edge">
                  <span className="cassette-tape__hint">click to flip</span>
                </div>
              </div>

              {/* Back — Side B (Spotify embed) */}
              <div className={`cassette-tape__face cassette-tape__back cassette-tape__back--${color}`}>
                <div className="cassette-tape__top-edge">
                  <div className="cassette-tape__screw cassette-tape__screw--tl" />
                  <span className="cassette-tape__side-label">SIDE B</span>
                  <div className="cassette-tape__screw cassette-tape__screw--tr" />
                </div>

                <div className="cassette-tape__back-content">
                  <SpotifyEmbed spotifyId={playlist.spotifyId} compact={true} />
                </div>

                <div className="cassette-tape__bottom-edge">
                  <span className="cassette-tape__hint">click to flip back</span>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="cassette-footer">
        <span className="cassette-footer__text">
          Follow{' '}
          <a
            href="https://www.tiktok.com/@otisplaylists"
            target="_blank"
            rel="noopener noreferrer"
            className="cassette-footer__link"
          >
            @otisplaylists
          </a>{' '}
          on TikTok for new drops
        </span>
      </footer>
    </div>
  );
}
