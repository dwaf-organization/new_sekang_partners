import { AboutFoundrySection } from '@/components/organisms/aboutfoundrysection/AboutFoundrySection'
import { ClientSection } from '@/components/organisms/clientsection/ClientSection'
import { HeroSection } from '@/components/organisms/herosection/HeroSection'
import { InvestmentAreasSection } from '@/components/organisms/investmentareassection/InvestmentAreasSection'
import { NewsSection } from '@/components/organisms/newssection/NewsSection'
import { PortfolioSection } from '@/components/organisms/portfoliosection/PortfolioSection'

import {
  clientLogos,
  foundryFeatures,
  heroStats,
  homeHero,
  investmentAreas,
  newsItems,
  portfolioPrograms,
} from '@/data/home.data'

export function HomePage() {
  return (
    <main id="home" className="min-h-svh overflow-hidden bg-white font-primary text-text-inverse">
      <HeroSection hero={homeHero} stats={heroStats} />
      <AboutFoundrySection features={foundryFeatures} />
      <InvestmentAreasSection areas={investmentAreas} />
      <PortfolioSection programs={portfolioPrograms} />
      <NewsSection items={newsItems} />
      <ClientSection clients={clientLogos} />
    </main>
  )
}
