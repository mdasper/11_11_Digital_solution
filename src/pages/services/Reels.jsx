import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Eye, Sparkles, CheckCircle2, Clapperboard, Scissors, Share2 } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { formatINR } from '@/lib/utils';
import prodImg from '@/assets/manifesto/production.svg';
import designImg from '@/assets/manifesto/design.svg';
import snapitImg from '@/assets/projects/snapit-studio.svg';
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
const Reels = () => {
    const [activeTile, setActiveTile] = useState(null);
    return (<>
      <Helmet>
        <title>Reels & Short-Form Video Production | 11 11 Digital Solutions</title>
        <meta name="description" content="Short videos that stop the scroll. Hook-driven vertical short-form production for Instagram Reels, YouTube Shorts, and TikTok."/>
      </Helmet>

      <div className="pt-32 sm:pt-40 bg-ink min-h-screen text-text-dark">
        {/* 1. Cinematic Hero */}
        <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-20 border-b border-black/[0.06] relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-6">
              <span className="font-mono text-xs font-bold text-crimson tracking-widest">
                || CORE CAPABILITY 03
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"/>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] mb-6 text-[#120E11]">
              Short videos that{' '}
              <span className="font-accent italic text-crimson font-normal">stop the scroll</span>.
            </h1>

            <p className="text-lg sm:text-xl text-text-dark-muted max-w-2xl leading-relaxed mb-8">
              We engineer vertical reels for the Instagram, YouTube, and TikTok algorithms. Uncompromising pacing, kinetic typography, and high-retention storytelling designed to turn viewers into followers and buyers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?service=reels" variant="primary" size="lg">
                Book a Reels Production
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                View Reel Packages
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Interactive 9:16 Reel Grid */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
                || Viral Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#120E11]">
                9:16 High-retention <span className="font-accent italic text-crimson font-normal">formats</span>.
              </h2>
            </div>
            <p className="text-text-dark-muted text-sm max-w-sm">
              Hover over any reel to preview audio waveforms and kinetic retention pacing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reelTiles.map((reel, idx) => {
            const isPlaying = activeTile === idx;
            return (<div key={idx} onMouseEnter={() => setActiveTile(idx)} onMouseLeave={() => setActiveTile(null)} className="group relative rounded-[28px] overflow-hidden aspect-[9/16] bg-charcoal border border-black/[0.08] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-crimson cursor-pointer" data-cursor="Play">
                  {/* Background Gradient & Graphic */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${reel.gradient} opacity-90`}/>
                  <div className="absolute inset-0 bg-black/25 mix-blend-multiply"/>

                  {/* Top Bar: Category & Soundwave */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-white/90">
                      {reel.category}
                    </span>
                    {/* Animated Sound-Wave Bar */}
                    <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-black/40 backdrop-blur-md">
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-2'}`}/>
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 delay-75 ${isPlaying ? 'h-5 animate-pulse' : 'h-3'}`}/>
                      <span className={`w-1 bg-crimson rounded-full transition-all duration-300 delay-150 ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`}/>
                    </div>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className={`w-16 h-16 rounded-full bg-crimson/90 backdrop-blur-md flex items-center justify-center text-white shadow-crimson-glow transition-all duration-300 ${isPlaying ? 'scale-110 bg-crimson' : 'scale-90 opacity-80'}`}>
                      <Play className="w-6 h-6 fill-white translate-x-0.5"/>
                    </div>
                  </div>

                  {/* Bottom Meta */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-crimson font-bold mb-1">
                      <Eye className="w-3.5 h-3.5"/> {reel.views}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-crimson transition-colors leading-snug">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-white/70 font-mono">{reel.client}</p>
                  </div>
                </div>);
        })}
          </div>
        </section>

        {/* 3. Behind-the-Scenes Collage */}
        <section className="py-24 px-6 sm:px-8 bg-[#F8F5F7]/60 border-b border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
                || Studio Rig &amp; Equipment
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#120E11]">
                Cinema gear. <span className="font-accent italic text-crimson font-normal">Social pacing</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm aspect-[16/10] overflow-hidden">
                <img src={prodImg} alt="Camera Rig" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm aspect-[16/10] overflow-hidden">
                <img src={snapitImg} alt="Post-Production Suite" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm aspect-[16/10] overflow-hidden">
                <img src={designImg} alt="Kinetic Typography Design" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Process (Idea, Shoot, Edit, Publish) */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || The Viral Protocol
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              4 steps to high <span className="font-accent italic text-crimson font-normal">retention</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
            { icon: <Sparkles className="w-6 h-6 text-crimson mb-4"/>, step: '01', title: 'Idea & Scripting', desc: 'Trend discovery, hook formulation, and word-by-word storyboarding.' },
            { icon: <Clapperboard className="w-6 h-6 text-crimson mb-4"/>, step: '02', title: 'On-Location Shoot', desc: 'Cinema 4K lighting, directional wireless audio, and multiple B-roll angles.' },
            { icon: <Scissors className="w-6 h-6 text-crimson mb-4"/>, step: '03', title: 'Surgical Edit', desc: 'Cut dead air, add kinetic animated subtitles, sound effects, and color grades.' },
            { icon: <Share2 className="w-6 h-6 text-crimson mb-4"/>, step: '04', title: 'Publish & Scale', desc: 'Cover thumbnails, optimal audio selection, and distribution hashtags.' },
        ].map((p) => (<div key={p.step} className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm hover:border-crimson/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  {p.icon}
                  <span className="font-mono text-xs text-crimson font-bold tracking-widest block mb-2">
                    PHASE {p.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>))}
          </div>
        </section>

        {/* 5. 3 Reels Packages */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || Reels Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Packages for every <span className="font-accent italic text-crimson font-normal">growth phase</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.reels.map((pkg) => (<div key={pkg.id} className={`rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 relative ${pkg.isPopular
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

        {/* 6. CTA */}
        <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to make your brand <span className="font-accent italic text-crimson font-normal">impossible to scroll past</span>?
          </h2>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Start Your Reel Production
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Pricing Guide
            </Button>
          </div>
        </section>
      </div>
    </>);
};
export default Reels;
