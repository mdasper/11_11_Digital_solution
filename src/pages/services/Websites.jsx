import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Shield, Sparkles, Code2, Gauge, Compass, Palette, Rocket, Clock, Zap, ArrowRight, ArrowLeft, Layers, ArrowUpRight } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { formatINR } from '@/lib/utils';
import { gsap } from '@/lib/gsap';
import { WordStream } from '@/components/motion/WordStream';
import heroWebsitesImg from '@/assets/crafts/hero-websites.jpg';

const ROADMAP_STEPS = [
  {
    day: 'Day 01',
    dayNumber: '01',
    title: 'Architectural Blueprint & Strategy',
    tagline: 'Laying the foundation for conversion and performance',
    timeline: 'Hour 0 – 24',
    icon: Compass,
    progress: 20,
    overview: 'We dissect your business goals, analyze target audience psychology, map conversion touchpoints, finalize the sitemap, and structure low-fidelity wireframes.',
    deliverables: [
      'User Journey & Conversion Funnel Mapping',
      'Information Architecture & Sitemap Approval',
      'Direct Strategy & Scope Lock with Mohamed Asper'
    ],
    visualBadge: 'BLUEPRINT PHASE',
    visualMetrics: { primary: '100% Architecture Lock', secondary: '0 Ambiguity' },
    codeSnippet: '// Day 01: Core Blueprint Schema\nconst architecture = {\n  sitemap: ["Hero", "Showcase", "Conversion", "QA"],\n  speedTarget: "< 0.8s",\n  conversionFunnel: "1-Tap WhatsApp + Smart Inquiry"\n};'
  },
  {
    day: 'Day 02',
    dayNumber: '02',
    title: 'Art Direction & High-Fidelity UI/UX',
    tagline: 'Awwwards-caliber aesthetics & bespoke typography',
    timeline: 'Hour 24 – 48',
    icon: Palette,
    progress: 40,
    overview: 'Crafting the visual identity of your portal. Bespoke color hierarchy, editorial typography, velvet textures, and custom responsive layouts designed to captivate visitors.',
    deliverables: [
      'Full-Fidelity Responsive Prototypes (Figma)',
      'Custom Iconography, Brand Colors & Typography System',
      'Interactive Visual Prototype Walkthrough & Client Sign-off'
    ],
    visualBadge: 'DESIGN CRAFT',
    visualMetrics: { primary: 'Bespoke UI System', secondary: 'Zero Generic Templates' },
    codeSnippet: '// Day 02: Design Tokens & Palette\nconst tokens = {\n  palette: ["#0D0A0C", "#FF2D6C", "#FAF5F8"],\n  typography: ["Syne Display", "Plus Jakarta Sans"],\n  aesthetic: "Velvet Obsidian Luxury"\n};'
  },
  {
    day: 'Day 03',
    dayNumber: '03',
    title: 'Performance Engineering & GSAP Motion',
    tagline: 'Handcrafted React 19, Vite & sub-second execution',
    timeline: 'Hour 48 – 72',
    icon: Code2,
    progress: 60,
    overview: 'Zero bloated plugins. We code the frontend with clean modern React, Tailwind CSS, and custom GSAP 60FPS micro-interactions with strict memory cleanup.',
    deliverables: [
      'Handcrafted React + Tailwind CSS Architecture',
      'Smooth GSAP Scroll Physics & Micro-Interactions',
      'Sub-Second Bundle Compression (<0.8s load time)'
    ],
    visualBadge: 'ENGINEERING LAB',
    visualMetrics: { primary: '0.4s Avg. Load Speed', secondary: '99/100 Core Web Vitals' },
    codeSnippet: '// Day 03: Engineering Stack\nexport const CoreApp = () => {\n  useGSAP(() => initPhysics(), { scope: ref });\n  return <PerformancePortal speed="0.4s" fps="60" />;\n};'
  },
  {
    day: 'Day 04',
    dayNumber: '04',
    title: 'Content Ingestion & Funnel Testing',
    tagline: 'Live data sync, booking flows & multi-device QA',
    timeline: 'Hour 72 – 96',
    icon: Layers,
    progress: 80,
    overview: 'Syncing your real copy, high-res media, 1-tap WhatsApp chat buttons, custom contact forms, and conducting rigorous responsive tests across 4 device breakpoints.',
    deliverables: [
      'Full Content, Case Studies & Media Integration',
      '1-Tap WhatsApp, Inquiry & Booking Funnel Setup',
      'Cross-Browser & 4-Breakpoint QA (375px, 768px, 1024px, 1440px)'
    ],
    visualBadge: 'INTEGRATION QA',
    visualMetrics: { primary: '4-Device Breakpoints', secondary: 'Zero Stutter' },
    codeSnippet: '// Day 04: Conversion Pipeline\nconst conversionTriggers = {\n  oneTapWhatsApp: "Direct to Founder",\n  formValidation: "Instant Feedback",\n  responsiveQA: "100% Passed (Mobile to 4K)"\n};'
  },
  {
    day: 'Day 05',
    dayNumber: '05',
    title: 'Domain Cutover & Worldwide Launch',
    tagline: 'Global CDN deployment, SSL & Google indexing',
    timeline: 'Hour 96 – 120',
    icon: Rocket,
    progress: 100,
    overview: 'DNS configuration, SSL certificate generation, global edge CDN distribution, Google Search Console indexing, and handing you complete 100% code ownership on Day 5.',
    deliverables: [
      'Global Edge CDN Distribution with 99.9% Uptime SLA',
      'Google SEO Meta Schemas & XML Sitemap Submission',
      '100% Codebase Ownership & Production Handover'
    ],
    visualBadge: 'GLOBAL DEPLOY',
    visualMetrics: { primary: '100% Production Live', secondary: 'Global CDN Active' },
    codeSnippet: '// Day 05: Production Deployment\nconst deployStatus = {\n  status: "LIVE_IN_PRODUCTION",\n  uptime: "99.99%",\n  ssl: "A+ Grade Security",\n  ownership: "100% Transferred to Client"\n};'
  }
];
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
    const [activeDayIndex, setActiveDayIndex] = useState(0);

    const activeStep = ROADMAP_STEPS[activeDayIndex];
    const StepIcon = activeStep.icon;

    useEffect(() => {
        const ctx = gsap.context(() => {}, containerRef);
        return () => ctx.revert();
    }, []);
    return (<>
      <Helmet>
        <title>Website Development Services | 11 11 Digital Solutions</title>
        <meta name="description" content="Fast, beautiful websites that turn visitors into customers. Custom React builds, zero templates, GSAP motion, and 90+ Lighthouse speeds."/>
      </Helmet>

      <div ref={containerRef} className="min-h-screen">
        {/* 1. Hero: Signature Dark Obsidian Velvet Stage */}
        <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Radial Glow Lights */}
          <div className="pointer-events-none absolute -top-40 left-1/4 w-[700px] h-[350px] bg-crimson/20 blur-[150px] rounded-full" />
          <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[300px] bg-crimson/10 blur-[130px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm mb-6">
                  <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                    || Core Capability 01 · Websites
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"/>
                </div>

                <WordStream
                  as="h1"
                  className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.05] mb-6 text-white"
                >
                  Fast, beautiful websites that turn visitors into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-[#FF5E8E] to-crimson">
                    customers
                  </span>.
                </WordStream>

                <WordStream
                  as="p"
                  className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-8"
                >
                  We engineer custom, responsive websites designed to build immediate trust, pass Google Core Web Vitals with 90+ scores, and generate qualified inquiries.
                </WordStream>

                <div className="flex flex-wrap items-center gap-4">
                  <Button to="/contact?service=website" variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                    <span>Start Your Website Project</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button to="/pricing" variant="secondary" size="lg" className="bg-white/10 hover:bg-white/15 text-white border-white/20">
                    <span>Explore Website Packages</span>
                  </Button>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-black/60 border border-white/12 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(255,45,108,0.18)] group">
                  <img src={heroWebsitesImg} alt="11 11 High performance web development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0709] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Sub-second React 19 Build
                    </span>
                    <span className="text-crimson font-bold">99+ Google Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive 5-Day Project Roadmap */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 border border-crimson/25 shadow-sm mb-4">
              <Clock className="w-3.5 h-3.5 text-crimson animate-pulse" />
              <span className="font-mono text-xs font-bold text-crimson uppercase tracking-widest">
                || Rapid Deployment Protocol
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#120E11] mb-4">
              From concept to live website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-[#FF5E8E] to-crimson">5 days</span>.
            </h2>
            <p className="text-text-dark-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              No months of agency runarounds or stalled timelines. We operate with surgical agility to design, engineer, and deploy your flagship web asset in 120 hours.
            </p>
          </div>

          {/* Interactive Day Selection Track (5 Days) */}
          <div className="mb-10 sm:mb-12">
            <div className="grid grid-cols-5 gap-2 sm:gap-3 p-2 rounded-2xl bg-white border border-black/[0.08] shadow-sm max-w-4xl mx-auto">
              {ROADMAP_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeDayIndex === idx;
                return (
                  <button
                    key={step.day}
                    type="button"
                    onClick={() => setActiveDayIndex(idx)}
                    className={`group relative p-3 sm:p-4 rounded-xl transition-all duration-300 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson ${
                      isActive
                        ? 'bg-[#120811] text-white shadow-lg shadow-black/20 border border-crimson/30'
                        : 'bg-transparent hover:bg-black/[0.04] text-[#120E11]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase ${
                        isActive ? 'text-crimson' : 'text-[#8C8288]'
                      }`}>
                        {step.day}
                      </span>
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isActive ? 'text-white' : 'text-[#8C8288] group-hover:text-crimson'
                      }`} />
                    </div>
                    <div className="hidden sm:block text-xs font-bold truncate">
                      {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                    </div>
                    {/* Active highlight indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Spotlight Card */}
          <div className="max-w-5xl mx-auto rounded-[32px] sm:rounded-[36px] bg-white border border-black/[0.08] p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(18,14,17,0.06)] relative overflow-hidden">
            {/* Top Crimson Accent line */}
            <div className="pointer-events-none absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Day Milestones & Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#120811] text-crimson flex items-center justify-center font-display font-extrabold text-xl shadow-md border border-crimson/30">
                    {activeStep.dayNumber}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-crimson font-bold block">
                      || {activeStep.timeline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#120E11] leading-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-text-dark-muted leading-relaxed">
                  {activeStep.overview}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono font-bold text-[#120E11] uppercase tracking-wider block">
                    Day {activeStep.dayNumber} Output Deliverables:
                  </span>
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A3337]">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="pt-4 flex items-center gap-3 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveDayIndex((prev) => (prev > 0 ? prev - 1 : ROADMAP_STEPS.length - 1))}
                    className="p-2.5 rounded-xl border border-black/10 hover:border-black/20 text-[#120E11] hover:bg-black/[0.04] transition-all cursor-pointer"
                    aria-label="Previous day"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDayIndex((prev) => (prev < ROADMAP_STEPS.length - 1 ? prev + 1 : 0))}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#120811] hover:bg-crimson text-white text-xs font-bold transition-all shadow-md cursor-pointer group/next"
                  >
                    <span>Proceed to Day {activeDayIndex < 4 ? `0${activeDayIndex + 2}` : '01'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/next:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Console & Live Simulation */}
              <div className="lg:col-span-6">
                <div className="rounded-[28px] bg-[#0E0B0D] text-white p-6 sm:p-7 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  <div className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-crimson/20 rounded-full blur-[50px]" />
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
                      <span className="text-[11px] font-mono text-white/90 font-bold uppercase tracking-wider">
                        {activeStep.visualBadge}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#FF9BB5]">
                      Sprint Progress: {activeStep.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-5">
                    <div
                      className="h-full bg-gradient-to-r from-crimson to-[#FFA3BD] transition-all duration-500 rounded-full"
                      style={{ width: `${activeStep.progress}%` }}
                    />
                  </div>

                  {/* Code / Architecture Terminal Display */}
                  <div className="rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-white/85 leading-relaxed overflow-x-auto mb-5">
                    <pre className="text-[11.5px] text-[#FFB3C7] font-mono whitespace-pre-wrap">
                      {activeStep.codeSnippet}
                    </pre>
                  </div>

                  {/* Metrics Badge */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      <span className="text-[10px] font-mono text-white/50 block">Target SLA</span>
                      <span className="text-xs font-bold text-white mt-0.5 block">{activeStep.visualMetrics.primary}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      <span className="text-[10px] font-mono text-white/50 block">Architecture</span>
                      <span className="text-xs font-bold text-[#FFA3BD] mt-0.5 block">{activeStep.visualMetrics.secondary}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6A6066]">
                <Shield className="w-4 h-4 text-crimson shrink-0" />
                <span>100% On-Time Deployment Commitment · Zero Junior Delegation</span>
              </div>
              <Button to="/contact?service=website" variant="primary" size="md" className="w-full sm:w-auto shadow-crimson-glow text-xs font-bold uppercase tracking-wider">
                <span>Start Your 5-Day Sprint</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Website Types Grid: Dark Obsidian Stage */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 bg-[#0D0A0C] text-white border-b border-white/[0.08] relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-crimson/15 blur-[140px]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFA3BD] font-bold block mb-3">
                  || Industry Solutions
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                  Tailored for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-[#FFA3BD]">business model</span>.
                </h2>
              </div>
              <p className="text-white/70 text-sm max-w-sm leading-relaxed">
                We design specifically for your industry's conversion triggers and user habits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteTypes.map((type, idx) => (
                <SpotlightCard key={idx} className="p-8 flex flex-col justify-between bg-[#160B14]/90 border border-white/10 hover:border-crimson/40 text-white shadow-xl rounded-2xl group transition-all">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-crimson/20 border border-crimson/30 text-[#FFA3BD] font-bold mb-4 inline-block">
                      {type.tag}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-crimson transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                      {type.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                    <span>Proven in:</span>
                    <span className="text-white font-semibold flex items-center gap-1">
                      {type.example}
                      <ArrowUpRight className="w-3.5 h-3.5 text-crimson" />
                    </span>
                  </div>
                </SpotlightCard>
              ))}
            </div>
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
