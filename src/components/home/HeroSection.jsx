import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

import heroWebsites from '@/assets/crafts/hero-websites.jpg'
import heroMarketing from '@/assets/crafts/hero-marketing.jpg'
import heroReels from '@/assets/crafts/hero-reels.jpg'
import heroEditing from '@/assets/crafts/hero-editing.jpg'
import heroSuite from '@/assets/crafts/hero-suite.jpg'

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const SLIDE_DURATION = 4000 // 4 seconds per slide

  // 5 Flagship Hero Slides with 3D Objects Right-Aligned & Left Negative Space
  const SLIDES = [
    {
      id: 0,
      category: 'WEBSITE DEVELOPMENT & APPS',
      headlinePrefix: 'We build digital platforms that',
      headlineAccent: 'scale enterprise brands.',
      subtext:
        'High-performance websites and custom web applications engineered with sub-second speeds, flawless responsive design, and conversion-focused architectures.',
      primaryCta: { label: 'Start Your Project', href: '/contact' },
      secondaryCta: { label: 'Explore Selected Work', href: '/work' },
      image: heroWebsites,
      alt: 'Web Architecture & Interactive Engineering'
    },
    {
      id: 1,
      category: 'PERFORMANCE DIGITAL MARKETING',
      headlinePrefix: 'Data-driven ad funnels that',
      headlineAccent: 'scale revenue predictably.',
      subtext:
        'High-converting Meta & Google ad architectures, automated retargeting, and dynamic landing pages engineered to turn traffic into qualified pipeline.',
      primaryCta: { label: 'Scale Your Marketing', href: '/services/marketing' },
      secondaryCta: { label: 'View Marketing Funnels', href: '/work/highland-origin' },
      image: heroMarketing,
      alt: 'Performance Marketing & Analytics Terminal'
    },
    {
      id: 2,
      category: 'VIRAL REELS & SHORT-FORM VIDEO',
      headlinePrefix: 'Algorithm-dominating reels that',
      headlineAccent: 'capture millions of views.',
      subtext:
        'Psychology-backed scripts, cinema 4K production, and retention-engineered editing built to dominate Instagram Reels and YouTube Shorts organically.',
      primaryCta: { label: 'Launch Reels Campaign', href: '/services/reels' },
      secondaryCta: { label: 'Watch Production Reels', href: '/work/snapit-studio' },
      image: heroReels,
      alt: 'Cinema 4K Reels Production & Viral Timeline'
    },
    {
      id: 3,
      category: 'CINEMATIC POST-PRODUCTION',
      headlinePrefix: 'Hollywood-grade grading and',
      headlineAccent: 'cinematic sound design.',
      subtext:
        'DaVinci Resolve studio color grading, bespoke sound design, custom kinetic motion, and hyper-fluid pacing delivered in rapid 48-hour turnarounds.',
      primaryCta: { label: 'Explore Editing Suites', href: '/services/editing' },
      secondaryCta: { label: 'View Post-Production', href: '/work/fazil-garments' },
      image: heroEditing,
      alt: 'DaVinci Resolve Color Grading Studio Console'
    },
    {
      id: 4,
      category: 'FULL-STACK DIGITAL SUITE',
      headlinePrefix: 'Total digital dominance under',
      headlineAccent: 'one unified studio.',
      subtext:
        'Web development, paid advertising, and organic video production fused into one cohesive powerhouse driving non-stop business expansion.',
      primaryCta: { label: 'Get Full Proposal', href: '/contact' },
      secondaryCta: { label: 'Compare Packages', href: '/pricing' },
      image: heroSuite,
      alt: 'Full-Stack Digital Agency Command Suite'
    }
  ]

  // Smooth 4-second autoplay timer
  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timerRef.current)
  }, [currentSlide, isPaused, SLIDES.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const activeSlide = SLIDES[currentSlide]

  return (
    <section
      id="section-hero"
      className="relative min-h-[100svh] h-auto lg:h-screen lg:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#0D0A0C] border-b border-white/[0.08]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 8K Full-Bleed Studio Background Images:
          Right side contains the sharp 3D visual object; left side is clean negative space.
          Smooth crossfade between slides.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {SLIDES.map((slide, idx) => {
          const isActive = currentSlide === idx
          return (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                isActive ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-right md:object-center"
              />
            </div>
          )
        })}

        {/* Localized Scrim: Mobile uses top-to-bottom dark gradient to guarantee crisp legibility; Desktop uses left-to-right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-[#0D0A0C]/85 to-[#0D0A0C]/50 sm:hidden" />
        <div className="hidden sm:block absolute inset-y-0 left-0 w-full sm:w-3/5 lg:w-1/2 bg-gradient-to-r from-[#0D0A0C]/95 via-[#0D0A0C]/60 to-transparent" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#0D0A0C]/50 via-transparent to-[#0D0A0C]/40" />

        {/* Ambient Crimson Glow Highlights */}
        <div className="absolute -top-32 right-10 w-[550px] h-[550px] rounded-full bg-crimson/[0.12] blur-[150px]" />
        <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] rounded-full bg-crimson/[0.08] blur-[140px]" />
      </div>

      {/* Left Edge Arrow Button (Desktop / Tablet) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-2.5 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#120E11]/90 hover:bg-crimson text-white border border-white/20 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.6)] items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-crimson"
      >
        <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Right Edge Arrow Button (Desktop / Tablet) */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-2.5 sm:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#120E11]/90 hover:bg-crimson text-white border border-white/20 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.6)] items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-crimson"
      >
        <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Main Content: Full-width responsive padding with zero content squeeze on 375px */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-5 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-28 sm:pr-10 lg:pr-16 my-auto flex flex-col items-start">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#FF9BB5] uppercase">
            {activeSlide.category}
          </span>
        </div>

        {/* Full-Width Headline: Fluid typography with zero word clipping */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[5rem] font-display font-extrabold tracking-[-0.03em] text-white leading-[1.12] sm:leading-[1.05] mb-4 sm:mb-6 max-w-4xl break-words">
          <span>{activeSlide.headlinePrefix} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] block sm:inline font-display font-extrabold">
            {activeSlide.headlineAccent}
          </span>
        </h1>

        {/* Subtext: Fluid text scale and clean line length */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mb-6 sm:mb-10 drop-shadow-sm font-normal">
          {activeSlide.subtext}
        </p>

        {/* Action CTAs: Full-width touch buttons on mobile, inline on tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
          <Link to={activeSlide.primaryCta.href} className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center shadow-crimson-glow-lg text-sm sm:text-base font-bold bg-gradient-to-r from-crimson to-magenta hover:brightness-110 active:scale-95 transition-all px-7 sm:px-8 py-3.5 sm:py-4"
            >
              <span>{activeSlide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to={activeSlide.secondaryCta.href} className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md active:scale-95 transition-all px-6 sm:px-7 py-3.5 sm:py-4"
            >
              <span>{activeSlide.secondaryCta.label}</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Slide Navigation Pill Indicators */}
        <div className="flex items-center gap-2 mt-8 sm:mt-10">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                currentSlide === idx
                  ? 'w-8 bg-crimson shadow-[0_0_12px_rgba(248,17,90,0.8)]'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
