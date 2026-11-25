import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import { gsap } from '@/lib/gsap'

export const StackedWorkDeck = () => {
  const containerRef = useRef(null)

  const projectHighlights = [
    {
      category: 'HOSPITAL & HEALTHCARE',
      highlight: '3.4x Increase in Patient Appointments',
      metric: '0.8s Page Speed'
    },
    {
      category: 'SPECIALTY COFFEE EXPORT',
      highlight: 'International B2B Importers Onboarded',
      metric: '12 Countries Reached'
    },
    {
      category: 'INDUSTRIAL APPAREL MFG',
      highlight: '40% Growth in Direct Export Orders',
      metric: '500K+ Units Cataloged'
    },
    {
      category: 'CINEMA REELS & VIDEO',
      highlight: '1.2M+ Collective Organic Views',
      metric: '85%+ Retention Rate'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.deck-card')
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.96,
            opacity: 0.9,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top 85%',
              end: 'top 96px',
              scrub: true,
            },
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-28 sm:py-36 bg-gradient-to-b from-[#FAF5F8] via-[#FFF5F8] to-white relative border-b border-black/[0.06]"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-crimson uppercase block mb-4">
              // FEATURED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#120E11]">
              Selected <span className="text-gradient font-display font-extrabold">work</span> that converts.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-sm font-extrabold text-[#120E11] hover:border-crimson hover:text-crimson transition-all shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Stacked Clean Deck Container */}
        <div className="relative space-y-12">
          {PROJECTS.map((project, idx) => {
            const info = projectHighlights[idx] || projectHighlights[0]

            return (
              <div
                key={project.id}
                className="deck-card sticky top-24 rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(18,14,17,0.06)] overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Clean Editorial Narrative */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <span className="text-xs font-mono font-bold text-crimson tracking-widest uppercase block mb-3">
                        {info.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#120E11] mb-4">
                        {project.title}
                      </h3>

                      {/* Concise Description */}
                      <p className="text-base text-[#5C5259] leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Single Impact Highlight Box */}
                      <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.06] mb-8">
                        <span className="text-xs font-mono font-bold uppercase text-crimson tracking-wider block mb-1">
                          Verified Result
                        </span>
                        <p className="text-xl sm:text-2xl font-display font-extrabold text-[#120E11]">
                          {info.highlight}
                        </p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-5 pt-6 border-t border-black/[0.06]">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-crimson to-magenta text-white text-xs font-bold uppercase tracking-wider shadow-crimson-glow hover:opacity-90 transition-all"
                      >
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Clean, Uncluttered Showcase Frame */}
                  <div className="lg:col-span-7 relative flex items-center justify-center">
                    <div className="w-full max-w-[560px] mx-auto">
                      <DeviceMockup
                        type={project.deviceType === 'phone' ? 'phone' : 'laptop'}
                        imageSrc={project.mockupImage}
                        alt={`${project.title} Mockup`}
                        scrollOnHover={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
