import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { formatINR } from '@/lib/utils';
import { gsap } from '@/lib/gsap';
import { WordStream } from '@/components/motion/WordStream';
import highlandMockup from '@/assets/projects/highland-origin.svg';
const marketingRows = [
    {
        tag: 'ORGANIC SEARCH',
        title: 'Technical & Local SEO',
        desc: 'Dominate high-intent Google searches. We optimize site speed, schema architecture, keyword strategy, and Google Business Profile to capture customers looking for your exact services.',
        bullets: ['Keyword & competitor gap analysis', 'Full on-page semantic schema markup', 'High-authority backlink outreach', 'Google Search Console optimization'],
        stat: '+180% Organic Reach',
    },
    {
        tag: 'PAID ADVERTISING',
        title: 'Meta & Google Ads Engine',
        desc: 'Turn ad spend into predictable revenue. We design high-converting visual ad creatives, craft psychological hooks, and configure pixel retargeting to maximize ROAS while minimizing cost-per-lead.',
        bullets: ['High-converting UGC ad creative direction', 'Custom audience building & lookalikes', 'A/B split testing hooks & headlines', 'Real-time conversion tracking & ROAS audits'],
        stat: '3.4x Average ROAS',
    },
    {
        tag: 'SOCIAL PRESENCE',
        title: 'Social Media Strategy & Content',
        desc: 'Build a brand customers trust and follow. We design tailored weekly content calendars, produce engaging carousels, and manage community interactions to turn passive followers into active buyers.',
        bullets: ['Strategic weekly posting schedule', 'Custom branded carousel templates', 'Story engagement & poll strategies', 'Direct message conversion scripts'],
        stat: '4.8/5 Engagement Rate',
    },
    {
        tag: 'CONVERSION ACCELERATION',
        title: 'CRO & Funnel Optimization',
        desc: 'Traffic is only half the battle. We analyze heatmaps, test call-to-action positions, and rewrite high-converting sales copy to double the percentage of visitors who contact you.',
        bullets: ['Frictionless lead capture forms', 'WhatsApp instant conversion triggers', 'Social proof & trust badge placement', 'Continuous conversion rate optimization'],
        stat: '+42% Inquiries Growth',
    },
];
const Marketing = () => {
    const chartPathRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Draw conversion chart line on scroll
            if (chartPathRef.current) {
                gsap.fromTo(chartPathRef.current, { strokeDashoffset: 1000 }, {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.marketing-chart-section',
                        start: 'top 75%',
                    },
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (<>
      <Helmet>
        <title>Digital Marketing & Ads Management | 11 11 Digital Solutions</title>
        <meta name="description" content="Be seen by the right people, at the right time. Data-driven Meta ads, Google Search ads, SEO, and social media growth engineered for maximum ROI."/>
      </Helmet>

      <div ref={containerRef} className="pt-32 sm:pt-40 bg-ink min-h-screen text-text-dark">
        {/* 1. Dashboard Hero */}
        <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-20 border-b border-black/[0.06]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-6">
              <span className="font-mono text-xs font-bold text-crimson tracking-widest">
                || CORE CAPABILITY 02
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"/>
            </div>

            <WordStream
              as="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] mb-6 text-[#120E11]"
            >
              Be seen by the right people, at the{' '}
              <span className="font-accent italic text-crimson font-normal">right time</span>.
            </WordStream>

            <WordStream
              as="p"
              className="text-lg sm:text-xl text-text-dark-muted max-w-2xl leading-relaxed mb-8"
            >
              We eliminate wasted ad spend. Our data-backed multi-channel campaigns across Meta, Google, and SEO are engineered to deliver qualified inquiries at scale.
            </WordStream>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?service=marketing" variant="primary" size="lg">
                Scale Your Marketing
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                View Monthly Retainers
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Interactive SVG Conversion Chart (Draws on Scroll) */}
        <section className="marketing-chart-section py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-14 shadow-[0_16px_40px_rgba(18,14,17,0.06)] relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <span className="font-mono text-xs text-crimson font-bold uppercase tracking-widest block mb-1">
                  || CAMPAIGN TRAJECTORY
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#120E11]">
                  6-Month Inbound Growth Model
                </h3>
              </div>
              <div className="flex items-center gap-6 text-xs font-mono">
                <span className="flex items-center gap-2 text-[#120E11] font-semibold">
                  <span className="w-3 h-3 rounded-full bg-crimson"/> Qualified Inquiries
                </span>
                <span className="flex items-center gap-2 text-text-dark-muted">
                  <span className="w-3 h-3 rounded-full bg-black/20"/> Industry Average
                </span>
              </div>
            </div>

            {/* SVG Chart Canvas */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[24/9]">
              <svg viewBox="0 0 1000 350" className="w-full h-full overflow-visible" fill="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F8115A" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#F8115A" stopOpacity="0"/>
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="70" x2="1000" y2="70" stroke="rgba(18,14,17,0.06)" strokeDasharray="4 4"/>
                <line x1="0" y1="140" x2="1000" y2="140" stroke="rgba(18,14,17,0.06)" strokeDasharray="4 4"/>
                <line x1="0" y1="210" x2="1000" y2="210" stroke="rgba(18,14,17,0.06)" strokeDasharray="4 4"/>
                <line x1="0" y1="280" x2="1000" y2="280" stroke="rgba(18,14,17,0.06)" strokeDasharray="4 4"/>

                {/* Flat Industry Average Line */}
                <path d="M 0 250 L 200 245 L 400 240 L 600 235 L 800 230 L 1000 225" stroke="rgba(18,14,17,0.25)" strokeWidth="2" strokeDasharray="6 6"/>

                {/* 11 11 Growth Curve */}
                <path ref={chartPathRef} d="M 0 300 Q 200 280, 350 200 T 700 90 T 1000 30" stroke="#F8115A" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="1000"/>

                {/* Data Points */}
                <circle cx="0" cy="300" r="5" fill="#F8115A"/>
                <circle cx="350" cy="200" r="6" fill="#F8115A" stroke="#FFFFFF" strokeWidth="2"/>
                <circle cx="700" cy="90" r="6" fill="#F8115A" stroke="#FFFFFF" strokeWidth="2"/>
                <circle cx="1000" cy="30" r="7" fill="#F8115A" stroke="#FFFFFF" strokeWidth="2"/>
              </svg>

              {/* Month Markers */}
              <div className="flex justify-between text-[11px] font-mono text-text-dark-muted mt-4">
                <span>Month 1 (Audit)</span>
                <span>Month 2 (Creative Testing)</span>
                <span>Month 4 (Scaling Winners)</span>
                <span>Month 6 (+340% Growth)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Alternating Feature Rows */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06] space-y-20 sm:space-y-28">
          {marketingRows.map((row, idx) => {
            const isEven = idx % 2 === 1;
            return (<div key={row.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left/Right Text Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-2">
                    // {row.tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                    {row.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-dark-muted leading-relaxed mb-6">
                    {row.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {row.bullets.map((b, i) => (<div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0"/>
                        <span>{b}</span>
                      </div>))}
                  </div>

                  <div className="p-4 rounded-xl bg-crimson/5 border border-crimson/20 inline-block shadow-sm">
                    <span className="text-xs font-mono text-text-dark-muted block">Benchmark Result:</span>
                    <span className="text-lg font-bold text-crimson">{row.stat}</span>
                  </div>
                </div>

                {/* Mockup Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <SpotlightCard className="p-8 relative overflow-hidden bg-white border border-black/[0.08] shadow-[0_16px_40px_rgba(18,14,17,0.06)]">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF7F9] border border-black/[0.08]">
                      <img src={highlandMockup} alt={row.title} className="w-full h-full object-cover"/>
                    </div>
                  </SpotlightCard>
                </div>
              </div>);
        })}
        </section>

        {/* 4. 3 Marketing Retainers */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || Transparent Monthly Retainers
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Marketing growth <span className="font-accent italic text-crimson font-normal">plans</span>.
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Monthly ongoing management. Direct WhatsApp communication. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.marketing.map((pkg) => (<div key={pkg.id} className={`rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 relative ${pkg.isPopular
                ? 'bg-white border-2 border-crimson shadow-[0_16px_40px_rgba(248,17,90,0.15)]'
                : 'bg-white border border-black/[0.08] shadow-sm hover:border-crimson/40'}`}>
                {pkg.isPopular && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-crimson text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Recommended Plan
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

        {/* 5. Bottom CTA */}
        <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to stop wasting ad spend and start <span className="font-accent italic text-crimson font-normal">scaling</span>?
          </h2>
          <p className="text-text-dark-muted max-w-xl mx-auto text-base sm:text-lg mb-8">
            Get a free paid ads &amp; SEO audit with Mohamed Asper.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Claim Free Marketing Audit
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              Explore All Plans
            </Button>
          </div>
        </section>
      </div>
    </>);
};
export default Marketing;
