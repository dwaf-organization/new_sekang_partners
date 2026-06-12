import { NavLink } from 'react-router-dom'

import whiteLogo from '@/assets/images/WhiteLogo.png'
import { footerCompanyInfo, footerMenuLinks, footerPolicyLinks } from '@/data/footer/footer.data'

export function Footer() {
  return (
    <footer className="bg-footer px-19.5 py-12 font-primary text-text-primary max-lg:px-8 max-md:px-5">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_1.5fr_1.4fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <NavLink
            className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            to="/"
            aria-label="가온브릿지 홈으로 이동"
          >
            <img className="h-auto w-[132px] max-md:w-[116px]" src={whiteLogo} alt="가온브릿지" />
          </NavLink>

          <div className="mt-11 flex flex-wrap gap-x-2 gap-y-1 text-xs font-semibold text-text-primary/90">
            {footerPolicyLinks.map((link, index) => (
              <span className="inline-flex items-center gap-2" key={link.id}>
                <NavLink
                  className="rounded-sm transition duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  to={link.path}
                >
                  {link.label}
                </NavLink>
                {index < footerPolicyLinks.length - 1 ? (
                  <span className="h-3 w-px bg-text-primary/50" aria-hidden="true" />
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <address className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs leading-5 font-semibold not-italic text-text-primary/90 max-md:grid-cols-1">
          {footerCompanyInfo.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </address>

        <div className="justify-self-end text-right max-lg:justify-self-start max-lg:text-left">
          <a
            className="inline-flex items-center gap-3 rounded-sm text-[34px] leading-none font-black transition duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-md:text-[28px]"
            href="tel:051-123-4567"
          >
            <svg
              className="h-9 w-9 max-md:h-7 max-md:w-7"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="18" fill="currentColor" />
              <path
                d="M13.5 9.8c.7-.3 1.5 0 1.9.7l1.4 2.7c.3.6.2 1.3-.3 1.8l-1 1c1.1 2.1 2.8 3.8 4.9 4.9l1-1c.5-.5 1.2-.6 1.8-.3l2.7 1.4c.7.4 1 1.2.7 1.9l-.8 2.2c-.3.8-1 1.3-1.8 1.3C15.9 26.4 9.6 20.1 9.6 12c0-.8.5-1.5 1.3-1.8l2.6-.4Z"
                className="fill-footer"
              />
            </svg>
            051-123-4567
          </a>

          <nav
            className="mt-11 flex flex-wrap justify-end gap-x-7 gap-y-3 text-sm font-bold max-lg:justify-start"
            aria-label="푸터 메뉴"
          >
            {footerMenuLinks.map((link) => (
              <NavLink
                className="rounded-sm transition duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                key={link.id}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <p className="mt-9 text-sm font-semibold text-text-primary/80">
            Copyright © dwaf. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
