import React from 'react'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import { WordStream } from '@/components/motion/WordStream'

export const TestimonialsCarousel = () => {
  return (
    <section
      id="section-testimonials"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5]/60 to-white relative border-b border-black/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-crimson/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-crimson/[0.03] blur-[140px]" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-crimson/[0.08] border border-crimson/25 shadow-sm mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-extrabold text-crimson">
              || CLIENT ENDORSEMENTS
            </span>
          </div>

          <WordStream
            as="h2"
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#120E11] mb-4"
          >
            Trusted by leaders who{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] font-display font-extrabold">
              demand the best
            </span>
            .
          </WordStream>
          <WordStream
            as="p"
            className="text-[#5C5259] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Direct feedback from founders and executives who partnered with 11 11 for flagship digital execution.
          </WordStream>
        </div>

        {/* Full-Width 4-Card Luxury Testimonial Grid (Neat font size & Dark Rose theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:shadow-[0_24px_60px_rgba(248,17,90,0.22)] hover:border-crimson/50 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Internal Ambient Crimson Hover Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-crimson/[0.15] blur-[60px]" />

              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div>
                {/* Top Row: 5 Stars + Subtle Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-crimson text-crimson" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-crimson/40" />
                </div>

                {/* Quote Text: Neat, readable, perfectly sized font */}
                <p className="text-sm sm:text-[15px] font-normal text-white/85 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Meta */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-crimson/20 border border-crimson/35 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                  {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#FF9BB5] font-medium mt-0.5">
                    {t.role} · <span className="text-white/60">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
