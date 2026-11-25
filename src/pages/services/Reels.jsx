import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Eye, Sparkles, CheckCircle2, Clapperboard, Scissors, Share2, Camera, Layers, Volume2, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { formatINR } from '@/lib/utils';
import { WordStream } from '@/components/motion/WordStream';

import heroReelsImg from '@/assets/crafts/hero-reels.jpg';
import craftReelsImg from '@/assets/crafts/craft-reels.jpg';
import editingCraftImg from '@/assets/crafts/craft-editing.jpg';

const reelTiles = [
    {
        title: 'The 3-Second Retention Hook',
        views: '1.4M Views',
        client: 'SNAPIT Studio Showcase',
        category: 'Commercial Video',
        gradient: 'from-[#FF1A63] to-[#0D0A0C]',
    },
    {
        title: 'Highland Terroir Unveiled',
        views: '890K Views',
        client: 'Highland Origin',
        category: 'Artisanal Story',
        gradient: 'from-[#C2104A] to-[#1B1619]',
    },
    {
        title: 'Zero-Template Web Physics',
        views: '650K Views',
        client: '11 11 Digital',
        category: 'Agency Behind-Scenes',
        gradient: 'from-[#7A0A2E] to-[#0D0A0C]',
    },
    {
        title: '500,000 Pcs Export Factory Tour',
        views: '420K Views',
        client: 'Fazil Garments',
        category: 'Industrial B2B',
        gradient: 'from-[#FF1A63] to-[#2B1B24]',
    },
];

const studioPillars = [
    {
        step: 'PILLAR 01',
        title: 'Cinema 4K Sensor & Rig',
        subtitle: 'Hollywood optics for vertical screens',
        desc: 'We do not shoot with basic phones. Every reel is captured on Sony FX3 cinema sensors with 10-bit 4:2:2 color and shallow depth-of-field that immediately sets your brand apart.',
        image: craftReelsImg,
        badge: 'SONY FX3 · 4K 10-BIT',
        specs: ['10-Bit 4:2:2 All-Intra S-Cinetone', 'Wireless follow focus & gimbal stability', 'Macro optics for ultra-sharp product details'],
    },
    {
        step: 'PILLAR 02',
        title: '3-Second Retention Science',
        subtitle: 'Engineered to stop the algorithmic scroll',
        desc: 'Over 80% of viewers scroll away within 3 seconds. We engineer kinetic pattern interrupts, dynamic angle switches, and bold text placement that keeps eyes locked on your story.',
        image: heroReelsImg,
        badge: 'HOOK ARCHITECTURE',
        specs: ['0.8s sub-second pacing cuts', 'High-contrast kinetic motion subtitles', 'Psychological pattern interrupts'],
    },
    {
        step: 'PILLAR 03',
        title: 'Spatial Audio & Trend Stems',
        subtitle: 'Binaural sound that triggers dopamine',
        desc: 'Audio drives over 65% of short-form retention. We clean dialogue with broadcast de-noisers, layer custom whooshes and bass drops, and sync every beat to viral audio trends.',
        image: editingCraftImg,
        badge: 'SPATIAL SOUND DESIGN',
        specs: ['24-Bit 48kHz studio wireless lavs', 'Foley impact drops & sound effects', 'Curated viral audio stem synchronization'],
    },
];

const Reels = () => {
    const [activeTile, setActiveTile] = useState(null);

    return (<>
      <Helmet>
        <title>Reels & Short-Form Video Production | 11 11 Digital Solutions</title>
        <meta name="description" content="Short videos that stop the scroll. Hook-driven vertical short-form production for Instagram Reels, YouTube Shorts, and TikTok."/>
      </Helmet>

      <div className="bg-[#FAF7F9] min-h-screen text-[#120E11]">
        {/* 1. Full-Width Deep Obsidian Dark Velvet Hero Stage */}
        <section className="relative w-full pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#0A0709] text-white border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Crimson Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8">
                  <span className="font-mono text-xs font-bold text-crimson tracking-widest uppercase">
                    || CORE CAPABILITY 03
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                </div>

                <WordStream
                  as="h1"
                  className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.03] mb-6 text-white"
                >
                  Short videos that{' '}
                  <span className="font-accent italic text-crimson font-normal">stop the scroll</span>.
                </WordStream>

                <WordStream
                  as="p"
                  className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-10"
                >
                  We engineer vertical reels for the Instagram, YouTube Shorts, and TikTok algorithms. Uncompromising pacing, kinetic typography, and high-retention storytelling designed to turn viewers into followers and buyers.
                </WordStream>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button to="/contact?service=reels" variant="primary" size="lg" className="shadow-[0_0_30px_rgba(248,17,90,0.4)]">
                    Book a Reels Production
                  </Button>
                  <Button to="/pricing" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    View Reel Packages
                  </Button>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-crimson">1.4M+</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Peak Reel Reach</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">82%</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Avg 3s Retention</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">48 Hrs</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Edit Turnaround</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Reel Rig */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[28px] overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-sm group">
                  <img
                    src={heroReelsImg}
                    alt="11 11 Reels Production Studio"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0709] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">CINEMA 4K VERTICAL</div>
                      <div className="text-sm font-display font-bold text-white mt-0.5">High-Retention Production Suite</div>
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

        {/* 2. Interactive 9:16 Reel Grid */}
        <section className="py-24 sm:py-32 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 border-b border-black/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
                || Viral Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#120E11]">
                9:16 High-retention <span className="font-accent italic text-crimson font-normal">formats</span>.
              </h2>
            </div>
            <p className="text-black/60 text-sm max-w-sm">
              Hover over any reel to preview audio waveforms and kinetic retention pacing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reelTiles.map((reel, idx) => {
              const isPlaying = activeTile === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveTile(idx)}
                  onMouseLeave={() => setActiveTile(null)}
                  className="group relative rounded-[28px] overflow-hidden aspect-[9/16] bg-[#0E0B0D] border border-black/[0.08] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-crimson cursor-pointer"
                  data-cursor="Play"
                >
                  {/* Background Gradient & Graphic */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${reel.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />

                  {/* Top Bar: Category & Soundwave */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-white/90">
                      {reel.category}
                    </span>
                    {/* Animated Sound-Wave Bar */}
                    <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-black/40 backdrop-blur-md">
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-2'}`} />
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 delay-75 ${isPlaying ? 'h-5 animate-pulse' : 'h-3'}`} />
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 delay-150 ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`} />
                    </div>
                  </div>

                  {/* Center Play Button Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`w-16 h-16 rounded-full bg-crimson/90 border-2 border-white flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${isPlaying ? 'scale-110 bg-crimson' : 'scale-90 opacity-60'}`}>
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Bottom Meta */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-crimson font-bold mb-1">
                      <Eye className="w-3.5 h-3.5" /> {reel.views}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-crimson transition-colors leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-white/70 font-mono">{reel.client}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. 3-Pillar Production Studio Suite (Clear, Understandable, and Relatable) */}
        <section className="py-24 sm:py-32 w-full bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
                || THE VIRAL ENGINE SUITE
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
                Cinema gear. <span className="font-accent italic text-crimson font-normal">Algorithmic pacing</span>.
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-3">
                How we turn short vertical videos into high-converting revenue drivers for modern brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studioPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[28px] bg-white/[0.02] border border-white/10 overflow-hidden hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="aspect-[16/10] overflow-hidden relative border-b border-white/[0.08]">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white uppercase font-bold tracking-wider">
                        {pillar.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <span className="text-xs font-mono text-crimson font-bold uppercase tracking-widest block mb-1">
                        {pillar.step}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-white/50 mb-4">
                        {pillar.subtitle}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed mb-6">
                        {pillar.desc}
                      </p>

                      {/* Specs */}
                      <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                        {pillar.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                            <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Process (Idea, Shoot, Edit, Publish) */}
        <section className="py-28 sm:py-36 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
              || The Viral Protocol
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              4 steps to high <span className="font-accent italic text-crimson font-normal">retention</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Sparkles className="w-6 h-6 text-crimson mb-4" />, step: '01', title: 'Idea & Scripting', desc: 'Trend discovery, hook formulation, and word-by-word storyboarding.' },
              { icon: <Clapperboard className="w-6 h-6 text-crimson mb-4" />, step: '02', title: 'On-Location Shoot', desc: 'Cinema 4K lighting, directional wireless audio, and multiple B-roll angles.' },
              { icon: <Scissors className="w-6 h-6 text-crimson mb-4" />, step: '03', title: 'Surgical Edit', desc: 'Cut dead air, add kinetic animated subtitles, sound effects, and color grades.' },
              { icon: <Share2 className="w-6 h-6 text-crimson mb-4" />, step: '04', title: 'Publish & Scale', desc: 'Cover thumbnails, optimal audio selection, and distribution hashtags.' },
            ].map((p) => (
              <div key={p.step} className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:border-crimson/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {p.icon}
                  <span className="font-mono text-xs text-crimson font-bold tracking-widest block mb-2">
                    PHASE {p.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 3 Reels Packages */}
        <section className="py-28 sm:py-36 w-full bg-[#0D0A0C] text-white border-y border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
                || Reels Packages
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-white">
                Packages for every <span className="font-accent italic text-crimson font-normal">growth phase</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {PRICING_PACKAGES.reels.map((pkg) => (
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
                      Most Popular Choice
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

        {/* 6. Bottom CTA */}
        <section className="py-28 px-6 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to make your brand go <span className="font-accent italic text-crimson font-normal">viral</span>?
          </h2>
          <p className="text-black/60 max-w-xl mx-auto text-base sm:text-lg mb-8">
            Tell us about your product or concept and let's craft high-retention vertical reels.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact?service=reels" variant="primary" size="lg">
              Book a Production Call
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Packages
            </Button>
          </div>
        </section>
      </div>
    </>);
};

export default Reels;