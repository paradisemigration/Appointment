/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagsapi.com', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/:country-:visa-visa-appointment-:city',
        destination: '/appointment/:country/:visa/:city',
      },
    ];
  },
}

module.exports = nextConfig
