import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, ArrowRight, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react'
import { ABOUT_DATA } from '@/data/about'
import { Button } from '@/components/ui/Button'
import { CONTACT_INFO } from '@/data/navigation'
import founderImg from '@/assets/founder-asper.jpg'
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Studio Headline & CTAs */}
              <div className="lg:col-span-7">
                <div className="about-hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm backdrop-blur-md mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                    {ABOUT_DATA.hero.eyebrow}
                  </span>
                </div>

                <WordStream
                  as="h1"
                  className="about-hero-fade text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
                >
                  We build digital assets that{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">
                    {ABOUT_DATA.hero.accentWord}
                  </span>{' '}
                  trends.
                </WordStream>

                <WordStream
                  as="p"
                  className="about-hero-fade text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-8"
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

              {/* Right Column: Clean Borderless Video Showcase */}
              <div className="lg:col-span-5 about-hero-fade">
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-black/40 shadow-2xl">
                  <video
                    id="about-hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-3xl"
                  >
                    <source src="/assets/videos/about-hero.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. A MESSAGE FROM THE FOUNDER (Executive Obsidian Stage + Founder Spotlight) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#0A0709] via-[#120811] to-[#0D0A0C] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Glow Lights */}
          <div className="pointer-events-none absolute -top-32 right-1/4 w-[600px] h-[350px] bg-crimson/15 blur-[160px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-32 left-10 w-[450px] h-[300px] bg-crimson/10 blur-[140px] rounded-full" />

          <StreamReveal>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Founder Portrait & Direct Contacts */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-[32px] p-3 sm:p-3.5 bg-gradient-to-br from-[#200A18] via-[#180814] to-[#0D0A0C] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_35px_rgba(255,45,108,0.15)] group overflow-hidden">
                    {/* Top ambient glow line */}
                    <div className="pointer-events-none absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-crimson to-transparent" />

                    {/* Founder Photo */}
                    <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-black/60 border border-white/10 group-hover:border-crimson/30 transition-colors duration-500">
                      <img
                        src={founderImg}
                        alt={ABOUT_DATA.founder.name}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-transparent to-transparent opacity-80" />
                      
                      {/* Top Pill: Direct Execution Badge */}
                      <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-white/90 flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Direct Partner Access</span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-crimson/25 border border-crimson/40 text-[10px] font-mono font-bold uppercase tracking-widest text-[#FFA3BD] mb-1.5">
                          {ABOUT_DATA.founder.badge}
                        </div>
                        <h3 className="text-2xl font-display font-extrabold text-white">
                          {ABOUT_DATA.founder.name}
                        </h3>
                        <p className="text-xs font-mono text-white/70 mt-0.5">
                          11 11 Digital Solutions · Est. {ABOUT_DATA.founder.established} · {ABOUT_DATA.founder.location}
                        </p>
                      </div>
                    </div>

                    {/* Direct Contact Action Row */}
                    <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2 px-1">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=Hi%20Mohamed%20Asper,%20I'd%20like%20to%20discuss%20a%20project%20with%2011%2011%20Digital%20Solutions`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-crimson hover:bg-[#E01453] text-white text-xs font-bold transition-all shadow-[0_4px_14px_rgba(255,45,108,0.3)] hover:shadow-crimson-glow"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white border border-white/10 transition-colors"
                        title="Direct Call"
                      >
                        <Phone className="w-4 h-4 text-crimson" />
                      </a>
                      <a
                        href={`mailto:${ABOUT_DATA.founder.email}`}
                        className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white border border-white/10 transition-colors"
                        title="Direct Email"
                      >
                        <Mail className="w-4 h-4 text-crimson" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Founder's Vision, Note & Commitments */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm backdrop-blur-md mb-4 self-start">
                    <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                      || A Message From The Founder
                    </span>
                  </div>

                  <WordStream
                    as="h2"
                    className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-white leading-tight"
                  >
                    Every digital touchpoint should demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">attention</span> and command <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">trust</span>.
                  </WordStream>

                  {/* Founder's Pull Quote */}
                  <blockquote className="text-base sm:text-lg font-display italic text-[#FF9BB5] border-l-2 border-crimson pl-4 py-1 mb-8 leading-relaxed bg-white/[0.02] rounded-r-xl">
                    "{ABOUT_DATA.founder.quote}"
                  </blockquote>

                  {/* Letter Body */}
                  <div className="space-y-4 text-base sm:text-lg text-white/75 leading-relaxed font-normal mb-8">
                    {ABOUT_DATA.founder.letter.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 3 Core Founder Commitments */}
                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFA3BD] block mb-2 font-bold">
                      || The 11 11 Standard · Personal Commitments
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {ABOUT_DATA.founder.commitments.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-crimson/30 transition-all"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                            <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
                          </div>
                          <p className="text-[11px] text-white/65 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA row */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button to="/contact" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                      <span>Start a Direct Conversation with Mohamed</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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