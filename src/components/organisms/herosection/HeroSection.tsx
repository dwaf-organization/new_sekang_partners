import { motion, useReducedMotion } from 'motion/react'
import { NavLink } from 'react-router-dom'

import mainBannerImage from '@/assets/images/MainBannerImage.png'
import { ScrollReveal } from '@/components/atoms/scrollreveal/ScrollReveal'
import { HeroParticleCanvas } from '@/components/molecules/heroparticlecanvas/HeroParticleCanvas'
import type { HeroStat, HomeHero } from '@/types/home.types'

type HeroSectionProps = {
  hero: HomeHero
  stats: HeroStat[]
}

const constellationDots = [
  { id: 'star-1', left: '10%', top: '24%', size: 'h-1.5 w-1.5', delay: 0 },
  { id: 'star-2', left: '18%', top: '58%', size: 'h-1 w-1', delay: 0.4 },
  { id: 'star-3', left: '27%', top: '18%', size: 'h-1.5 w-1.5', delay: 0.8 },
  { id: 'star-4', left: '39%', top: '36%', size: 'h-2 w-2', delay: 0.2 },
  { id: 'star-5', left: '50%', top: '24%', size: 'h-1 w-1', delay: 0.7 },
  { id: 'star-6', left: '62%', top: '52%', size: 'h-1.5 w-1.5', delay: 0.1 },
  { id: 'star-7', left: '73%', top: '22%', size: 'h-1 w-1', delay: 0.5 },
  { id: 'star-8', left: '84%', top: '44%', size: 'h-2 w-2', delay: 0.9 },
  { id: 'star-9', left: '92%', top: '66%', size: 'h-1.5 w-1.5', delay: 0.3 },
]

const constellationLines = [
  { id: 'line-1', left: '12%', top: '28%', width: '18%', rotate: '18deg' },
  { id: 'line-2', left: '38%', top: '39%', width: '24%', rotate: '-14deg' },
  { id: 'line-3', left: '61%', top: '32%', width: '23%', rotate: '20deg' },
  { id: 'line-4', left: '72%', top: '55%', width: '20%', rotate: '-9deg' },
]

const constellationGroups = [
  {
    id: 'cluster-left',
    className: 'top-[18%] left-[8%] h-32 w-52 max-md:left-[-12%] max-md:top-[16%]',
    points: '10,70 48,35 86,58 126,18 178,42',
    circles: [
      [10, 70],
      [48, 35],
      [86, 58],
      [126, 18],
      [178, 42],
    ],
    delay: 0,
  },
  {
    id: 'cluster-right',
    className: 'top-[20%] right-[7%] h-36 w-56 max-md:right-[-18%] max-md:top-[28%]',
    points: '16,34 62,18 110,52 152,28 202,76',
    circles: [
      [16, 34],
      [62, 18],
      [110, 52],
      [152, 28],
      [202, 76],
    ],
    delay: 0.45,
  },
  {
    id: 'cluster-bottom',
    className: 'right-[18%] bottom-[18%] h-28 w-48 max-lg:hidden',
    points: '12,64 58,42 96,70 136,30 172,58',
    circles: [
      [12, 64],
      [58, 42],
      [96, 70],
      [136, 30],
      [172, 58],
    ],
    delay: 0.9,
  },
]

export function HeroSection({ hero, stats }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="relative flex min-h-svh overflow-hidden bg-surface-base text-text-primary"
    >
      <img
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-35"
        src={mainBannerImage}
        alt=""
      />
      <div className="absolute inset-0 bg-linear-to-b from-surface-base/80 via-surface-muted/80 to-surface-base/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(14,81,213,0.34),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(120,43,255,0.18),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-hero-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hero-grid)_1px,transparent_1px)] bg-size-[72px_72px] opacity-35 [mask-[radial-gradient(circle_at_50%_42%,black,transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,var(--color-hero-grid)_48%,transparent_58%)] opacity-20 mask-[linear-gradient(to_bottom,transparent,black_18%,black_70%,transparent)]" />
      <HeroParticleCanvas disabled={Boolean(shouldReduceMotion)} />

      {constellationLines.map((line) => (
        <motion.span
          aria-hidden="true"
          className="absolute h-px origin-left bg-linear-to-r from-primary-gradient-start/0 via-primary-gradient-start/25 to-primary-gradient-end/0"
          key={line.id}
          style={{
            left: line.left,
            top: line.top,
            width: line.width,
            rotate: line.rotate,
          }}
          animate={shouldReduceMotion ? undefined : { opacity: [0.04, 0.34, 0.04] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {constellationGroups.map((group) => (
        <motion.svg
          aria-hidden="true"
          className={[
            'absolute overflow-visible text-primary-gradient-start drop-shadow-[0_0_10px_rgba(0,198,255,0.32)]',
            group.className,
          ].join(' ')}
          key={group.id}
          viewBox="0 0 220 110"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.16, 0.46, 0.16],
                  y: [0, -14, 0],
                  x: [0, 8, 0],
                }
          }
          transition={{
            duration: 6.4,
            delay: group.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.polyline
            fill="none"
            points={group.points}
            stroke="currentColor"
            strokeDasharray="5 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.45"
            initial={shouldReduceMotion ? false : { pathLength: 0 }}
            animate={shouldReduceMotion ? undefined : { pathLength: [0.25, 1, 0.25] }}
            transition={{
              duration: 5.2,
              delay: group.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {group.circles.map(([cx, cy]) => (
            <circle
              className="fill-primary-gradient-start"
              cx={cx}
              cy={cy}
              key={`${group.id}-${cx}-${cy}`}
              r="2.4"
            />
          ))}
        </motion.svg>
      ))}

      {constellationDots.map((dot) => (
        <motion.span
          aria-hidden="true"
          className={[
            'absolute rounded-full bg-primary-gradient-start shadow-[rgba(0,198,255,0.9)_0px_0px_18px_4px]',
            dot.size,
          ].join(' ')}
          key={dot.id}
          style={{ left: dot.left, top: dot.top }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.35, 1, 0.35],
                  scale: [1, 1.55, 1],
                  y: [0, -16, 0],
                }
          }
          transition={{
            duration: 4,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200"
        animate={shouldReduceMotion ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-360 flex-col items-center justify-center px-8 pt-28 pb-16 text-center max-md:px-5">
        <ScrollReveal y={28}>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-gradient-start/35 bg-linear-to-r from-primary-gradient-start/10 to-primary-gradient-end/10 px-5 py-2 text-sm font-black backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-gradient-start shadow-[rgba(0,198,255,0.9)_0px_0px_14px_3px]" />
            <span className="bg-linear-to-r from-primary-gradient-start via-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
              {hero.eyebrow}
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} y={42}>
          <h1 className="mt-9 text-[76px] leading-[0.98] font-black tracking-[-0.02em] max-lg:text-[60px] max-md:text-[46px] max-sm:text-[40px]">
            {hero.titleLines.map((line) => (
              <span className="block" key={line.id}>
                {line.highlighted ? (
                  <span className="bg-linear-to-r from-primary-gradient-start to-primary-gradient-end bg-clip-text text-transparent">
                    {line.text}
                  </span>
                ) : (
                  line.text
                )}
              </span>
            ))}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} y={36}>
          <p className="mx-auto mt-8 max-w-150 text-base leading-7 font-semibold text-text-primary/72 max-md:text-sm max-md:leading-6">
            {hero.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} y={30}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-black text-text-primary transition duration-300 hover:-translate-y-1 hover:shadow-[rgba(14,81,213,0.45)_0px_12px_28px_0px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95"
              to={hero.primaryAction.path}
            >
              {hero.primaryAction.label}
            </NavLink>
            <NavLink
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 bg-white/5 px-7 text-sm font-black text-text-primary backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95"
              to={hero.secondaryAction.path}
            >
              {hero.secondaryAction.label}
            </NavLink>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.42} y={26}>
          <dl className="mt-12 grid grid-cols-2 gap-10 max-sm:gap-5">
            {stats.map((stat) => (
              <div key={stat.id}>
                <dt className="text-xs font-bold text-text-primary/50">{stat.label}</dt>
                <dd className="mt-1 text-xl font-black text-primary max-sm:text-lg">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>

        <motion.div
          aria-hidden="true"
          className="absolute bottom-7 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-primary-200 text-primary"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 10, 0],
                  boxShadow: [
                    'rgba(14,81,213,0.1) 0px 0px 0px 0px',
                    'rgba(14,81,213,0.5) 0px 0px 28px 4px',
                    'rgba(14,81,213,0.1) 0px 0px 0px 0px',
                  ],
                }
          }
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}
