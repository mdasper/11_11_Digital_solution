import React from 'react'
import { Sparkles, Zap, Target, Headset } from 'lucide-react'
import { WordStream } from '@/components/motion/WordStream'

export const WhyUsSection = () => {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-crimson" />,
      title: 'Premium Design',
      desc: 'Bespoke high-contrast art direction with zero generic themes or templates.',
    },
    {
      icon: <Zap className="w-6 h-6 text-crimson" />,
      title: 'Fast & SEO-Ready',
      desc: 'Lighthouse 90+ speeds, clean semantic code, and schema markup built-in.',
    },
    {
      icon: <Target className="w-6 h-6 text-crimson" />,
      title: 'Content That Converts',
      desc: 'Short-form reels and persuasive copy that capture buyer attention fast.',
    },
    {
      icon: <Headset className="w-6 h-6 text-crimson" />,
      title: 'Support That Replies',
      desc: 'Direct communication on WhatsApp with founder Mohamed Asper, zero runarounds.',
    },
  ]

  return (
    <section
      id="section-why"
      className="py-24 sm:py-36 bg-gradient-to-b from-white via-[#FFF0F5]/50 to-[#FAF5F8] relative border-b border-black/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-crimson/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-crimson/[0.03] blur-[140px]" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header: Prominent "Why Choose 11 11" Badge with Increased Font Size */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-crimson/[0.08] border border-crimson/25 shadow-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
            <span className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] font-extrabold text-crimson">
              || WHY CHOOSE 11 11
            </span>
          </div>

          <WordStream
            as="h2"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-5 text-[#120E11] leading-[1.12]"
          >
            Built for brands that want to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] font-display font-extrabold">
              stand out
            </span>
            .
          </WordStream>
          <WordStream
            as="p"
            className="text-[#5C5259] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We operate as your dedicated digital growth partner, combining high-end design with disciplined engineering.
          </WordStream>
        </div>

        {/* 4 Dark Rose Luxury Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:border-crimson/50 hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group flex flex-col justify-start"
            >
              {/* Internal Ambient Crimson Hover Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-crimson/[0.12] blur-[60px]" />

              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-crimson via-magenta to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-crimson/15 border border-crimson/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <WordStream
                as="h3"
                className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3 group-hover:text-crimson transition-colors tracking-tight"
              >
                {item.title}
              </WordStream>

              {/* Description */}
              <WordStream
                as="p"
                className="text-sm text-white/70 leading-relaxed font-normal"
              >
                {item.desc}
              </WordStream>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
