import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Shield, Sparkles, Code2, Gauge } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { formatINR } from '@/lib/utils';
import { gsap } from '@/lib/gsap';
import jbMockup from '@/assets/projects/jb-healthcare.svg';
const websiteTypes = [
    {
        title: 'Hospital & Healthcare',
        desc: 'Trust-focused patient portals with appointment booking, doctor schedules, and emergency response triggers.',
        tag: 'Healthcare',
        example: 'JB Healthcare Sivakasi',
    },
    {
        title: 'Export & Manufacturing',
        desc: 'International B2B platforms with sample request flows, capacity metrics, and export compliance verification.',
        tag: 'B2B Export',
        example: 'Fazil Garments Exports',
    },
    {
        title: 'Specialty Brand & Terroir',
        desc: 'Rich editorial storytelling experiences that convey provenance, craftsmanship, and artisanal value.',
        tag: 'D2C & Wholesale',
        example: 'Highland Origin Coffee Co.',
    },
    {
        title: 'Modern E-Commerce',
        desc: 'High-conversion online stores with Razorpay/Stripe checkout, instant cart drawers, and inventory sync.',
        tag: 'Commerce',
        example: 'Custom Storefronts',
    },
    {
        title: 'Portfolio & Creative Studio',
        desc: 'Awwwards-level cinematic portfolios with fluid WebGL shaders, video showcases, and custom cursor physics.',
        tag: 'Showcase',
        example: 'SNAPIT Studio',
    },
    {
        title: 'High-Converting Landing Pages',
        desc: 'Laser-focused single-purpose landing pages engineered for paid Google and Meta ad campaigns.',
        tag: 'Paid Growth',
        example: 'PPC Funnels',
    },
];
const Websites = () => {
    const containerRef = useRef(null);
    const laptopScreenRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Scroll-driven long screenshot scroll inside laptop frame
            if (laptopScreenRef.current) {
                gsap.to(laptopScreenRef.current, {
                    yPercent: -45,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.laptop-scroll-stage',
                        start: 'top 70%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (<>
      <Helmet>
        <title>Website Development Services | 11 11 Digital Solutions</title>
        <meta name="description" content="Fast, beautiful websites that turn visitors into customers. Custom React builds, zero templates, GSAP motion, and 90+ Lighthouse speeds."/>
      </Helmet>

      <div ref={containerRef} className="pt-32 sm:pt-40 bg-ink min-h-screen text-text-dark">
        {/* 1. Hero */}
        <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-20 border-b border-black/[0.06]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-6">
              <span className="font-mono text-xs font-bold text-crimson tracking-widest">
                || CORE CAPABILITY 01
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"/>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] mb-6 text-[#120E11]">
              Fast, beautiful websites that turn visitors into{' '}
              <span className="font-accent italic text-crimson font-normal">customers</span>.
            </h1>

            <p className="text-lg sm:text-xl text-text-dark-muted max-w-2xl leading-relaxed mb-8">
              We engineer custom, responsive websites designed to build immediate trust, pass Google Core Web Vitals with 90+ scores, and generate qualified inquiries.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?service=website" variant="primary" size="lg">
                Start Your Website Project
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                Explore Website Packages
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Scroll-Driven 3D Interactive Laptop */}
        <section className="laptop-scroll-stage py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || Engineering In Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Scroll-driven <span className="font-accent italic text-crimson font-normal">fluidity</span>.
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Scroll down to watch the long-form digital experience navigate inside our precision laptop mockup.
            </p>
          </div>

          {/* Precision MacBook Mockup Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-t-[24px] p-3 sm:p-4 bg-[#231F24] border border-black/20 shadow-[0_20px_60px_rgba(18,14,17,0.18)]">
              {/* Notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-b-md z-30"/>
              {/* Screen viewport */}
              <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-white shadow-inner">
                <img ref={laptopScreenRef} src={jbMockup} alt="Scroll driven website preview" className="w-full object-cover object-top will-change-transform" style={{ minHeight: '180%' }}/>
              </div>
            </div>
            {/* Laptop base */}
            <div className="relative h-4 sm:h-5 w-[104%] -left-[2%] bg-gradient-to-b from-[#3A3439] to-[#1C181B] rounded-b-[18px] shadow-2xl flex justify-center">
              <div className="w-24 h-1.5 bg-[#141113] rounded-b-md"/>
            </div>
          </div>
        </section>

        {/* 3. Website Types Grid */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
                || Industry Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#120E11]">
                Tailored for your <span className="font-accent italic text-crimson font-normal">business model</span>.
              </h2>
            </div>
            <p className="text-text-dark-muted text-sm max-w-sm">
              We design specifically for your industry's conversion triggers and user habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, idx) => (<SpotlightCard key={idx} className="p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-crimson/10 text-crimson font-bold mb-4 inline-block">
                    {type.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed mb-6">
                    {type.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-text-dark-muted">
                  <span>Proven in:</span>
                  <span className="text-[#120E11] font-semibold">{type.example}</span>
                </div>
              </SpotlightCard>))}
          </div>
        </section>

        {/* 4. Tech Highlights */}
        <section className="py-24 px-6 sm:px-8 bg-[#F8F5F7]/60 border-b border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
                || Modern Tech Stack
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#120E11]">
                Engineered for <span className="font-accent italic text-crimson font-normal">performance</span>.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
            { icon: <Gauge className="w-8 h-8 text-crimson mx-auto mb-3"/>, label: '90+ Lighthouse', sub: 'Blazing LCP & Zero CLS' },
            { icon: <Code2 className="w-8 h-8 text-crimson mx-auto mb-3"/>, label: 'React 18 & Vite', sub: 'Strict Production Architecture' },
            { icon: <Sparkles className="w-8 h-8 text-crimson mx-auto mb-3"/>, label: 'GSAP Physics', sub: 'Smooth 60fps Scroll Scrubbing' },
            { icon: <Shield className="w-8 h-8 text-crimson mx-auto mb-3"/>, label: 'Bank-Grade Security', sub: 'Free SSL & Cloud Hosting' },
        ].map((tech, i) => (<div key={i} className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                  {tech.icon}
                  <h4 className="text-lg font-bold text-[#120E11] mb-1">{tech.label}</h4>
                  <p className="text-xs text-text-dark-muted">{tech.sub}</p>
                </div>))}
            </div>
          </div>
        </section>

        {/* 5. 3 Website Packages */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Website development <span className="font-accent italic text-crimson font-normal">packages</span>.
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              One-time investment. Zero hidden recurring fees. Guaranteed turnaround times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.websites.map((pkg) => (<div key={pkg.id} className={`rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 relative ${pkg.isPopular
                ? 'bg-white border-2 border-crimson shadow-[0_16px_40px_rgba(248,17,90,0.15)]'
                : 'bg-white border border-black/[0.08] shadow-sm hover:border-crimson/40'}`}>
                {pkg.isPopular && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-crimson text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular Choice
                  </div>)}

                <div>
                  <h3 className="text-2xl font-display font-bold text-[#120E11] mb-2">{pkg.name}</h3>
                  <p className="text-xs text-text-dark-muted mb-6 leading-relaxed">{pkg.tagline}</p>

                  <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-black/[0.08]">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#120E11]">
                      {formatINR(pkg.priceINR)}
                    </span>
                    <span className="text-xs text-text-dark-muted font-mono">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (<li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#120E11]">
                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0"/>
                        <span>{feat}</span>
                      </li>))}
                  </ul>
                </div>

                <Button to={`/contact?package=${encodeURIComponent(pkg.name)}`} variant={pkg.isPopular ? 'primary' : 'secondary'} size="md" className="w-full justify-center">
                  {pkg.ctaText}
                </Button>
              </div>))}
          </div>
        </section>

        {/* 6. Bottom CTA */}
        <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to upgrade your website into a <span className="font-accent italic text-crimson font-normal">revenue machine</span>?
          </h2>
          <p className="text-text-dark-muted max-w-xl mx-auto text-base sm:text-lg mb-8">
            Get a free mockup and technical review with founder Mohamed Asper.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Get Started Now
            </Button>
            <Button to="/work" variant="secondary" size="lg">
              View Website Case Studies
            </Button>
          </div>
        </section>
      </div>
    </>);
};
export default Websites;
