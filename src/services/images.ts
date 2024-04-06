// images.ts

export interface HeaderItem {
  id: string;
  dir: string;
  alt: string;
  imagePath: string;
}

export const headerItems = [
  { id: 'spotify', dir: 'https://spotify.com', alt: 'Spotify', imagePath: '/images/spotify.png' },
  { id: 'amazonmu', dir: 'https://spotify.com', alt: 'Amazon Music', imagePath: '/images/amazonmu.png' },
  { id: 'applemu', dir: 'https://spotify.com', alt: 'Apple Music', imagePath: '/images/applemu.png' },
  { id: 'googlebu', dir: 'https://spotify.com', alt: 'Google Business', imagePath: '/images/googlebu.png' },
  { id: 'youtube', dir: 'https://spotify.com', alt: 'Youtube', imagePath: '/images/youtube.png' },
  { id: 'shazam', dir: 'https://spotify.com', alt: 'Shazam', imagePath: '/images/shazam.png' },
  { id: 'deezer', dir: 'https://spotify.com', alt: 'Spotify', imagePath: '/images/deezer.png' },
  { id: 'boomplay', dir: 'https://spotify.com', alt: 'Spotify', imagePath: '/images/boomplay.png' },
  { id: 'anghami', dir: 'https://spotify.com', alt: 'Spotify', imagePath: '/images/anghami.png' },
  { id: 'kkbox', dir: 'https://spotify.com', alt: 'Spotify', imagePath: '/images/kkbox.png' },


  // Add more items as needed
];