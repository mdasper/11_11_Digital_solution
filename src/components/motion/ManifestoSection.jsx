import React from 'react'
import { Code2, Film, TrendingUp } from 'lucide-react'
import manifestoObjectImg from '@/assets/manifesto/manifesto-3d-object.jpg'
import { WordStream } from '@/components/motion/WordStream'

export const ManifestoSection = () => {
  const PILLARS = [
    {
      number: '01',
      category: 'WEB ARCHITECTURE',
      icon: <Code2 className="w-5 h-5 text-crimson" />,
      title: 'Zero Template Engineering',
      description:
        'We build every digital platform from raw code with sub-second speeds, custom micro-interactions, and flawless responsiveness across every device. Zero generic builders or bloatware.',
    },
    {
      number: '02',
      category: 'CONTENT & MEDIA',
      icon: <Film className="w-5 h-5 text-crimson" />,
      title: 'Cinematic Attention Retention',
      description:
        'Hollywood-grade DaVinci color grading, spatial soundscapes, and psychology-backed pacing calibrated to stop the scroll in the first 2 seconds and hold viewers to the final call to action.',
    },
    {
      number: '03',
      category: 'PERFORMANCE GROWTH',
      icon: <TrendingUp className="w-5 h-5 text-crimson" />,
      title: 'Predictable Revenue Engines',
      description:
        'Precision-engineered Meta and Google ad architectures, automated retargeting loops, and conversion-optimized landing pages that turn cold attention into qualified pipeline.',
    },
  ]

  return (
    <section
      id="section-manifesto"
      className="py-24 sm:py-32 relative overflow-hidden border-b border-black/[0.06] bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white"
    >
      {/* Subtle Ambient Radial Lights */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-crimson/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-crimson/[0.03] blur-[140px]" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top Section: Split Layout (Statement on Left + Photorealistic 3D Luxury Object on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column: Big Bold Manifesto Headline & Subtext */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-crimson/[0.08] border border-crimson/25 shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-extrabold text-crimson">
                || THE 11 11 MANIFESTO
              </span>
            </div>

            {/* Crisp, High-Contrast Statement */}
            <WordStream
              as="h2"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#120E11] leading-[1.12] tracking-[-0.03em] mb-6"
            >
              We don't just build websites. We engineer digital flagships that make people stop, look, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] font-display font-extrabold inline">
                remember your brand.
              </span>
            </WordStream>

            <WordStream
              as="p"
              className="text-base sm:text-xl md:text-2xl text-[#5C5259] leading-relaxed max-w-2xl font-normal"
            >
              Every pixel has an intentional purpose. Every second of motion earns attention, commands authority, and turns visitors into high-value clients.
            </WordStream>
          </div>

          {/* Right Column: 3D Luxury Architectural Object (Photorealistic 8K Crystal Prism) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] rounded-[36px] overflow-hidden bg-gradient-to-br from-white via-[#FFF5F8] to-[#FFE8EF] border border-crimson/20 p-3 sm:p-4 shadow-[0_24px_60px_rgba(248,17,90,0.12)] group hover:shadow-[0_32px_75px_rgba(248,17,90,0.2)] transition-all duration-500">
              <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-[#0D0A0C]">
                <img
                  src={manifestoObjectImg}
                  alt="11 11 Digital Flagship 3D Core"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase">
                      FLAGSHIP 11:11 CORE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#FF9BB5] uppercase">
                    EST. 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Relatable, Premium Architectural Pillars in DARK ROSE THEME */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 p-8 sm:p-9 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] hover:border-crimson/50 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Ambient Crimson Top Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-crimson/[0.12] blur-[60px]" />

              {/* Top Accent Strip */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-crimson via-magenta to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div>
                {/* Header: Number & Category Badge */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-crimson/15 border border-crimson/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-[0.15em] text-white/70 uppercase">
                      {pillar.category}
                    </span>
                  </div>
                  <span className="text-xl font-display font-extrabold text-crimson/70 group-hover:text-crimson transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Pillar Title */}
                <WordStream
                  as="h3"
                  className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-4 group-hover:text-crimson transition-colors"
                >
                  {pillar.title}
                </WordStream>

                {/* Pillar Description */}
                <WordStream
                  as="p"
                  className="text-sm sm:text-base text-white/70 leading-relaxed"
                >
                  {pillar.description}
                </WordStream>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
