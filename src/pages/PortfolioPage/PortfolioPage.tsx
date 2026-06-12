import { PortfolioSection } from '@/components/organisms/portfoliosection/PortfolioSection'
import { PortfolioPageHeroSection } from '@/components/organisms/portfoliopageherosection/PortfolioPageHeroSection'
import { portfolioHero, portfolioPagePrograms } from '@/data/portfolio.data'

export function PortfolioPage() {
  return (
    <main className="min-h-svh bg-section font-primary">
      <PortfolioPageHeroSection hero={portfolioHero} />
      <PortfolioSection programs={portfolioPagePrograms} />
    </main>
  )
}
