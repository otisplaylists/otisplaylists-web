import { useState } from 'react';
import mockPlaylists from '../data/mockPlaylists.js';

export default function TerminalLayout() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="term-page">
      {/* Header */}
      <header className="term-header">
        <div className="term-header__bar">
          <span className="term-header__dot term-header__dot--red" />
          <span className="term-header__dot term-header__dot--yellow" />
          <span className="term-header__dot term-header__dot--green" />
          <span className="term-header__bar-title">otisplaylists — bash</span>
        </div>
        <div className="term-header__prompt">
          <span className="term-header__user">otis@playlists</span>
          <span className="term-header__sep">:</span>
          <span className="term-header__path">~/curated</span>
          <span className="term-header__dollar">$</span>
          <span className="term-header__cmd">ls -la playlists/</span>
        </div>
        <p className="term-header__output">
          total {mockPlaylists.length} — curated by @otisplaylists
        </p>
      </header>

      {/* File listing */}
      <main className="term-list">
        <div className="term-list__header">
          <span className="term-list__col term-list__col--perms">drwxr-xr-x</span>
          <span className="term-list__col term-list__col--user">otis</span>
          <span className="term-list__col term-list__col--date">May 12 2026</span>
          <span className="term-list__col term-list__col--name">.</span>
        </div>

        {mockPlaylists.map((playlist, index) => {
          const isExpanded = expandedId === playlist.id;
          const fileNum = String(index + 1).padStart(2, '0');

          return (
            <div key={playlist.id} className="term-entry">
              <button
                onClick={() => toggle(playlist.id)}
                className={`term-entry__row ${isExpanded ? 'term-entry__row--active' : ''}`}
                aria-expanded={isExpanded}
              >
                <span className="term-entry__icon">
                  {isExpanded ? '▼' : '▶'}
                </span>
                <span className="term-entry__perms">-rw-r--r--</span>
                <span className="term-entry__user">otis</span>
                <span className="term-entry__size">{String(Math.floor(Math.random() * 900 + 100))}K</span>
                <span className="term-entry__name">
                  {fileNum}_{playlist.title.toLowerCase().replace(/\s+/g, '_')}.mp3
                </span>
              </button>

              {isExpanded && (
                <div className="term-entry__details">
                  <div className="term-entry__detail-line">
                    <span className="term-entry__detail-prompt">$</span>
                    <span className="term-entry__detail-cmd">cat README.md</span>
                  </div>
                  <p className="term-entry__detail-title">{playlist.title}</p>
                  <p className="term-entry__detail-desc">{playlist.description}</p>
                  <p className="term-entry__detail-curator">
                    // curator: {playlist.curator}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom prompt */}
        <div className="term-list__footer">
          <span className="term-header__user">otis@playlists</span>
          <span className="term-header__sep">:</span>
          <span className="term-header__path">~/curated</span>
          <span className="term-header__dollar">$</span>
          <span className="term-cursor">█</span>
        </div>
      </main>
    </div>
  );
}
