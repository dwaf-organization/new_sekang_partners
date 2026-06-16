import { Navigate, useParams } from 'react-router-dom'

import { PortfolioDetailContentSection } from '@/components/organisms/portfoliodetailcontentsection/PortfolioDetailContentSection'
import { PortfolioDetailHeroSection } from '@/components/organisms/portfoliodetailherosection/PortfolioDetailHeroSection'
import { portfolioDetails } from '@/data/portfolio.data'
import { ROUTES } from '@/router/routes'

export function PortfolioDetailPage() {
  const { portfolioId } = useParams<{ portfolioId: string }>()
  const detail = portfolioDetails.find((item) => item.id === portfolioId)

  if (!detail) {
    return <Navigate replace to={ROUTES.PORTFOLIO} />
  }

  return (
    <main className="min-h-svh bg-white font-primary">
      <PortfolioDetailHeroSection detail={detail} />
      <PortfolioDetailContentSection detail={detail} />
    </main>
  )
}
