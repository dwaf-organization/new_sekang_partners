import type { ReactNode } from 'react'

import { Footer } from '@/components/organisms/footer/Footer'
import { Header } from '@/components/organisms/header/Header'
import { navigationItems } from '@/data/navigation/navigation.data'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header navigationItems={navigationItems} />
      <div className="h-[86px] max-lg:h-20" aria-hidden="true" />
      {children}
      <Footer />
    </>
  )
}
