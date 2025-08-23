import { MetadataRoute } from 'next'
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vfsappointments.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // Generate dynamic appointment pages
  const appointmentPages: MetadataRoute.Sitemap = []
  
  // Generate pages for all combinations of country, visa type, and city
  ALL_COUNTRIES.forEach(country => {
    VISA_TYPES.forEach(visa => {
      ALL_CITIES.forEach(city => {
        // Create SEO-friendly URL: /country-visa-appointment-city
        const url = `${baseUrl}/${country.slug}-${visa.slug}-appointment-${city.slug}`
        
        appointmentPages.push({
          url,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.9, // High priority for appointment pages
        })
      })
    })
  })

  // Country-specific pages
  const countryPages: MetadataRoute.Sitemap = ALL_COUNTRIES.map(country => ({
    url: `${baseUrl}/countries/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Visa type pages
  const visaPages: MetadataRoute.Sitemap = VISA_TYPES.map(visa => ({
    url: `${baseUrl}/visa-types/${visa.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // City-specific pages
  const cityPages: MetadataRoute.Sitemap = ALL_CITIES.map(city => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Popular combinations (higher priority)
  const popularCombinations = [
    'france-visit-appointment-delhi',
    'germany-work-appointment-bangalore',
    'usa-visit-appointment-mumbai',
    'uk-study-appointment-delhi',
    'canada-work-appointment-mumbai',
    'australia-study-appointment-hyderabad',
    'spain-visit-appointment-chennai',
    'italy-visit-appointment-pune',
    'netherlands-work-appointment-kolkata',
    'switzerland-visit-appointment-ahmedabad'
  ]

  const popularPages: MetadataRoute.Sitemap = popularCombinations.map(combo => ({
    url: `${baseUrl}/${combo}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0, // Highest priority for popular pages
  }))

  // Blog/guides pages (if implemented)
  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides/schengen-visa`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/document-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/vfs-centers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  ]

  // Combine all pages
  return [
    ...staticPages,
    ...popularPages,
    ...countryPages,
    ...visaPages,
    ...cityPages,
    ...guidePages,
    // Note: appointmentPages are commented out to avoid generating too many URLs
    // In production, you might want to limit this or generate them dynamically
    // ...appointmentPages.slice(0, 1000) // Limit to first 1000 for now
  ]
}

// Generate robots.txt
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# High priority pages
Allow: /
Allow: /services
Allow: /contact
Allow: /countries

# Block unnecessary pages
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /test/
Disallow: /debug/

# Sitemap
Sitemap: https://vfsappointments.com/sitemap.xml

# Crawl delay
Crawl-delay: 1`
}
