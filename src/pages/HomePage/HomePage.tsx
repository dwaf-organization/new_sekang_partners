import { EducationSection } from '@/components/organisms/educationsection/EducationSection'
import { HeroSection } from '@/components/organisms/herosection/HeroSection'
import { PortfolioSection } from '@/components/organisms/portfoliosection/PortfolioSection'
import { ServiceOverviewSection } from '@/components/organisms/serviceoverviewsection/ServiceOverviewSection'
// import { TeamSection } from '@/components/organisms/teamsection/TeamSection'

import { homeHero, homeMetrics, portfolioItems, serviceCards } from '@/data/home.data'

export function HomePage() {
  return (
    <main id="home" className="min-h-svh overflow-hidden bg-white font-primary text-text-inverse">
      <HeroSection hero={homeHero} />
      <ServiceOverviewSection metrics={homeMetrics} serviceCards={serviceCards} />
      <PortfolioSection items={portfolioItems} />
      {/* <TeamSection members={teamMembers} /> */}
      <EducationSection items={portfolioItems} />
    </main>
  )
}
