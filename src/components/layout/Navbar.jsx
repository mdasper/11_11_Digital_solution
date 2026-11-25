import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ArrowUpRight, Globe, TrendingUp, Smartphone, Film, Phone, Mail, ChevronDown } from 'lucide-react'
import { MAIN_NAV_ITEMS, SERVICES_MEGA_MENU, CONTACT_INFO } from '@/data/navigation'
import logoImg from '@/assets/logo-clean.png'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true)
  const location = useLocation()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

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
    Globe: <Globe className="w-4 h-4 text-crimson group-hover:text-white transition-colors duration-200" />,
    TrendingUp: <TrendingUp className="w-4 h-4 text-crimson group-hover:text-white transition-colors duration-200" />,
    Smartphone: <Smartphone className="w-4 h-4 text-crimson group-hover:text-white transition-colors duration-200" />,
    Film: <Film className="w-4 h-4 text-crimson group-hover:text-white transition-colors duration-200" />,
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] w-full bg-[#0D0A0C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out',
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

                      {/* Compact Sleek Vertical Dropdown (One by One) */}
                      <div
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[260px] transition-all duration-200 ease-out z-50',
                          servicesOpen && 'pointer-events-auto opacity-100 translate-y-0',
                          !servicesOpen && 'opacity-0 -translate-y-2 pointer-events-none'
                        )}
                      >
                        <div className="relative rounded-2xl bg-[#120811]/95 backdrop-blur-2xl border border-white/12 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(255,45,108,0.15)] overflow-hidden">
                          {/* Ambient Crimson top line */}
                          <div className="pointer-events-none absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-crimson to-transparent" />

                          {/* 4 Points - One by One Vertical Stack */}
                          <div className="flex flex-col gap-1">
                            {SERVICES_MEGA_MENU.map((service) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/10 transition-all duration-200"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-[#200A1A] border border-crimson/30 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:border-crimson transition-all duration-200 shadow-sm">
                                    {iconMap[service.icon]}
                                  </div>
                                  <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                                    {service.title}
                                  </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-crimson opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                              </Link>
                            ))}
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

      {/* Mobile Full-Screen Navigation Overlay (Neat, Luxurious, and Uncluttered) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-[#0A0709] text-white flex flex-col justify-between pt-24 pb-10 px-6 sm:px-8 md:hidden animate-in fade-in duration-200 overflow-y-auto">
          {/* Subtle Ambient Crimson Glow */}
          <div className="pointer-events-none absolute -top-24 right-0 w-80 h-80 bg-crimson/15 blur-[120px] rounded-full" />
          <div className="pointer-events-none absolute bottom-10 -left-10 w-72 h-72 bg-magenta/10 blur-[100px] rounded-full" />

          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-crimson font-bold">
                || Navigation
              </span>
              <span className="text-[10px] font-mono text-white/40">11 11 DIGITAL</span>
            </div>

            {/* Main Links */}
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-xs font-mono text-white/30">01</span>
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
              >
                <span>About</span>
                <span className="text-xs font-mono text-white/30">02</span>
              </Link>

              {/* Services Collapsible Group */}
              <div className="py-2 border-y border-white/[0.08] my-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full py-1 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-2">
                    Services
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-crimson/20 text-crimson font-bold">
                      4 CRAFTS
                    </span>
                  </span>
                  <ChevronDown className={cn("w-5 h-5 text-white/60 transition-transform duration-200", mobileServicesOpen && "rotate-180 text-crimson")} />
                </button>

                {mobileServicesOpen && (
                  <div className="grid grid-cols-1 gap-2 pt-3 pl-1">
                    {SERVICES_MEGA_MENU.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-crimson/40 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/[0.06] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-[#200A1A] border border-crimson/30 flex items-center justify-center text-crimson group-hover:bg-crimson group-hover:text-white transition-colors">
                            {iconMap[service.icon]}
                          </span>
                          <span className="text-sm font-medium">{service.title}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-crimson opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
              >
                <span>Work</span>
                <span className="text-xs font-mono text-white/30">03</span>
              </Link>

              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
              >
                <span>Pricing</span>
                <span className="text-xs font-mono text-white/30">04</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-xl font-display font-bold text-white hover:text-crimson transition-colors flex items-center justify-between"
              >
                <span>Contact</span>
                <span className="text-xs font-mono text-white/30">05</span>
              </Link>
            </nav>
          </div>

          {/* Bottom Action Section */}
          <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col gap-3.5 mt-4">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-white/80 hover:text-white hover:border-crimson transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-crimson" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/919566498072?text=${encodeURIComponent('Hi Mohamed, I would like to discuss a project with 11 11 Digital Solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/35 flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-400 hover:bg-[#25D366]/25 transition-all font-bold"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-crimson-glow font-bold uppercase tracking-wider text-xs py-3.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
