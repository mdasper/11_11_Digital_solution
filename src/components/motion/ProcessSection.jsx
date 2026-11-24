import React, { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'

export const ProcessSection = () => {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  const steps = [
    {
      num: '01',
      title: 'Discovery & Goal Alignment',
      desc: 'We hop on a direct call, understand your exact business goals, and map out a clear plan tailored to your audience and industry.',
      duration: '48 Hours',
      icon: Search,
      deliverable: 'Clear Roadmap & Scope'
    },
    {
      num: '02',
      title: 'Custom UI & Visual Design',
      desc: 'Zero generic templates. We craft a bespoke, modern design in Figma for you to preview, test, and approve before a single line of code is written.',
      duration: 'Day 02 - 03',
      icon: PenTool,
      deliverable: 'Interactive Figma Preview'
    },
    {
      num: '03',
      title: 'Fast Development & Media',
      desc: 'We build your platform with lightning-fast code, write clear persuasive copy, and produce cinema-grade 4K videos ready to grab attention.',
      duration: 'Day 04 - 05',
      icon: Code2,
      deliverable: 'High-Speed Site & 4K Media'
    },
    {
      num: '04',
      title: 'Launch & Direct Support',
      desc: 'We handle your live domain setup, WhatsApp integration, and SEO indexation, backed by ongoing direct support with zero runarounds.',
      duration: 'Day 07 Launch',
      icon: Rocket,
      deliverable: 'Live Website & Direct Support'
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { strokeDashoffset: 1400 },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: true,
            },
          }
        )
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 bg-gradient-to-b from-[#FAF5F8] via-white to-[#FAF5F8] relative border-b border-black/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-crimson/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-crimson/[0.03] blur-[140px]" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-crimson/[0.08] border border-crimson/25 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-crimson uppercase">
              // EXECUTION FRAMEWORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-[#120E11]">
            From concept to launch, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] font-display font-extrabold">made seamless</span>.
          </h2>
          <p className="text-[#5C5259] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A simple, transparent 4-step workflow from our first call to your live website and growth.
          </p>
        </div>

        {/* Steps Grid: 4 Dark Rose Luxury Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.num}
                className="rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 p-7 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] hover:border-crimson/50 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Internal Subtle Ambient Crimson Hover Glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-crimson/[0.18] blur-[60px]" />

                {/* Top Accent Strip on Hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-[#FFA3BD]">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-crimson/20 border border-crimson/35 text-[#FF9BB5] group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-extrabold text-white mb-3 leading-snug group-hover:text-[#FF9BB5] transition-colors tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/75 leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Deliverable Bar */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-[11px] font-mono font-bold text-[#FF80A0] uppercase tracking-wider block mb-1">
                    Deliverable
                  </span>
                  <p className="text-xs font-bold text-white">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
