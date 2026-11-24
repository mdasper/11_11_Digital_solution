import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, MessageCircle, Sparkles, Calculator, ShieldCheck, Phone } from 'lucide-react';
import { PRICING_PACKAGES, ESTIMATOR_SERVICES, ESTIMATOR_ADDONS } from '@/data/packages';
import { FAQS } from '@/data/faqs';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { cn } from '@/lib/utils';

const CATEGORY_TABS = [
    { id: 'websites', label: 'Websites & Apps' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'reels', label: 'Reels & Video' },
];

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('websites');
    const [estimatorServiceId, setEstimatorServiceId] = useState('web-starter');
    const activeServiceConfig = useMemo(() => {
        return ESTIMATOR_SERVICES.find((s) => s.id === estimatorServiceId) || ESTIMATOR_SERVICES[0];
    }, [estimatorServiceId]);
    const [units, setUnits] = useState(activeServiceConfig.defaultUnits);
    const [selectedAddons, setSelectedAddons] = useState([]);

    const handleServiceChange = (id) => {
        setEstimatorServiceId(id);
        const newService = ESTIMATOR_SERVICES.find((s) => s.id === id);
        if (newService) {
            setUnits(newService.defaultUnits);
            setSelectedAddons([]);
        }
    };

    const toggleAddon = (addonId) => {
        setSelectedAddons((prev) => prev.includes(addonId)
            ? prev.filter((id) => id !== addonId)
            : [...prev, addonId]);
    };

    const { lowPrice, highPrice } = useMemo(() => {
        const base = activeServiceConfig.basePrice;
        const unitAddition = (units - activeServiceConfig.minUnits) * activeServiceConfig.unitPrice;
        const availableAddons = ESTIMATOR_ADDONS[estimatorServiceId] || [];
        const addonsTotal = selectedAddons.reduce((sum, addonId) => {
            const match = availableAddons.find((a) => a.id === addonId);
            return sum + (match ? match.price : 0);
        }, 0);
        const rawTotal = base + Math.max(0, unitAddition) + addonsTotal;
        const low = Math.round(rawTotal * 0.95 / 500) * 500;
        const high = Math.round(rawTotal * 1.15 / 500) * 500;
        return { lowPrice: low, highPrice: high };
    }, [activeServiceConfig, units, selectedAddons, estimatorServiceId]);

    const estimatorWhatsAppUrl = useMemo(() => {
        const availableAddons = ESTIMATOR_ADDONS[estimatorServiceId] || [];
        const addonNames = selectedAddons
            .map((id) => availableAddons.find((a) => a.id === id)?.label)
            .filter(Boolean)
            .join(', ');
        const text = `Hi 11 11 Digital Solutions, I configured a custom project estimate:\n\n• Service: ${activeServiceConfig.name}\n• Scale: ${units} ${activeServiceConfig.unitName}\n• Add-ons: ${addonNames || 'None'}\n• Estimated Range: ₹${lowPrice.toLocaleString('en-IN')} - ₹${highPrice.toLocaleString('en-IN')}\n\nI'd like to discuss starting this project with you!`;
        return `https://wa.me/919566498072?text=${encodeURIComponent(text)}`;
    }, [activeServiceConfig, units, selectedAddons, estimatorServiceId, lowPrice, highPrice]);

    return (<>
      <Helmet>
        <title>Pricing & Packages | 11 11 Digital Solutions</title>
        <meta name="description" content="Transparent investment pricing for Website Development, Digital Marketing, and Reels Production. Interactive project cost estimator."/>
      </Helmet>

      <div className="min-h-screen">
        
        {/* 1. HERO SECTION & CATEGORY TABS (Obsidian Dark Stage) */}
        <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-8 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-crimson/20 blur-[160px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                  TRANSPARENT INVESTMENT
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
                Predictable pricing. <br className="hidden sm:inline"/>
                Zero <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">surprises</span>.
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-normal">
                Choose a calibrated tier or calculate a custom scope below. Every package includes direct access to Mohamed Asper and our core engineering team.
              </p>
            </div>

            {/* Category Tabs in Luxury Glass */}
            <div className="w-full max-w-full overflow-x-auto no-scrollbar flex justify-start sm:justify-center px-2 py-1.5">
              <div className="inline-flex p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shrink-0">
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button 
                      key={tab.id} 
                      onClick={() => setActiveTab(tab.id)} 
                      className={cn(
                        'relative px-4 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 select-none shrink-0',
                        isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activePricingTab" 
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-crimson to-magenta shadow-crimson-glow" 
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRICING CARDS GRID (Blush Luxury Stage + Velvet Dark Rose Cards) */}
        <section className="bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white py-16 sm:py-24 border-b border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <AnimatePresence mode="wait">
                {PRICING_PACKAGES[activeTab].map((tier, idx) => {
                  const isPopular = tier.isPopular;
                  return (
                    <motion.div 
                      key={tier.id} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.97 }} 
                      transition={{ duration: 0.4, delay: idx * 0.08 }} 
                      className={cn(
                        'relative rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border text-white',
                        isPopular
                          ? 'border-2 border-crimson shadow-[0_20px_60px_rgba(248,17,90,0.35)] lg:-translate-y-3'
                          : 'border-crimson/25 shadow-[0_20px_50px_rgba(32,10,21,0.35)] hover:border-crimson/50'
                      )}
                    >
                      {/* Popular Flag Badge */}
                      {isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-crimson to-magenta text-white font-bold text-[11px] uppercase tracking-widest shadow-crimson-glow flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-white animate-pulse"/>
                          <span>Most Popular</span>
                        </div>
                      )}

                      <div>
                        {/* Top Meta */}
                        <div className="mb-6">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                            {tier.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/70 leading-relaxed min-h-[40px] font-normal">
                            {tier.tagline}
                          </p>
                        </div>

                        {/* Price Tag */}
                        <div className="mb-8 pb-6 border-b border-white/10">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-sm font-semibold text-crimson">₹</span>
                            <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                              {tier.priceINR.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-white/60">
                              {tier.period}
                            </span>
                          </div>
                          <div className="text-[11px] text-white/50 mt-1 font-mono">
                            Inclusive of milestone reviews &amp; deployment
                          </div>
                        </div>

                        {/* Feature Bullets */}
                        <div className="space-y-3.5 mb-8">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF9BB5] block">
                            Included Deliverables
                          </span>
                          {tier.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                              <div className="w-5 h-5 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center shrink-0 mt-0.5 text-crimson">
                                <Check className="w-3 h-3 text-white"/>
                              </div>
                              <span className="text-white/85 leading-snug font-normal">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom CTA Button */}
                      <div className="pt-4">
                        <Link to={`/contact?package=${tier.id}`} className="w-full block">
                          <Button 
                            variant={isPopular ? 'primary' : 'secondary'} 
                            size="lg" 
                            className={cn('w-full justify-center font-bold', !isPopular && 'bg-white/10 hover:bg-white/15 text-white border-white/20')}
                          >
                            <span>{tier.ctaText}</span>
                            <ArrowRight className="w-4 h-4 ml-2"/>
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE PROJECT ESTIMATOR (Obsidian Dark Stage) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[36px] bg-gradient-to-br from-[#1E0B1A] via-[#150610] to-[#0D050A] border border-crimson/30 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.6)]">
              {/* Ambient Radial background */}
              <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-crimson/15 rounded-full blur-[140px]"/>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/30 text-xs font-mono font-bold tracking-widest text-[#FFA3BD] uppercase mb-3">
                      <Calculator className="w-3.5 h-3.5 text-crimson"/>
                      <span>CUSTOM SCOPE CALCULATOR</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-2">
                      Interactive Project Estimator
                    </h2>
                    <p className="text-xs sm:text-sm text-white/70">
                      Configure your desired scope in real time. We calculate an instant estimate and provide a 1-tap WhatsApp summary for immediate confirmation.
                    </p>
                  </div>

                  {/* Live Calculated Price Range Display */}
                  <div className="rounded-2xl bg-[#0A0709] border border-crimson/40 p-5 shrink-0 text-right md:min-w-[240px] text-white shadow-lg">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF9BB5] block mb-1">
                      ESTIMATED RANGE (INR)
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFA3BD] to-crimson font-mono">
                      ₹{lowPrice.toLocaleString('en-IN')} - ₹{highPrice.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[10px] text-white/50 block mt-1 font-mono">
                      Based on current configuration
                    </span>
                  </div>
                </div>

                {/* Step 1: Service Selection */}
                <div className="mb-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA3BD] block mb-4">
                    Step 1: Choose Primary Service
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {ESTIMATOR_SERVICES.map((srv) => {
                      const isSelected = estimatorServiceId === srv.id;
                      return (
                        <button 
                          key={srv.id} 
                          type="button" 
                          onClick={() => handleServiceChange(srv.id)} 
                          className={cn(
                            'p-4 rounded-2xl text-left border transition-all duration-200 select-none',
                            isSelected
                              ? 'bg-crimson/20 border-crimson text-white font-bold shadow-crimson-glow'
                              : 'bg-white/5 border-white/10 text-white/70 hover:border-crimson/40 hover:text-white'
                          )}
                        >
                          <div className="font-semibold text-sm mb-1">{srv.name}</div>
                          <div className="text-xs font-mono text-[#FFA3BD] font-bold">
                            From ₹{srv.basePrice.toLocaleString('en-IN')}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Scale Slider */}
                <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      Step 2: Project Scale ({activeServiceConfig.unitName})
                    </span>
                    <span className="text-lg font-bold font-mono text-crimson bg-crimson/20 px-3 py-1 rounded-lg border border-crimson/30">
                      {units} {activeServiceConfig.unitName}
                    </span>
                  </div>

                  <input 
                    type="range" 
                    min={activeServiceConfig.minUnits} 
                    max={activeServiceConfig.maxUnits} 
                    value={units} 
                    onChange={(e) => setUnits(Number(e.target.value))} 
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-crimson"
                  />

                  <div className="flex justify-between text-[11px] text-white/50 font-mono mt-2">
                    <span>{activeServiceConfig.minUnits} {activeServiceConfig.unitName}</span>
                    <span>{activeServiceConfig.maxUnits} {activeServiceConfig.unitName}</span>
                  </div>
                </div>

                {/* Step 3: Add-on Checkboxes */}
                <div className="mb-12">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA3BD] block mb-4">
                    Step 3: Select Optional Add-ons
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(ESTIMATOR_ADDONS[estimatorServiceId] || []).map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div 
                          key={addon.id} 
                          onClick={() => toggleAddon(addon.id)} 
                          className={cn(
                            'p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none',
                            isChecked
                              ? 'bg-crimson/20 border-crimson'
                              : 'bg-white/5 border-white/10 hover:border-white/25'
                          )}
                        >
                          <div className={cn(
                            'w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors',
                            isChecked ? 'bg-crimson border-crimson text-white' : 'border-white/30 bg-transparent'
                          )}>
                            {isChecked && <Check className="w-3.5 h-3.5 text-white"/>}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-xs sm:text-sm font-semibold text-white">
                                {addon.label}
                              </span>
                              <span className="text-xs font-mono font-bold text-[#FFA3BD]">
                                +₹{addon.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <p className="text-[11px] text-white/60">{addon.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: WhatsApp Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <ShieldCheck className="w-4 h-4 text-crimson shrink-0"/>
                    <span>No commitment required. We respond on WhatsApp within 15 minutes.</span>
                  </div>

                  <a href={estimatorWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-crimson-glow font-bold">
                      <MessageCircle className="w-4 h-4 mr-2"/>
                      <span>Send this Quote on WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ SECTION (Blush Stage) */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#FAF5F8] via-white to-[#FAF5F8] border-b border-black/[0.06]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson font-bold block mb-3">
                || Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#120E11] mb-4">
                Got questions? We have answers.
              </h2>
              <p className="text-sm sm:text-base text-[#665D63]">
                Everything you need to know about our engagement terms, milestones, and deliverables.
              </p>
            </div>

            <Accordion items={FAQS} allowMultiple={false}/>
          </div>
        </section>

        {/* 5. BESPOKE ENTERPRISE BANNER (High-Impact Velvet Dark Rose Stage) */}
        <section className="py-20 px-6 sm:px-8 bg-gradient-to-br from-[#1C0813] via-[#280B1B] to-[#12050D] text-white border-t border-crimson/25 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFA3BD] block mb-2">
                BESPOKE &amp; ENTERPRISE
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-3">
                Need something completely custom?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                For custom 3D web applications, multi-location brands, or international export catalogs, speak directly with Mohamed Asper.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a href="tel:+919566498072" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200">
                <Phone className="w-4 h-4 text-crimson"/>
                <span>Call +91 95664 98072</span>
              </a>

              <Link to="/contact">
                <Button variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>);
};

export default Pricing;