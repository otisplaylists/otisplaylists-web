import profilePic from '../assets/black-pfp-1.JPG';

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
  {
    id: 'american-eagle',
    label: 'OTIS X American Eagle',
    url: 'https://www.ae.com/us/en?utm_medium=affiliate&utm_source=community&utm_content=ae&ambassadorID=78cde015-0678-4ed8-abe3-e064e0047a9e',
    color: 'cyan',
  },
];

const SOCIAL_ICONS = [
  {
    id: 'tiktok',
    url: 'https://www.tiktok.com/@otisplaylists',
    title: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.1V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.72a8.16 8.16 0 004.76 1.52V7.79a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
  },
  {
    id: 'spotify',
    url: 'https://open.spotify.com/user/31ue57edlqces74hxkqfx5yvz3ze',
    title: 'Spotify',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/otisplaylists',
    title: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    id: 'soundcloud',
    url: 'https://soundcloud.com/otisplaylists',
    title: 'SoundCloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.049-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.308-.21-1.334c-.01-.057-.044-.09-.078-.09zm1.83-1.229c-.063 0-.114.05-.12.114l-.217 2.537.217 2.453c.006.064.057.114.12.114.063 0 .114-.05.12-.114l.248-2.453-.248-2.537c-.006-.064-.057-.114-.12-.114zm.945-.089c-.075 0-.135.06-.14.135l-.193 2.627.193 2.465c.005.074.065.135.14.135.074 0 .134-.061.14-.135l.218-2.465-.218-2.627c-.006-.075-.066-.135-.14-.135zm1.037.45c-.087 0-.157.07-.161.157l-.166 2.177.166 2.354c.004.09.074.158.161.158s.157-.068.161-.158l.187-2.354-.187-2.177c-.004-.087-.074-.157-.161-.157zm.882-1.782c-.098 0-.176.08-.181.176l-.15 3.96.15 2.307c.005.098.083.176.181.176s.176-.078.181-.176l.169-2.307-.169-3.96c-.005-.097-.083-.176-.181-.176zm.956-.376c-.11 0-.199.09-.203.199l-.133 4.335.133 2.258c.004.108.093.199.203.199.109 0 .198-.091.203-.199l.15-2.258-.15-4.335c-.005-.11-.094-.199-.203-.199zm1.008-.178c-.122 0-.22.099-.224.22l-.118 4.513.118 2.2c.004.122.102.221.224.221s.22-.099.224-.22l.131-2.2-.131-4.514c-.004-.122-.102-.22-.224-.22zm1.06-.263c-.134 0-.242.108-.245.242l-.104 4.776.104 2.15c.003.133.111.242.245.242.133 0 .242-.109.245-.242l.116-2.15-.116-4.776c-.003-.134-.112-.242-.245-.242zm1.113-.474c-.146 0-.263.118-.267.263l-.089 5.25.089 2.1c.004.146.121.264.267.264.145 0 .263-.118.266-.264l.1-2.1-.1-5.25c-.003-.145-.121-.263-.266-.263zm1.12 0c-.156 0-.284.127-.287.283l-.076 5.25.076 2.063c.003.157.131.284.287.284.155 0 .283-.127.286-.284l.086-2.063-.086-5.25c-.003-.156-.131-.283-.286-.283zm1.175-.105c-.17 0-.305.136-.308.305l-.063 5.355.063 2.01c.003.17.138.306.308.306.169 0 .305-.136.308-.306l.07-2.01-.07-5.355c-.003-.169-.139-.305-.308-.305zm1.166 1.467c-.17 0-.306.137-.308.307l-.049 3.883.049 1.96c.002.17.138.307.308.307.169 0 .306-.137.308-.307l.055-1.96-.055-3.883c-.002-.17-.139-.307-.308-.307zm1.148-.06c-.181 0-.327.146-.33.327l-.034 3.943.034 1.92c.003.18.149.326.33.326.18 0 .326-.146.329-.326l.038-1.92-.038-3.943c-.003-.181-.149-.327-.329-.327zm3.478-1.632c-.318 0-.623.037-.917.106-.19-2.07-1.936-3.687-4.074-3.687-.553 0-1.088.108-1.583.3-.185.072-.234.145-.236.288v9.592c.002.15.124.274.274.287h6.536A3.36 3.36 0 0024 11.036a3.36 3.36 0 00-3.36-3.36z"/>
      </svg>
    ),
  },
  {
    id: 'apple-music',
    url: 'https://music.apple.com/profile/otisplaylists',
    title: 'Apple Music',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.073-.005-.146-.01-.22-.015H6.09l-.09.01c-.65.033-1.3.068-1.943.18a5.108 5.108 0 00-1.87.73C1.067 1.626.32 2.627.005 3.94a9.345 9.345 0 00-.18 1.49c-.01.17-.017.34-.025.51v12.12l.01.09c.033.65.068 1.3.18 1.943.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.877.726c.513.103 1.033.14 1.564.15.073.005.146.01.22.015h11.82l.09-.01c.65-.033 1.3-.068 1.943-.18a5.108 5.108 0 001.87-.73c1.12-.716 1.867-1.717 2.182-3.03.103-.513.14-1.033.15-1.564.005-.073.01-.146.015-.22V6.124zm-6.92 2.05v8.47c0 .47-.067.93-.24 1.37-.348.89-1.03 1.418-1.95 1.618-.394.085-.795.114-1.196.086-.897-.063-1.69-.543-2.04-1.36-.35-.82-.18-1.77.5-2.43.405-.39.9-.622 1.45-.74.357-.077.72-.114 1.08-.16.36-.047.7-.126 1-.31.31-.19.46-.48.47-.83V9.63c0-.16-.05-.3-.2-.35-.14-.05-.3-.02-.44.03-.53.17-1.06.34-1.59.51l-3.45 1.1c-.09.03-.18.06-.26.1-.17.09-.25.24-.26.43v.04l-.01 6.27v1.14c0 .45-.06.89-.22 1.31-.35.93-1.06 1.47-2.01 1.66-.39.08-.79.1-1.19.08-.9-.06-1.69-.54-2.04-1.36-.35-.82-.18-1.77.5-2.43.4-.39.89-.62 1.44-.74.36-.08.72-.11 1.08-.16.37-.05.71-.13 1.02-.32.29-.18.44-.46.45-.8V7.16c0-.3.1-.53.35-.7.16-.11.35-.17.53-.22l5.04-1.6 1.56-.5c.19-.06.39-.12.59-.14.3-.03.47.13.49.44.01.07.01.14.01.21z"/>
      </svg>
    ),
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com/@OTISPlaylists',
    title: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    url: 'mailto:otis9205@gmail.com',
    title: 'Email',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
];

// Hover tilt handler — tilts card toward cursor
function handleTiltMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -14;
  const rotateY = ((x - centerX) / centerX) * 14;
  card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px) scale(1.02)`;
}

function handleTiltLeave(e) {
  e.currentTarget.style.transform = '';
}

// Ripple on click
function handleRipple(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ripple = document.createElement('span');
  ripple.className = 'home-link__ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  card.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

export default function HomeLayout() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="home-pfp home-pfp--fade home-anim home-anim--1">
          <img src={profilePic} alt="OtisPlaylists" className="home-pfp__img home-pfp__img--fade" />
        </div>

        <div className="home-header__logo home-anim home-anim--2">
          <span className="home-header__logo-ot">OTIS</span>
          <span className="home-header__logo-pl">PLAYLISTS</span>
        </div>

        {/* Social icon row */}
        <div className="home-socials home-anim home-anim--3">
          {SOCIAL_ICONS.map(({ id, url, title, icon }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="home-socials__icon"
              title={title}
              aria-label={title}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="home-header__sub home-anim home-anim--3">Curated sounds · All platforms</p>
      </header>

      {/* Links */}
      <main className="home-links">
        {LINKS.map(({ id, label, url, color }, index) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`home-link home-link--${color} home-anim home-anim--${index + 4}`}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
            onClick={handleRipple}
          >
            <span className="home-link__label">{label}</span>
            <span className="home-link__arrow">→</span>
            <div className="home-link__glow" />
          </a>
        ))}
      </main>

      {/* Footer */}
      <footer className="home-footer home-anim home-anim--11">
        <span className="home-footer__text">@otisplaylists everywhere</span>
        <a href="mailto:otis9205@gmail.com" className="home-footer__contact">Contact Me</a>
      </footer>
    </div>
  );
}
