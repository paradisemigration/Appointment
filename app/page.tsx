import HeroSection from '@/components/HeroSection'
import CountryGrid from '@/components/CountryGrid'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CountryGrid />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  )
}
