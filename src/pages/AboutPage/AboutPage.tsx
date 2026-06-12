import { AboutCtaSection } from '@/components/organisms/aboutctasection/AboutCtaSection'
import { AboutValueSection } from '@/components/organisms/aboutvaluesection/AboutValueSection'
import { CeoGreetingSection } from '@/components/organisms/ceogreetingsection/CeoGreetingSection'
import { CompanyHeroSection } from '@/components/organisms/companyherosection/CompanyHeroSection'
import { CompanyHistorySection } from '@/components/organisms/companyhistorysection/CompanyHistorySection'
import {
  aboutCta,
  aboutHero,
  aboutStats,
  aboutValueCards,
  ceoGreeting,
  historyBackgroundImageUrl,
  historyYears,
} from '@/data/about.data'

export function AboutPage() {
  return (
    <main className="min-h-svh bg-white font-primary text-text-inverse">
      <CompanyHeroSection hero={aboutHero} />
      <CeoGreetingSection greeting={ceoGreeting} stats={aboutStats} />
      <AboutValueSection cards={aboutValueCards} />
      <CompanyHistorySection backgroundImageUrl={historyBackgroundImageUrl} items={historyYears} />
      <AboutCtaSection cta={aboutCta} />
    </main>
  )
}
