import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ArrowUpRight, Globe, TrendingUp, Smartphone, Film, Phone, Mail } from 'lucide-react'
import { MAIN_NAV_ITEMS, SERVICES_MEGA_MENU, CONTACT_INFO } from '@/data/navigation'
import logoImg from '@/assets/logo-clean.png'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Handle smart scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !servicesOpen && !mobileMenuOpen) {
          setIsVisible(false) // scrolling down
        } else {
          setIsVisible(true) // scrolling up
        }
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, servicesOpen, mobileMenuOpen])

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  const iconMap = {
    Globe: <Globe className="w-5 h-5 text-crimson group-hover/card:text-white transition-colors duration-300" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-crimson group-hover/card:text-white transition-colors duration-300" />,
    Smartphone: <Smartphone className="w-5 h-5 text-crimson group-hover/card:text-white transition-colors duration-300" />,
    Film: <Film className="w-5 h-5 text-crimson group-hover/card:text-white transition-colors duration-300" />,
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full bg-[#0D0A0C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        {/* Full-Screen Edge-to-Edge Navigation Bar */}
        <nav
          className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-300"
          aria-label="Main Navigation"
        >
          {/* LEFT: High-Fidelity Transparent Brand Logo */}
          <Link
            to="/"
            className="flex items-center group relative z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-xl py-0.5"
          >
            <img
              src={logoImg}
              alt="11 11 Digital Solutions"
              className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_14px_rgba(248,17,90,0.3)]"
            />
          </Link>

          {/* RIGHT: Desktop Nav Links & Quick CTAs */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-1 lg:gap-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href
                const isServices = item.label === 'Services'

                if (isServices) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson',
                          location.pathname.startsWith('/services')
                            ? 'text-crimson font-bold bg-crimson/15 border border-crimson/30'
                            : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] opacity-60">▾</span>
                      </Link>

                      {/* Luxury Mega Menu Dropdown */}
                      <div
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[660px] max-w-[95vw] transition-all duration-300 ease-out z-50',
                          servicesOpen && 'pointer-events-auto opacity-100 translate-y-0',
                          !servicesOpen && 'opacity-0 -translate-y-2 pointer-events-none'
                        )}
                      >
                        <div className="relative rounded-[28px] bg-[#120811]/95 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 shadow-[0_30px_90px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,45,108,0.15)] overflow-hidden">
                          {/* Ambient Crimson internal glow */}
                          <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-28 bg-crimson/20 rounded-full blur-[60px]" />
                          <div className="pointer-events-none absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-crimson to-transparent" />

                          {/* Header Eyebrow */}
                          <div className="relative z-10 flex items-center justify-between pb-3 mb-2 px-2 border-b border-white/[0.08]">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF9BB5]">
                              || Core Disciplines
                            </span>
                            <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider font-semibold">
                              04 Flagship Crafts
                            </span>
                          </div>

                          {/* 4 Capabilities in Clean, Non-Boxy 2-Column Grid */}
                          <div className="relative z-10 grid grid-cols-2 gap-2">
                            {SERVICES_MEGA_MENU.map((service) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="group/card p-3.5 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden"
                              >
                                {/* Subtle Hover Gradient Fill */}
                                <div className="absolute inset-0 bg-gradient-to-r from-crimson/[0.08] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                                {/* Glowing Icon Badge */}
                                <div className="w-11 h-11 rounded-2xl bg-[#200A1A] border border-crimson/30 flex items-center justify-center shrink-0 group-hover/card:scale-105 group-hover/card:bg-gradient-to-br group-hover/card:from-crimson group-hover/card:to-magenta group-hover/card:border-transparent transition-all duration-300 shadow-[0_4px_14px_rgba(255,45,108,0.15)] relative z-10">
                                  {iconMap[service.icon]}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 relative z-10">
                                  <h4 className="text-[14px] font-display font-extrabold text-white group-hover/card:text-[#FFA3BD] transition-colors flex items-center justify-between leading-snug">
                                    <span>{service.title}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-crimson/70 group-hover/card:text-crimson opacity-0 -translate-x-1 translate-y-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-200 shrink-0 ml-1" />
                                  </h4>
                                  <p className="text-[11.5px] text-white/65 mt-1 font-normal leading-relaxed">
                                    {service.tagline}
                                  </p>
                                  <span className="inline-block mt-1.5 text-[10px] font-mono text-[#FF9BB5]/80 font-medium">
                                    {service.badge}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Bottom Quick-Action Bar */}
                          <div className="relative z-10 mt-3 pt-3 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[11px] font-mono text-white/70">
                                Direct Partner Execution · Zero Runarounds
                              </span>
                            </div>
                            <Link
                              to="/services"
                              className="text-[11px] font-mono font-bold text-crimson hover:text-white transition-colors flex items-center gap-1 group/all"
                            >
                              <span>All Capabilities</span>
                              <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      'relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson',
                      isActive
                        ? 'text-crimson font-bold bg-crimson/15 border border-crimson/30'
                        : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-crimson rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right Action: CTA Button */}
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="md" className="text-xs font-bold uppercase tracking-wider shadow-crimson-glow">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:text-crimson hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0A0C]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 md:hidden animate-in fade-in zoom-in-95 duration-300 text-white overflow-y-auto max-h-[100svh]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson">
              || Navigation
            </span>
            <div className="flex flex-col gap-4">
              {MAIN_NAV_ITEMS.map((item, idx) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {item.label}
                  <span className="text-sm font-mono text-white/50">0{idx + 1}</span>
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="grid grid-cols-2 gap-2.5">
                {SERVICES_MEGA_MENU.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/90 hover:text-crimson hover:border-crimson/40 transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Quick Contact */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4 mt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-white/70">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-crimson">
                <Phone className="w-3.5 h-3.5 text-crimson shrink-0" /> {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-crimson truncate max-w-full">
                <Mail className="w-3.5 h-3.5 text-crimson shrink-0" /> {CONTACT_INFO.email}
              </a>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
