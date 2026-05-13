const LINKS = [
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@otisplaylists',
    color: 'cyan',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    url: 'https://open.spotify.com/user/31ue57edlqces74hxkqfx5yvz3ze',
    color: 'magenta',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/otisplaylists',
    color: 'cyan',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    url: 'https://soundcloud.com/otisplaylists',
    color: 'magenta',
  },
  {
    id: 'apple-music',
    label: 'Apple Music',
    url: 'https://music.apple.com/profile/otisplaylists',
    color: 'cyan',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@OTISPlaylists',
    color: 'magenta',
  },
];

export default function HomeLayout() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="home-header__logo">
          <span className="home-header__logo-ot">OTIS</span>
          <span className="home-header__logo-pl">PLAYLISTS</span>
        </div>
        <p className="home-header__sub">Curated sounds · All platforms</p>
      </header>

      {/* Links */}
      <main className="home-links">
        {LINKS.map(({ id, label, url, color }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`home-link home-link--${color}`}
          >
            <span className="home-link__label">{label}</span>
            <span className="home-link__arrow">→</span>
            <div className="home-link__glow" />
          </a>
        ))}
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <span className="home-footer__text">@otisplaylists everywhere</span>
      </footer>
    </div>
  );
}
