import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import colorLogo from '@/assets/images/ColorLogo.png'
import whiteLogo from '@/assets/images/WhiteLogo.png'
import { ROUTES } from '@/router/routes'
import type { NavigationItem } from '@/types/home.types'

type HeaderProps = {
  navigationItems: NavigationItem[]
}

export function Header({ navigationItems }: HeaderProps) {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(() =>
    typeof window === 'undefined' ? false : window.scrollY > 80,
  )
  const primaryNavigationItems = navigationItems.filter((item) => item.id !== 'investment-inquiry')
  const isHomePage = pathname === ROUTES.HOME

  useEffect(() => {
    const updateHeaderState = () => {
      const heroHeight =
        document.querySelector('#about')?.getBoundingClientRect().height ??
        document.querySelector('main > section')?.getBoundingClientRect().height
      const threshold = heroHeight ? Math.max(heroHeight - 90, 80) : 80
      setIsScrolledPastHero(window.scrollY > threshold)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [pathname])

  const hasSolidBackground = isScrolledPastHero || isMenuOpen
  const isLightHeader = hasSolidBackground && !isHomePage
  const logoImage = isLightHeader ? colorLogo : whiteLogo

  return (
    <header
      className={[
        'fixed top-0 right-0 left-0 z-50 transition-[background-color,box-shadow,backdrop-filter,color] duration-500',
        isLightHeader ? 'text-text-inverse' : 'text-text-primary',
        hasSolidBackground && isHomePage
          ? 'bg-surface-base shadow-[rgba(0,0,0,0.18)_0px_12px_36px_0px]'
          : '',
        isLightHeader ? 'bg-white shadow-[rgba(14,81,213,0.1)_0px_10px_30px_0px]' : '',
        hasSolidBackground ? '' : 'bg-transparent shadow-none backdrop-blur-[2px]',
      ].join(' ')}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 max-md:px-5">
        <NavLink
          className="group inline-flex min-w-32 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          to={ROUTES.HOME}
          aria-label="세강파트너스 홈으로 이동"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="h-auto w-[132px] transition duration-300 group-hover:scale-105 max-md:w-[116px]"
            src={logoImage}
            alt="가온브릿지"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-11" aria-label="주요 메뉴">
          {primaryNavigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'group relative rounded-sm py-2 text-[15px] leading-6 font-semibold whitespace-nowrap transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95',
                  isLightHeader
                    ? 'text-text-inverse/70 hover:text-text-inverse'
                    : 'text-text-primary/70 hover:text-text-primary',
                  isActive ? 'active text-primary' : '',
                ].join(' ')
              }
              to={item.path}
              key={item.id}
            >
              {item.label}
              <span className="absolute right-0 -bottom-1 left-0 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" />
            </NavLink>
          ))}
        </nav>

        <NavLink
          className="ml-8 hidden h-12 shrink-0 items-center justify-center rounded-lg bg-primary px-6 text-[15px] font-black text-text-primary transition duration-300 hover:shadow-[rgba(14,81,213,0.45)_0px_8px_20px_0px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95 lg:inline-flex"
          to={ROUTES.INVESTMENT_INQUIRY}
        >
          투자 문의
        </NavLink>

        <button
          className={[
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:border-primary hover:bg-primary-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95 lg:hidden',
            isLightHeader ? 'border-text-inverse/15' : 'border-white/20',
          ].join(' ')}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={[
                'h-0.5 w-5 rounded-full bg-current transition duration-300',
                isMenuOpen ? 'translate-y-2 rotate-45' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <span
              className={[
                'h-0.5 w-5 rounded-full bg-current transition duration-300',
                isMenuOpen ? 'opacity-0' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <span
              className={[
                'h-0.5 w-5 rounded-full bg-current transition duration-300',
                isMenuOpen ? '-translate-y-2 -rotate-45' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="모바일 주요 메뉴"
          className={[
            'border-t px-6 py-5 lg:hidden',
            isLightHeader ? 'border-text-inverse/10 bg-white' : 'border-white/10 bg-surface-base',
          ].join(' ')}
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-[1440px] gap-2">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-base font-bold transition duration-300 hover:bg-primary-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99]',
                    isActive
                      ? 'bg-primary-100 text-primary'
                      : isLightHeader
                        ? 'text-text-inverse'
                        : 'text-text-primary',
                  ].join(' ')
                }
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
