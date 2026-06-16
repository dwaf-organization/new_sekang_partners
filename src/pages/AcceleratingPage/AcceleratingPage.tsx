import { AcceleratingApplySection } from '@/components/organisms/acceleratingapplysection/AcceleratingApplySection'
import { AcceleratingBenefitsSection } from '@/components/organisms/acceleratingbenefitssection/AcceleratingBenefitsSection'
import { AcceleratingPageHeroSection } from '@/components/organisms/acceleratingpageherosection/AcceleratingPageHeroSection'
import { AcceleratingProcessSection } from '@/components/organisms/acceleratingprocesssection/AcceleratingProcessSection'
import {
  acceleratingApplyCta,
  acceleratingBenefits,
  acceleratingHero,
  acceleratingMetrics,
  acceleratingProcesses,
} from '@/data/accelerating.data'

export function AcceleratingPage() {
  return (
    <main className="min-h-svh bg-section-alt font-primary">
      <AcceleratingPageHeroSection hero={acceleratingHero} metrics={acceleratingMetrics} />
      <AcceleratingProcessSection processes={acceleratingProcesses} />
      <AcceleratingBenefitsSection benefits={acceleratingBenefits} />
      <AcceleratingApplySection cta={acceleratingApplyCta} />
    </main>
  )
}
