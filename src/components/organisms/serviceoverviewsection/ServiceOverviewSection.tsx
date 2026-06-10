import acceleratorImage from '@/assets/images/AcceleratorImage.png'
import educationImage from '@/assets/images/EducationImage.png'
import investImage from '@/assets/images/InvestImage.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { MetricItem } from '@/components/molecules/metricitem/MetricItem'
import { ServiceCard } from '@/components/molecules/servicecard/ServiceCard'
import type { HomeMetric, ServiceCard as ServiceCardType } from '@/types/home.types'

type ServiceOverviewSectionProps = {
  metrics: HomeMetric[]
  serviceCards: ServiceCardType[]
}

const serviceImageMap: Record<ServiceCardType['image'], string> = {
  invest: investImage,
  accelerator: acceleratorImage,
  education: educationImage,
}

export function ServiceOverviewSection({ metrics, serviceCards }: ServiceOverviewSectionProps) {
  return (
    <section
      id="investment"
      className="mx-auto max-w-7xl px-0 py-22 max-lg:px-8 max-lg:py-16 max-md:px-5"
    >
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
        {serviceCards.map((card, index) => (
          <ScrollReveal delay={index * 0.08} key={card.id}>
            <ServiceCard card={card} imageSrc={serviceImageMap[card.image]} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.18}>
        <div className="mt-12 border-y border-gray-300/70 py-7">
          <dl className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {metrics.map((metric) => (
              <MetricItem key={metric.id} metric={metric} />
            ))}
          </dl>
        </div>
      </ScrollReveal>
    </section>
  )
}
