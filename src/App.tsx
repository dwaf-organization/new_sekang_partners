import type { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/components/templates/applayout/AppLayout'
import { AboutPage } from '@/pages/AboutPage/AboutPage'
import { AcceleratingPage } from '@/pages/AcceleratingPage/AcceleratingPage'
import { EducationPage } from '@/pages/EducationPage/EducationPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { InvestmentPage } from '@/pages/InvestmentPage/InvestmentPage'
import { PortfolioPage } from '@/pages/PortfolioPage/PortfolioPage'
import { TeamPage } from '@/pages/TeamPage/TeamPage'
import { ROUTES } from '@/router/routes'

function withAppLayout(page: ReactNode) {
  return <AppLayout>{page}</AppLayout>
}

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={withAppLayout(<HomePage />)} />
      <Route path={ROUTES.ABOUT} element={withAppLayout(<AboutPage />)} />
      <Route path={ROUTES.TEAM} element={withAppLayout(<TeamPage />)} />
      <Route path={ROUTES.INVESTMENT} element={withAppLayout(<InvestmentPage />)} />
      <Route path={ROUTES.PORTFOLIO} element={withAppLayout(<PortfolioPage />)} />
      <Route path={ROUTES.ACCELERATING} element={withAppLayout(<AcceleratingPage />)} />
      <Route path={ROUTES.EDUCATION} element={withAppLayout(<EducationPage />)} />
    </Routes>
  )
}

export default App
