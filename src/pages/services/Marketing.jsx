import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, 
  Target, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  Search, 
  Star, 
  PhoneCall, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Send, 
  TrendingUp, 
  Zap 
} from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { formatINR } from '@/lib/utils';
import { WordStream } from '@/components/motion/WordStream';
import heroMarketingImg from '@/assets/crafts/hero-marketing.jpg';
import craftMarketingImg from '@/assets/crafts/craft-marketing.jpg';

const marketingPillars = [
  {
    step: '01',
    icon: <Target className="w-6 h-6 text-crimson" />,
    title: 'Target Only Real Buyers',
    subtitle: 'Zero wasted budget on random viewers',
    desc: 'We don’t show ads to random people. We pinpoint customers in your city or industry who are actively searching Google and Instagram for your exact products and services.',
    tag: 'Qualified Buyer Audience',
  },
  {
    step: '02',
    icon: <Sparkles className="w-6 h-6 text-crimson" />,
    title: 'High-Trust Videos & Ads',
    subtitle: 'Build instant credibility and stop the scroll',
    desc: 'Instead of cheap flyers, we craft cinema-grade vertical videos, customer proof, and clear offers that make people stop, watch, and trust your brand immediately.',
    tag: 'Cinema-Grade Trust',
  },
  {
    step: '03',
    icon: <MessageSquare className="w-6 h-6 text-crimson" />,
    title: 'Inquiries Straight to WhatsApp',
    subtitle: 'Direct sales conversations on your phone',
    desc: 'No confusing forms or waiting. Customers tap one button on the ad and start chatting directly with you on WhatsApp or call your phone, ready to place orders.',
    tag: 'Instant 1-Tap Leads',
  },
];

const Marketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing & Ads Management | 11 11 Digital Solutions</title>
        <meta
          name="description"
          content="Be seen by the right people, at the right time. Data-driven Meta ads, Google Search ads, SEO, and social media growth engineered for maximum ROI."
        />
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
                  <Button
                    to="/contact?service=marketing"
                    variant="primary"
                    size="lg"
                    className="shadow-[0_0_30px_rgba(248,17,90,0.4)]"
                  >
                    Scale Your Marketing
                  </Button>
                  <Button
                    to="/pricing"
                    variant="secondary"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Monthly Retainers
                  </Button>
                </div>

                {/* Live Performance Badges */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-crimson">3.4x+</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">
                      Average ROAS
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">48 Hrs</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">
                      Campaign Launch
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">100%</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">
                      Live Reporting
                    </div>
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
                      <div className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">
                        11 11 GROWTH SUITE
                      </div>
                      <div className="text-sm font-display font-bold text-white mt-0.5">
                        Omnichannel Ad Orchestration
                      </div>
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

        {/* 2. Layman-Friendly Customer Acquisition Protocol (Clear, Simple, Understandable) */}
        <section className="py-24 sm:py-32 w-full bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="font-mono text-xs text-crimson font-bold uppercase tracking-widest block mb-2">
                || HOW IT ACTUALLY WORKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
                How we bring <span className="font-accent italic text-crimson font-normal">paying customers</span> to your business.
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                No confusing jargon or complicated graphs. Here is our proven 3-step system that turns online attention into direct sales and WhatsApp inquiries.
              </p>
            </div>

            {/* 3 Simple Action Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {marketingPillars.map((pillar) => (
                <div
                  key={pillar.step}
                  className="rounded-[28px] p-8 bg-white/[0.02] border border-white/10 hover:border-crimson/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-12 h-12 rounded-2xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                        {pillar.icon}
                      </span>
                      <span className="font-mono text-xs font-bold text-crimson px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20">
                        STEP {pillar.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-white/50 mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-crimson flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{pillar.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Trust Summary Banner */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-crimson/20 border border-crimson/30 text-crimson flex items-center justify-center text-lg font-bold shrink-0">
                  <Zap className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display mb-1">
                    You focus on your craft — we handle the marketing and leads.
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60">
                    Direct communication with founder Mohamed Asper. Fast execution, transparent results, and zero marketing excuses.
                  </p>
                </div>
              </div>
              <Button to="/contact?service=marketing" variant="primary" size="md" className="shrink-0 font-bold">
                Start Getting Inquiries
              </Button>
            </div>
          </div>
        </section>

        {/* 3. 4 Core Marketing Rows With Dedicated, Relatable Visual Cards */}
        <section className="py-28 sm:py-36 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-28 sm:space-y-36">
          
          {/* ROW 1: Technical & Local SEO Domination */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                  ORGANIC SEARCH &amp; INTENT
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                Technical &amp; Local SEO Domination
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-6">
                When customers search Google for your exact service, they should find your website first—not your competitors. We optimize page speed, local maps, and high-value search terms to keep your business at the top of Google.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  '#1 rank targeting for high-intent customer search terms',
                  'Google Business Profile & local map pack optimization',
                  'Full schema markup for 5-star review ratings in search results',
                  'Mobile speed optimization for instant sub-second loading',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/[0.08] inline-flex items-center gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-mono text-black/50 block">Key Result Metric:</span>
                  <span className="text-xl font-bold text-crimson font-display">+180% More Google Search Inquiries</span>
                </div>
              </div>
            </div>

            {/* Visual Card 1: Realistic Google Search #1 Ranking UI */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] bg-[#0E0B0D] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
                {/* Mini Browser Bar */}
                <div className="flex items-center gap-2 pb-4 mb-5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 ml-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-mono text-white/70 flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-crimson" />
                    <span>google.com/search?q=best+services+near+me</span>
                  </div>
                </div>

                {/* Google Search Result Item */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-crimson/30 hover:border-crimson transition-all relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-crimson text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                      ★ #1 Top Ranked on Google
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Result
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-display font-bold text-[#FFA3BD] hover:underline cursor-pointer mb-1">
                    Your Business Name — Verified Official Flagship
                  </h4>
                  <p className="text-xs font-mono text-white/50 mb-2">
                    https://yourbusiness.com · Tamil Nadu, India
                  </p>

                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-white/80 ml-1">5.0 (148 Customer Reviews)</span>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    High-end craftsmanship, transparent pricing, and 48-hour turnarounds. Partner directly with our verified lead engineers.
                  </p>

                  {/* Sitelinks */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                    <div className="p-2 rounded bg-white/[0.04] text-[11px] font-mono text-white/80">
                      💬 Direct WhatsApp Chat
                    </div>
                    <div className="p-2 rounded bg-white/[0.04] text-[11px] font-mono text-white/80">
                      ⚡ 24/7 Inquiry Booking
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>Google Crawl Status: 100% Indexed</span>
                  <span className="text-crimson font-bold">+180% Organic Reach</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Meta & Google Ads Performance Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Mockup Column */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-[28px] bg-[#0E0B0D] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
                {/* Meta Ad Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-crimson to-magenta flex items-center justify-center font-bold text-white text-xs">
                      11:11
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        Your Brand Showcase <span className="text-crimson text-xs">✓</span>
                      </div>
                      <div className="text-[10px] font-mono text-white/50">
                        Sponsored · Instagram &amp; Facebook Feed
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-crimson/20 border border-crimson/40 text-crimson font-mono text-[10px] font-bold">
                    3.4x ROAS
                  </span>
                </div>

                {/* Ad Visual Media Box */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 group mb-4">
                  <img
                    src={craftMarketingImg}
                    alt="High-Converting Meta Ad Creative"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90">
                      ⚡ HIGH-CONVERTING HOOK CREATIVE
                    </span>
                    <h5 className="text-sm font-display font-bold text-white mt-1">
                      Stop Wasting Marketing Budget. Get Proven Results.
                    </h5>
                  </div>
                </div>

                {/* Ad Action Bar */}
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-white/50">WHATSAPP LEAD ROUTING</div>
                    <div className="text-xs font-bold text-white">Instant Message &amp; Pricing</div>
                  </div>
                  <button className="px-4 py-1.5 rounded-full bg-crimson text-white text-xs font-bold flex items-center gap-1 hover:bg-magenta transition-colors">
                    Send Message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                  PAID PERFORMANCE ADVERTISING
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                Meta &amp; Google Ads Engine
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-6">
                Turn ad spend into predictable cash flow. We build high-converting visual video ads, write irresistible psychological offers, and target qualified buyers who are ready to order.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Creative vertical video ads built for Instagram & Facebook',
                  'Audience lookalike modeling & precise local pin targeting',
                  'Continuous A/B headline & thumbnail testing',
                  'Real-time conversion tracking with zero wasted ad clicks',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/[0.08] inline-flex items-center gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-mono text-black/50 block">Key Result Metric:</span>
                  <span className="text-xl font-bold text-crimson font-display">3.4x Average ROAS Multiplier</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: Social Media Strategy & High-Retention Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                  SOCIAL REPUTATION &amp; PRESENCE
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                Social Media Strategy &amp; Viral Content
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-6">
                Build a recognizable brand that customers follow, trust, and talk about. We produce weekly content calendars, engaging visual carousels, and manage customer interactions that turn casual followers into buyers.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Tailored weekly posting schedules designed for algorithms',
                  'Custom branded carousel designs & kinetic motion typography',
                  'Interactive story polls and question funnels for instant engagement',
                  'Direct message conversion scripts that close sales on Instagram',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/[0.08] inline-flex items-center gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-mono text-black/50 block">Key Result Metric:</span>
                  <span className="text-xl font-bold text-crimson font-display">4.8/5 Engagement &amp; Retention Score</span>
                </div>
              </div>
            </div>

            {/* Visual Card 3: Authentic Instagram Feed & Engagement Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] bg-[#0E0B0D] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
                {/* Profile Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-crimson to-magenta">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                        11:11
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        @yourbrand_official <span className="text-crimson text-xs">✓</span>
                      </div>
                      <div className="text-[11px] font-mono text-white/50">
                        Official Studio Page · Viral Reach
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.08] text-xs font-mono text-white/80">
                    Following
                  </span>
                </div>

                {/* Viral Post Card */}
                <div className="rounded-2xl bg-gradient-to-br from-[#1C1418] via-[#2A1821] to-[#120B0F] border border-crimson/30 p-6 mb-4">
                  <span className="text-[10px] font-mono text-crimson font-bold uppercase tracking-wider block mb-2">
                    VIRAL CAROUSEL POST 01/05
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 leading-snug">
                    "The Exact 3 Reasons Why Premium Brands Never Compromise On Quality."
                  </h4>
                  <p className="text-xs text-white/60 mb-4 leading-relaxed">
                    Swipe left to inspect our production standards, client results, and 48-hour delivery timeline. 👉
                  </p>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-crimson w-2/5 rounded-full" />
                  </div>
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center justify-between py-2 border-t border-white/10 text-white/80">
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-crimson font-bold">
                      <Heart className="w-4 h-4 fill-crimson" /> 24.8K
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" /> 482
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Send className="w-4 h-4" /> 1.2K
                    </span>
                  </div>
                  <Bookmark className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* ROW 4: CRO & Frictionless Sales Funnels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Card 4: WhatsApp Instant Booking & Conversion Mockup */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-[28px] bg-[#0E0B0D] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
                {/* WhatsApp Chat Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 bg-emerald-950/30 p-3 rounded-2xl border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        Direct Client WhatsApp <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400">Online · Instant Response</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-white/40">Verified Business</span>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-3 mb-5">
                  {/* Incoming Lead Message */}
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 max-w-[85%] text-xs text-white/90 leading-relaxed">
                    <span className="text-[10px] text-white/50 block mb-0.5">Customer (From Instagram Ad):</span>
                    "Hi! I just saw your video showcase. Can I get a price estimate and discuss a project for next week?"
                  </div>

                  {/* Automated Fast Response */}
                  <div className="p-3.5 rounded-2xl rounded-tr-sm bg-emerald-600/20 border border-emerald-500/30 max-w-[85%] ml-auto text-xs text-white leading-relaxed">
                    <span className="text-[10px] text-emerald-400 block mb-0.5">Your Business (Automated Trigger):</span>
                    "Hello! 👋 Thank you for reaching out. Here is our 1-click booking link and sample catalog. Let's get started!"
                  </div>
                </div>

                {/* 1-Tap Action Callout */}
                <div className="p-4 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">1-Tap WhatsApp Lead Router</div>
                    <div className="text-[10px] font-mono text-white/60">0-Second Friction · 42% Higher Conversions</div>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-crimson text-white text-xs font-bold shadow-crimson-glow">
                    Chat Now
                  </button>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold">
                  CONVERSION ARCHITECTURE
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#120E11] mb-4">
                CRO &amp; Frictionless Sales Funnels
              </h3>
              <p className="text-base text-black/70 leading-relaxed mb-6">
                Getting traffic is easy; converting that traffic into cash is what matters. We eliminate unnecessary form fields, place instant WhatsApp booking triggers, and rewrite copy so more visitors convert on their very first visit.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Frictionless 1-tap WhatsApp instant booking buttons',
                  'Strategic social proof & customer reviews placed at decision points',
                  'Simplified mobile checkout & lead inquiry forms',
                  'Heatmap analysis to eliminate drop-off friction points',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#120E11]">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-black/[0.08] inline-flex items-center gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-mono text-black/50 block">Key Result Metric:</span>
                  <span className="text-xl font-bold text-crimson font-display">+42% Higher Customer Inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Monthly Retainers (Dark Mixed Cards) */}
        <section className="py-28 sm:py-36 w-full bg-[#0D0A0C] text-white border-y border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
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
                    className="w-full justify-center font-bold"
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
            <Button to="/contact?service=marketing" variant="primary" size="lg">
              Claim Free Marketing Audit
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              Explore All Plans
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Marketing;