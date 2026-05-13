/**
 * Renders a Spotify playlist embed iframe.
 *
 * @param {string} spotifyId - The Spotify playlist ID
 * @param {boolean} compact - If true, renders the 152px compact player; otherwise 352px full player
 */
export default function SpotifyEmbed({ spotifyId, compact = false }) {
  if (!spotifyId) return null;

  const height = compact ? 152 : 352;
  const src = `https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator`;

  return (
    <iframe
      className="spotify-embed"
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify playlist"
      style={{ borderRadius: '12px' }}
    />
  );
}
