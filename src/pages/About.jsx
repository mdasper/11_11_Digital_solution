import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, ArrowRight, Sparkles } from 'lucide-react'
import { ABOUT_DATA } from '@/data/about'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO } from '@/data/navigation'
import founderImg from '@/assets/manifesto/strategy.svg'
import { gsap } from '@/lib/gsap'
import { StreamReveal } from '@/components/motion/StreamReveal'
import { WordStream } from '@/components/motion/WordStream'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline reveal
      gsap.fromTo(
        '.about-hero-fade',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out' }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>About 11 11 Digital Solutions | Studio Story & Philosophy</title>
        <meta
          name="description"
          content="Discover 11 11 Digital Solutions, founded by Mohamed Asper. High-performance website development, digital marketing, and cinematic video production."
        />
        <meta property="og:title" content="About 11 11 Digital Solutions" />
        <meta
          property="og:description"
          content="Precision meets passion. Crafting unforgettable digital experiences for visionary brands."
        />
      </Helmet>

      <div ref={containerRef} className="min-h-screen">
        
        {/* 1. STUDIO HERO (Obsidian Dark Stage) */}
        <section className="pt-36 sm:pt-44 pb-24 sm:pb-32 px-6 sm:px-8 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Radial Lights */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crimson/20 blur-[150px] rounded-full" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[300px] bg-crimson/10 blur-[130px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
              <div className="about-hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm backdrop-blur-md mb-6">
                <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                  {ABOUT_DATA.hero.eyebrow}
                </span>
              </div>

              <WordStream
                as="h1"
                className="about-hero-fade text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.08] mb-8 text-white"
              >
                We build digital assets that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">
                  {ABOUT_DATA.hero.accentWord}
                </span>{' '}
                trends.
              </WordStream>

              <WordStream
                as="p"
                className="about-hero-fade text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mb-10"
              >
                {ABOUT_DATA.hero.subtext}
              </WordStream>

              <div className="about-hero-fade flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button to="/work" variant="secondary" size="lg" className="bg-white/10 hover:bg-white/15 text-white border-white/20">
                  <span>View Flagship Work</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FOUNDER & STUDIO STORY (Blush Luxury Stage + Dark Velvet Founder Card) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white border-b border-black/[0.06]">
          <StreamReveal>
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Founder Card in Velvet Dark Rose */}
              <div className="lg:col-span-5">
                <div className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 text-white shadow-[0_20px_50px_rgba(32,10,21,0.35)] relative overflow-hidden group">
                  <div className="pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full bg-crimson/20 blur-[60px]" />

                  <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 bg-black/40">
                    <img src={founderImg} alt={ABOUT_DATA.founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-display font-bold text-white">
                        {ABOUT_DATA.founder.name}
                      </h3>
                      <p className="text-xs font-mono text-[#FF9BB5] font-bold">
                        {ABOUT_DATA.founder.role}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg font-display italic text-white/90 border-l-2 border-crimson pl-4 mb-6 leading-relaxed">
                    "{ABOUT_DATA.founder.quote}"
                  </blockquote>

                  <div className="space-y-2.5 text-xs font-mono text-white/70 pt-4 border-t border-white/10">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-crimson" />
                      <a href={`mailto:${ABOUT_DATA.founder.email}`} className="hover:text-white transition-colors">
                        {ABOUT_DATA.founder.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-crimson" />
                      <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                        {ABOUT_DATA.founder.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Story */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                  || The Origin Story
                </span>
                <WordStream
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-8 text-[#120E11] leading-tight"
                >
                  Rejecting templates. Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">relevance</span>.
                </WordStream>

                <div className="space-y-6 text-base sm:text-lg text-[#5C5259] leading-relaxed font-normal">
                  {ABOUT_DATA.founder.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Team Creative Roles */}
                <div className="mt-12 pt-8 border-t border-black/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8E848A] block mb-4 font-bold">
                    Studio Creative Leads &amp; Collaborators
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {ABOUT_DATA.team.map((member, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                        <p className="text-xs font-bold text-[#120E11] truncate">{member.name}</p>
                        <p className="text-[11px] text-[#665D63] truncate mt-0.5">{member.role}</p>
                        {member.isPlaceholder && (
                          <span className="text-[9px] font-mono text-crimson uppercase block mt-1.5 font-bold">
                            [Partner Role]
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
          </StreamReveal>
        </section>

        {/* 3. CORE PRINCIPLES (Obsidian Dark Stage + Velvet Luxury Tiles) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0A0C] text-white border-b border-white/[0.08] relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-crimson/15 blur-[140px]" />

          <StreamReveal>
            <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                || Core Principles
              </span>
              <WordStream
                as="h2"
                className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-white"
              >
                What drives every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">decision</span>.
              </WordStream>
              <WordStream
                as="p"
                className="text-white/70 text-sm sm:text-base leading-relaxed"
              >
                Non-negotiable values guiding our code, communication, and visual craft.
              </WordStream>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {ABOUT_DATA.values.map((val) => (
                <div 
                  key={val.number} 
                  className="rounded-[28px] p-8 sm:p-10 bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-crimson tracking-widest">
                        // {val.number}
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                        {val.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 group-hover:text-[#FFA3BD] transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </StreamReveal>
        </section>

        {/* 4. THE 11:11 RITUAL (Blush Stage) */}
        <section className="py-24 px-6 sm:px-8 bg-gradient-to-b from-[#FFF0F5] to-[#FAF5F8] border-b border-crimson/15">
          <StreamReveal>
            <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-4">
              || The 11:11 Ritual
            </span>
            <WordStream
              as="h2"
              className="text-3xl sm:text-5xl font-display font-extrabold text-[#120E11] mb-6"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">11 11</span>?
            </WordStream>
            <WordStream
              as="p"
              className="text-base sm:text-lg text-[#5C5259] leading-relaxed mb-8"
            >
              In numerology and modern culture, 11:11 signifies alignment, synchronization, and an auspicious moment to take decisive action. For our studio, the twin parallel marks represent code and design moving in lockstep — engineering precision paired with artistic passion.
            </WordStream>
            <div className="inline-flex flex-wrap justify-center items-center gap-2.5 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-[#120E11] shadow-sm max-w-full">
              <span className="font-bold">00:00 · PREPARATION</span>
              <span className="text-crimson font-bold">&rarr;</span>
              <span className="text-crimson font-bold">11:11 · ALIGNMENT</span>
            </div>
          </div>
          </StreamReveal>
        </section>

        {/* 5. STUDIO TRAJECTORY / TIMELINE (Obsidian Dark Stage + Velvet Tiles) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0B080A] text-white border-b border-white/[0.08]">
          <StreamReveal>
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                  || Studio Trajectory · 2026
                </span>
                <WordStream
                  as="h2"
                  className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white"
                >
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">founding year</span> milestones.
                </WordStream>
              </div>
              <WordStream
                as="p"
                className="text-white/60 text-sm max-w-sm leading-relaxed"
              >
                Founded in 2026. From our genesis to full-stack digital execution and brand transformation.
              </WordStream>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {ABOUT_DATA.timeline.map((item, idx) => (
                <div
                  key={item.year + item.title}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-sm flex flex-col justify-between hover:border-crimson/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FFA3BD] font-mono">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-crimson/20 text-[#FF9BB5] uppercase font-bold border border-crimson/30">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-white/50">
                    MILESTONE 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </StreamReveal>
        </section>

        {/* 6. STUDIO CTA (High-Impact Velvet Dark Rose Stage) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-br from-[#1C0813] via-[#280B1B] to-[#12050D] text-white relative overflow-hidden text-center border-t border-crimson/25">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-crimson/20 blur-[130px] rounded-full" />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
              Ready to create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">unforgettable</span>?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-normal">
              Tell us about your brand vision. Direct WhatsApp consultation with Mohamed Asper.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button to="/services" variant="secondary" size="lg" className="bg-white/10 hover:bg-white/15 text-white border-white/20">
                <span>Explore Services</span>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default About