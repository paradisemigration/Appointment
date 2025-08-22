/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagsapi.com', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/:country-:visa-visa-appointment-:city',
        destination: '/:country/appointment/:visa/:city',
      },
    ];
  },
}

module.exports = nextConfig
