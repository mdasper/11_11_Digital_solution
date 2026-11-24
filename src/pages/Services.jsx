import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { FAQS } from '@/data/faqs';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { gsap } from '@/lib/gsap';

const Services = () => {
    const containerRef = useRef(null);
    const pinSectionRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track || window.innerWidth < 1024)
                return;
            const totalScrollWidth = track.scrollWidth - window.innerWidth + 120;
            gsap.to(track, {
                x: -totalScrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: pinSectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${totalScrollWidth}`,
                    onUpdate: (self) => {
                        setScrollProgress(Math.round(self.progress * 100));
                    },
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (<>
      <Helmet>
        <title>Our Services | 11 11 Digital Solutions</title>
        <meta name="description" content="Explore our core services: Website Development, Digital Marketing, Reels Production, and Video Editing. Built for conversion and growth."/>
        <meta property="og:title" content="Our Services | 11 11 Digital Solutions"/>
        <meta property="og:description" content="Website Development, Digital Marketing, Reels Production, and Video Editing engineered for maximum ROI."/>
      </Helmet>

      <div ref={containerRef} className="min-h-screen">
        
        {/* 1. INTRO HERO (Obsidian Dark Stage) */}
        <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-8 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-crimson/20 blur-[150px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                  || CAPABILITIES OVERVIEW
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Four disciplines. One{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">
                  uncompromising
                </span>{' '}
                standard.
              </h1>

              <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8 font-normal">
                We eliminate the friction of managing multiple agencies. From custom web engineering to viral reels and paid acquisition, every service works in unison.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button to="/pricing" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                  View Pricing &amp; Packages
                </Button>
                <Button to="/contact" variant="secondary" size="lg" className="bg-white/10 hover:bg-white/15 text-white border-white/20">
                  Request Custom Proposal
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PINNED HORIZONTAL CARDS (Blush Luxury Stage + Velvet Dark Rose Cards) */}
        <section ref={pinSectionRef} className="relative bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white border-b border-black/[0.06] overflow-hidden py-12">
          {/* Header Bar */}
          <div className="px-6 sm:px-8 py-4 max-w-7xl mx-auto flex items-center justify-between mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
              || Horizontal Experience · 04 Core Pillars
            </span>
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-xs font-mono text-[#665D63] font-bold">
                {scrollProgress}% EXPLORED
              </span>
              <div className="w-24 h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-crimson-grad transition-all duration-75" style={{ width: `${scrollProgress}%` }}/>
              </div>
            </div>
          </div>

          {/* Horizontal Track Container */}
          <div ref={trackRef} className="flex flex-col lg:flex-row gap-8 px-6 sm:px-8 pb-16 lg:pb-24 w-full lg:w-max overflow-x-auto lg:overflow-visible no-scrollbar">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="w-full lg:w-[680px] shrink-0 rounded-[32px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 p-8 sm:p-12 flex flex-col justify-between shadow-[0_20px_50px_rgba(32,10,21,0.35)] relative overflow-hidden group text-white">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/15 rounded-full blur-[80px] pointer-events-none"/>

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-[#FFA3BD]">
                      {srv.number}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#FF9BB5]">
                      {srv.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 group-hover:text-[#FFA3BD] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-base text-white/75 leading-relaxed mb-8 font-normal">
                    {srv.fullDescription}
                  </p>

                  {/* 3 Key Deliverables Bullets */}
                  <div className="space-y-3 mb-8">
                    {srv.deliverables.slice(0, 3).map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0"/>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Visual Mockup + CTA */}
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full border border-white/15 mb-6 bg-black/40 shadow-inner">
                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>
                  </div>

                  <Link to={srv.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-crimson to-magenta text-white text-xs font-bold uppercase tracking-wider shadow-crimson-glow hover:brightness-110 transition-all">
                    Deep Dive Into {srv.title} <ArrowUpRight className="w-4 h-4"/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PRODUCTION STANDARD (Obsidian Dark Stage + Velvet Tiles) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                || The Production Standard
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-white">
                How we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">collaborate</span> with you.
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                Predictable milestones, dedicated Slack/WhatsApp channels, and zero communication delays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                    step: '01',
                    title: 'Onboarding & Goals',
                    desc: 'Kickoff call to review brand assets, target metrics, and technical requirements.',
                },
                {
                    step: '02',
                    title: 'Creative Sprint',
                    desc: 'Interactive Figma design systems or reel scripts approved before coding/shooting.',
                },
                {
                    step: '03',
                    title: 'Build & Polish',
                    desc: 'High-speed React implementation or DaVinci video post-production with sound design.',
                },
                {
                    step: '04',
                    title: 'Launch & Handoff',
                    desc: 'Multi-device quality checks, SEO schema verification, and ongoing growth support.',
                },
              ].map((st) => (
                <div key={st.step} className="p-8 rounded-[24px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 shadow-sm flex flex-col justify-between hover:border-crimson/50 hover:scale-[1.02] transition-all">
                  <div>
                    <span className="font-mono text-xs font-bold text-crimson tracking-widest block mb-4">
                      PHASE {st.step}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION (Blush/Rose Stage) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#FAF5F8] via-white to-[#FAF5F8] border-b border-black/[0.06]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                || Common Inquiries
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-[#120E11]">
                Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">questions</span>.
              </h2>
              <p className="text-[#665D63] text-sm sm:text-base">
                Clear, transparent answers about our turnaround, process, and deliverables.
              </p>
            </div>

            {/* Top 4 FAQs Accordion */}
            <Accordion items={FAQS.slice(0, 4)}/>

            <div className="text-center mt-10">
              <Link to="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:underline">
                Have more questions? Read our full pricing &amp; FAQ guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 5. BOTTOM CTA (High-Impact Velvet Dark Rose Stage) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-br from-[#1C0813] via-[#280B1B] to-[#12050D] text-white relative overflow-hidden text-center border-t border-crimson/25">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-crimson/20 blur-[130px] rounded-full" />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white mb-6">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">extraordinary</span> together.
            </h2>
            <p className="text-white/75 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-normal">
              Schedule a 15-minute consultation with Mohamed Asper or send your requirements on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                Start Your Project
              </Button>
              <Button to="/pricing" variant="secondary" size="lg" className="bg-white/10 hover:bg-white/15 text-white border-white/20">
                Explore Pricing
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>);
};

export default Services;