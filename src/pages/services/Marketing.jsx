import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, TrendingUp, DollarSign, Target, BarChart3, Users, Zap, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { formatINR } from '@/lib/utils';
import { WordStream } from '@/components/motion/WordStream';

import heroMarketingImg from '@/assets/crafts/hero-marketing.jpg';
import craftMarketingImg from '@/assets/crafts/craft-marketing.jpg';
import snapitImg from '@/assets/projects/client-snapit-studio.png';
import highlandMockup from '@/assets/projects/highland-origin.svg';
import fazilMockup from '@/assets/projects/client-fazil-garments.png';

const marketingRows = [
    {
        tag: 'ORGANIC SEARCH & INTENT',
        title: 'Technical & Local SEO Domination',
        desc: 'Dominate high-intent Google searches. We engineer site architecture, schema markup, structured breadcrumbs, and Google Business Profile to capture qualified buyers searching for your exact craft.',
        bullets: ['Full on-page semantic schema & rich snippets', 'Keyword intent & competitor gap targeting', 'High-authority local citation building', 'Google Search Console crawl & indexation audits'],
        stat: '+180% Organic Inquiries',
        mockup: fazilMockup,
        mockupType: 'image',
        badge: 'SEARCH ENGINE VISIBILITY'
    },
    {
        tag: 'PAID ADVERTISING ENGINE',
        title: 'Meta & Google Ads Engine',
        desc: 'Turn ad spend into predictable revenue. We design high-converting visual ad creatives, craft psychological hooks, and configure pixel retargeting to maximize ROAS while minimizing cost-per-lead.',
        bullets: ['High-converting UGC ad creative direction', 'Custom audience building & lookalikes', 'A/B split testing hooks & headlines', 'Real-time conversion tracking & ROAS audits'],
        stat: '3.4x Average ROAS',
        mockup: craftMarketingImg,
        mockupType: 'image',
        badge: 'PAID PERFORMANCE ENGINE'
    },
    {
        tag: 'SOCIAL PRESENCE & AUTHORITY',
        title: 'Social Media Strategy & High-Retention Content',
        desc: 'Build a brand customers trust and follow. We design tailored weekly content calendars, produce engaging carousels, and manage community interactions to turn passive followers into active buyers.',
        bullets: ['Strategic weekly multi-platform posting', 'Custom branded carousel templates & motion graphics', 'Story engagement & interactive poll funnels', 'Direct message conversion scripts & inquiry booking'],
        stat: '4.8/5 Engagement Rate',
        mockup: snapitImg,
        mockupType: 'image',
        badge: 'BRAND REPUTATION MATRIX'
    },
    {
        tag: 'CONVERSION ACCELERATION',
        title: 'CRO & Frictionless Sales Funnels',
        desc: 'Traffic is only half the battle. We analyze heatmaps, test call-to-action positions, and rewrite high-converting sales copy to double the percentage of visitors who contact you.',
        bullets: ['Frictionless 1-step lead capture forms', 'WhatsApp instant conversion triggers', 'Social proof & trust badge placement', 'Continuous conversion rate optimization'],
        stat: '+42% Lead Conversion Rate',
        mockup: highlandMockup,
        mockupType: 'svg',
        badge: 'HIGH-CONVERTING FUNNEL'
    },
];

const growthStages = [
    {
        stage: 'Month 1',
        name: 'Technical Audit & Pixel Setup',
        focus: 'Fix tracking leakages, audit conversion bottlenecks, setup Meta CAPI & Google Tag Manager.',
        spend: '₹25,000',
        inquiries: '45 - 60',
        roas: '2.1x',
        cpl: '₹410',
    },
    {
        stage: 'Month 3',
        name: 'Creative Testing & Scaling',
        focus: 'Scale winning ad hooks, launch high-intent Google search keywords, retarget website visitors.',
        spend: '₹60,000',
        inquiries: '180 - 220',
        roas: '3.4x',
        cpl: '₹280',
    },
    {
        stage: 'Month 6',
        name: 'Inbound Market Dominance',
        focus: 'Organic SEO compounding + automated paid funnels delivering steady high-ticket inquiries.',
        spend: '₹1,20,000',
        inquiries: '450 - 520',
        roas: '4.2x',
        cpl: '₹230',
    },
];

const Marketing = () => {
    const [activeStage, setActiveStage] = useState(1); // Default to Month 3

    return (<>
      <Helmet>
        <title>Digital Marketing & Ads Management | 11 11 Digital Solutions</title>
        <meta name="description" content="Be seen by the right people, at the right time. Data-driven Meta ads, Google Search ads, SEO, and social media growth engineered for maximum ROI."/>
      </Helmet>

      <div className="bg-[#FAF7F9] min-h-screen text-[#120E11]">
        {/* 1. Full-Width Deep Obsidian Dark Velvet Hero Stage */}
        <section className="relative w-full pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#0A0709] text-white border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Crimson Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8">
                  <span className="font-mono text-xs font-bold text-crimson tracking-widest uppercase">
                    || CORE CAPABILITY 02
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                </div>

                <WordStream
                  as="h1"
                  className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.03] mb-6 text-white"
                >
                  Be seen by the right buyers, at the{' '}
                  <span className="font-accent italic text-crimson font-normal">exact right time</span>.
                </WordStream>

                <WordStream
                  as="p"
                  className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-10"
                >
                  We eliminate wasted ad spend. Our data-backed multi-channel campaigns across Meta, Google Search, and high-ranking SEO are engineered to deliver qualified inquiries and measurable revenue.
                </WordStream>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button to="/contact?service=marketing" variant="primary" size="lg" className="shadow-[0_0_30px_rgba(248,17,90,0.4)]">
                    Scale Your Marketing
                  </Button>
                  <Button to="/pricing" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    View Monthly Retainers
                  </Button>
                </div>

                {/* Live Performance Badges */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-crimson">3.4x+</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Average ROAS</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">48 Hrs</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Campaign Launch</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">100%</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Live Reporting</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Ad Engine Deck */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[28px] overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-sm group">
                  <img
                    src={heroMarketingImg}
                    alt="Digital Marketing Campaign Command Center"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0709] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Analytics Tag */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">11 11 GROWTH SUITE</div>
                      <div className="text-sm font-display font-bold text-white mt-0.5">Omnichannel Ad Orchestration</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-crimson/20 border border-crimson/40 text-crimson font-mono text-xs font-bold">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Inbound Growth & ROAS Simulation Engine */}
        <section className="py-24 sm:py-32 w-full bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="font-mono text-xs text-crimson font-bold uppercase tracking-widest block mb-2">
                  || INBOUND TRAJECTORY ENGINE
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white">
                  6-Month Inbound Growth Model
                </h3>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                Click any timeline milestone to inspect live projected inquiry volume, ad spend efficiency, and blended ROAS scaling.
              </p>
            </div>

            {/* Interactive Timeline Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {growthStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.stage}
                    onClick={() => setActiveStage(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'bg-crimson/10 border-crimson shadow-[0_0_25px_rgba(248,17,90,0.25)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isActive ? 'text-crimson' : 'text-white/50'}`}>
                        {stage.stage}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-crimson animate-ping" />
                      )}
                    </div>
                    <div className="text-lg font-display font-bold text-white mb-1">
                      {stage.name}
                    </div>
                    <div className="text-xs text-white/60 leading-relaxed">
                      {stage.focus}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Metric Dashboard for Selected Stage */}
            <div className="p-8 sm:p-12 rounded-[28px] bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-white/50 block mb-1">Target Monthly Budget</span>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white flex items-center gap-1">
                    <DollarSign className="w-6 h-6 text-crimson" />
                    {growthStages[activeStage].spend}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-white/50 block mb-1">Monthly Qualified Inquiries</span>
                  <div className="text-2xl sm:text-4xl font-display font-black text-crimson flex items-center gap-1">
                    <Users className="w-6 h-6 text-crimson" />
                    {growthStages[activeStage].inquiries}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-white/50 block mb-1">Blended ROAS Return</span>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white flex items-center gap-1">
                    <TrendingUp className="w-6 h-6 text-crimson" />
                    {growthStages[activeStage].roas}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-white/50 block mb-1">Estimated Cost Per Lead (CPL)</span>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white flex items-center gap-1">
                    <Target className="w-6 h-6 text-white/40" />
                    {growthStages[activeStage].cpl}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                  <Zap className="w-4 h-4 text-crimson shrink-0" />
                  <span>Includes full ad copy creative testing, negative keyword pruning, and WhatsApp conversion routing.</span>
                </div>
                <Button to="/contact?service=marketing" variant="primary" size="sm" className="shrink-0">
                  Deploy Strategy <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Alternating Feature Rows with Unique Visual Mockups for Every Tile */}
        <section className="py-28 sm:py-36 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-24 sm:space-y-32">
          {marketingRows.map((row, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={row.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left/Right Text Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                      {row.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                    {row.title}
                  </h3>
                  <p className="text-base text-black/70 leading-relaxed mb-6">
                    {row.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {row.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-black/[0.08] inline-flex items-center gap-4 shadow-sm">
                    <div>
                      <span className="text-xs font-mono text-black/50 block">Key Result Metric:</span>
                      <span className="text-xl font-bold text-crimson font-display">{row.stat}</span>
                    </div>
                  </div>
                </div>

                {/* Unique Relatable Mockup Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="p-4 sm:p-6 rounded-[28px] relative overflow-hidden bg-white border border-black/[0.08] shadow-[0_16px_40px_rgba(18,14,17,0.06)] hover:border-crimson/30 transition-all duration-300">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#FAF7F9] border border-black/[0.06] relative group">
                      <img
                        src={row.mockup}
                        alt={row.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white uppercase font-bold tracking-wider">
                        {row.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* 4. Monthly Retainers (Dark Mixed Cards) */}
        <section className="py-28 sm:py-36 w-full bg-[#0D0A0C] text-white border-y border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
                || Transparent Monthly Retainers
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-white">
                Marketing growth <span className="font-accent italic text-crimson font-normal">plans</span>.
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                Monthly ongoing management. Direct WhatsApp communication. Cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {PRICING_PACKAGES.marketing.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.isPopular
                      ? 'bg-white/[0.05] border-2 border-crimson shadow-[0_0_50px_rgba(248,17,90,0.2)]'
                      : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-crimson text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      Recommended Plan
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-white/60 mb-6 leading-relaxed">{pkg.tagline}</p>

                    <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-white/[0.08]">
                      <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                        {formatINR(pkg.priceINR)}
                      </span>
                      <span className="text-xs text-white/50 font-mono">{pkg.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.isPopular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center"
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Bottom Call to Action */}
        <section className="py-28 px-6 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to stop wasting ad spend and start <span className="font-accent italic text-crimson font-normal">scaling</span>?
          </h2>
          <p className="text-black/60 max-w-xl mx-auto text-base sm:text-lg mb-8">
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
