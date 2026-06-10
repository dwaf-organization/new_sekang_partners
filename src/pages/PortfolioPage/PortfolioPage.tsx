import { PortfolioSection } from '@/components/organisms/portfoliosection/PortfolioSection'
import { portfolioItems } from '@/data/home.data'

export function PortfolioPage() {
  return (
    <main className="min-h-svh bg-surface-muted font-primary">
      <PortfolioSection items={portfolioItems} />
    </main>
  )
}
