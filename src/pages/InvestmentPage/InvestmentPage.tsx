import { InvestmentDiagramSection } from '@/components/organisms/investmentdiagramsection/InvestmentDiagramSection'
import { InvestmentPageHeroSection } from '@/components/organisms/investmentpageherosection/InvestmentPageHeroSection'
import { investmentAreaDetails, investmentHero } from '@/data/investment.data'

export function InvestmentPage() {
  return (
    <main className="min-h-svh bg-white font-primary text-text-inverse">
      <InvestmentPageHeroSection hero={investmentHero} />
      <InvestmentDiagramSection areas={investmentAreaDetails} />
    </main>
  )
}
