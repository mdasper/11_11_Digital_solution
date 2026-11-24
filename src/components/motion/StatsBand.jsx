import React, { useRef, useEffect, useState } from 'react'
import { STATS } from '@/data/stats'
import { gsap } from '@/lib/gsap'
import { TrendingUp, Award, Clock, Sparkles } from 'lucide-react'

export const StatsBand = () => {
  const containerRef = useRef(null)
  const [counts, setCounts] = useState(STATS.map(() => 0))

  const statIcons = [
    <TrendingUp className="w-5 h-5 text-crimson" key="1" />,
    <Sparkles className="w-5 h-5 text-crimson" key="2" />,
    <Award className="w-5 h-5 text-crimson" key="3" />,
    <Clock className="w-5 h-5 text-crimson" key="4" />
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            // Animate streaming counter numbers smoothly
            const startTime = performance.now()
            const duration = 2000 // 2 seconds streaming

            const step = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Ease out expo
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

              setCounts(
                STATS.map((stat) => Math.round(eased * stat.value))
              )

              if (progress < 1) {
                requestAnimationFrame(step)
              }
            }

            requestAnimationFrame(step)
          },
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-28 bg-[#0D0A0C] border-y border-white/10 relative overflow-hidden shadow-2xl"
    >
      {/* Background Volumetric Neon Crimson & Magenta Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[350px] bg-crimson/20 blur-[130px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 w-[600px] h-[350px] bg-magenta/15 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Subtle Top Category Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF9BB5] uppercase">
              VERIFIED IMPACT · MEASURABLE OUTCOMES
            </span>
          </div>
        </div>

        {/* 4 Rich Dark Rose Luxury Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-7 sm:p-9 rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:border-crimson/50 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Internal Subtle Ambient Crimson Hover Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-crimson/15 blur-[60px]" />

              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-crimson via-magenta to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-crimson/15 border border-crimson/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-300 shadow-sm">
                {statIcons[idx]}
              </div>

              {/* Streaming Animated Number Display */}
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-crimson mb-2 font-mono tracking-tight">
                {stat.prefix}
                {counts[idx]}
                {stat.suffix}
              </div>

              {/* Stat Title */}
              <h4 className="text-lg sm:text-xl font-display font-extrabold text-white mb-1.5 tracking-tight">
                {stat.label}
              </h4>

              {/* Stat Sublabel */}
              <p className="text-xs sm:text-sm text-white/60 max-w-[220px] leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
