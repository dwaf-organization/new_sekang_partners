import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import whiteLogo from '@/assets/images/WhiteLogo.png'
import { ROUTES } from '@/router/routes'
import type { NavigationItem } from '@/types/home.types'

type HeaderProps = {
  navigationItems: NavigationItem[]
}

export function Header({ navigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface-base text-text-primary shadow-[rgba(0,0,0,0.18)_0px_12px_36px_0px]">
      <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-[78px] max-lg:h-20 max-lg:px-6 max-md:px-5">
        <NavLink
          className="group inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          to={ROUTES.HOME}
          aria-label="세강파트너스 홈으로 이동"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="h-auto w-[186px] transition duration-300 group-hover:scale-105 max-md:w-[148px]"
            src={whiteLogo}
            alt="SEKANG partners"
          />
        </NavLink>

        <nav className="hidden items-center gap-11 lg:flex" aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'group relative rounded-sm py-2 text-[15px] leading-6 font-semibold whitespace-nowrap transition duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95',
                  isActive ? 'active text-primary' : 'text-text-primary',
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

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-text-primary transition duration-300 hover:border-primary hover:bg-primary-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-95 lg:hidden"
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
          className="border-t border-white/10 bg-surface-base px-6 py-5 lg:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-w-[1440px] gap-2">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-base font-bold transition duration-300 hover:bg-primary-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99]',
                    isActive ? 'bg-primary-100 text-primary' : 'text-text-primary',
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
