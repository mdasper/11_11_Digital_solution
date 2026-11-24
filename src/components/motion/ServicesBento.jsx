import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Code2,
  TrendingUp,
  Smartphone,
  Film,
  CheckCircle2
} from 'lucide-react'

import craftWeb from '@/assets/crafts/craft-web.jpg'
import craftMarketing from '@/assets/crafts/craft-marketing.jpg'
import craftReels from '@/assets/crafts/craft-reels.jpg'
import craftEditing from '@/assets/crafts/craft-editing.jpg'
import { WordStream } from '@/components/motion/WordStream'

export const ServicesBento = () => {
  // 4 Bespoke Flagship Capabilities
  const CRAFTS = [
    {
      id: 'websites',
      number: '01',
      category: 'DIGITAL PLATFORMS & APPS',
      title: 'Website Development',
      tagline: 'Sub-second speeds & conversion architecture',
      shortDescription:
        'Fast, beautiful web platforms engineered from raw code with sub-second speeds, custom micro-interactions, and mobile perfection. Zero generic builders.',
      href: '/services/websites',
      icon: <Code2 className="w-5 h-5 text-crimson" />,
      image: craftWeb,
      deliverables: [
        'React & Next.js Architecture',
        '0.4s Avg. Load Speed Guarantee',
        'Bespoke Interactive Motion',
        'Custom CMS & Lead Funnels',
      ],
    },
    {
      id: 'marketing',
      number: '02',
      category: 'PAID ACQUISITION & FUNNELS',
      title: 'Digital Marketing',
      tagline: 'High-converting ad funnels & predictable ROI',
      shortDescription:
        'Data-driven ad campaigns across Meta and Google engineered to capture high-intent buyers, lower acquisition costs, and scale revenue predictably.',
      href: '/services/marketing',
      icon: <TrendingUp className="w-5 h-5 text-crimson" />,
      image: craftMarketing,
      deliverables: [
        'Meta & Google Ads Management',
        'High-Converting Landing Pages',
        'Automated Retargeting Loops',
        'Transparent ROAS Attribution',
      ],
    },
    {
      id: 'reels',
      number: '03',
      category: 'ORGANIC SCALE & ALGORITHM',
      title: 'Reels Production',
      tagline: 'Algorithm dominance & viral retention',
      shortDescription:
        'Psychology-backed scripts, cinema 4K optics, and retention-engineered editing built specifically to dominate Instagram Reels and YouTube Shorts.',
      href: '/services/reels',
      icon: <Smartphone className="w-5 h-5 text-crimson" />,
      image: craftReels,
      deliverables: [
        'Trend & Hook Scripting',
        'Cinema 4K Optics & Pro Lighting',
        '85%+ Retention Dynamic Editing',
        'Multi-Platform Algorithm Launch',
      ],
    },
    {
      id: 'editing',
      number: '04',
      category: 'CINEMATIC POST-PRODUCTION',
      title: 'Video Editing',
      tagline: 'Hollywood grading & surgical pacing',
      shortDescription:
        'Hollywood-standard DaVinci Resolve color grading, bespoke spatial soundscapes, dynamic motion graphics, and rapid 48-hour turnarounds.',
      href: '/services/editing',
      icon: <Film className="w-5 h-5 text-crimson" />,
      image: craftEditing,
      deliverables: [
        'DaVinci Studio Color Grading',
        'Bespoke Spatial Sound & Foley FX',
        'Kinetic Typography VFX',
        '48h Express Turnaround SLA',
      ],
    },
  ]

  return (
    <section
      id="section-services"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white relative border-b border-black/[0.06] overflow-hidden"
    >
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-crimson/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-crimson/[0.04] blur-[140px]" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/[0.08] border border-crimson/25 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-extrabold text-crimson">
                || CORE CAPABILITIES
              </span>
            </div>
            <WordStream
              as="h2"
              className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#120E11]"
            >
              Four crafts. One <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C] font-display font-extrabold">flagship</span> standard.
            </WordStream>
          </div>
          <WordStream
            as="p"
            className="text-[#5C5259] max-w-md text-sm sm:text-base leading-relaxed"
          >
            Everything your business needs to establish authority, generate high-ticket inquiries, and dominate digital platforms.
          </WordStream>
        </div>

        {/* All 4 Rich Tiles in Dark Rose Velvet Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CRAFTS.map((craft) => (
            <div key={craft.id} className="h-full">
              <Link to={craft.href} className="block h-full group">
                <div className="h-full flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 p-6 sm:p-8 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] hover:border-crimson/50 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden">
                  {/* Ambient Crimson Top Glow */}
                  <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-crimson/[0.12] blur-[60px]" />

                  {/* Top Hover Gradient Line */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-crimson via-magenta to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <div>
                    {/* Header: Number, Icon, Badge & Arrow Button */}
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-crimson/15 border border-crimson/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                          {craft.icon}
                        </div>
                        <div>
                          <span className="font-mono text-xs text-[#FF9BB5] font-extrabold tracking-widest block">
                            CRAFT {craft.number}
                          </span>
                          <span className="text-[11px] font-semibold text-white/50">
                            11 11 Standard
                          </span>
                        </div>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-crimson group-hover:border-crimson transition-all duration-300 group-hover:rotate-45 shadow-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <WordStream
                      as="h3"
                      className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-crimson transition-colors mb-1.5 tracking-tight"
                    >
                      {craft.title}
                    </WordStream>
                    <WordStream
                      as="p"
                      className="text-xs sm:text-sm text-[#FF9BB5] font-medium mb-3"
                    >
                      {craft.tagline}
                    </WordStream>

                    {/* Description */}
                    <WordStream
                      as="p"
                      className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5"
                    >
                      {craft.shortDescription}
                    </WordStream>

                    {/* 4 Relevant Capabilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 pt-4 border-t border-white/10">
                      {craft.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-white/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Visual Asset Container (Without the bottom floating pill bar) */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-[220px] w-full border border-white/10 bg-[#120E11] mt-auto group-hover:border-white/20 transition-all">
                    <img
                      src={craft.image}
                      alt={craft.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
