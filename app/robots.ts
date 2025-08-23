import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/test/',
          '/debug/',
          '/private/',
          '*.json',
          '/working-form-test/',
          '/simple-test/',
          '/functionality-test/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/test/',
          '/debug/',
          '/private/'
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/test/',
          '/debug/',
          '/private/'
        ],
      }
    ],
    sitemap: 'https://vfsappointments.com/sitemap.xml',
    host: 'https://vfsappointments.com'
  }
}
