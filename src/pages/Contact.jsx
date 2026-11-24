import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Clock, ShieldCheck, Send, CheckCircle2, Sparkles, ArrowRight, ExternalLink, RotateCcw, } from 'lucide-react';
import { ABOUT_DATA } from '@/data/about';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
const SERVICE_OPTIONS = [
    'Website Development',
    'Digital Marketing & Ads',
    'Reels Production',
    'Video Editing',
    'Full-Stack Flagship Suite',
];
const BUDGET_OPTIONS = [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+',
];
const TIMELINE_OPTIONS = [
    'Urgent (< 1 week)',
    'Standard (2 - 3 weeks)',
    'Flexible (1 month+)',
];
const Contact = () => {
    const [searchParams] = useSearchParams();
    const packageParam = searchParams.get('package');
    // Find prefilled package info if provided
    const prefilledPackage = useMemo(() => {
        if (!packageParam)
            return null;
        for (const cat of Object.values(PRICING_PACKAGES)) {
            const match = cat.find((p) => p.id === packageParam);
            if (match)
                return match;
        }
        return null;
    }, [packageParam]);
    // Form state
    const [fullName, setFullName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState(() => {
        if (prefilledPackage) {
            if (prefilledPackage.category === 'websites')
                return 'Website Development';
            if (prefilledPackage.category === 'marketing')
                return 'Digital Marketing & Ads';
            if (prefilledPackage.category === 'reels')
                return 'Reels Production';
        }
        return 'Website Development';
    });
    const [budget, setBudget] = useState('₹25,000 - ₹50,000');
    const [timeline, setTimeline] = useState('Standard (2 - 3 weeks)');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        if (prefilledPackage) {
            setMessage(`Interested in the ${prefilledPackage.name} package (₹${prefilledPackage.priceINR.toLocaleString('en-IN')}).`);
        }
    }, [prefilledPackage]);
    // Format WhatsApp Link
    const buildWhatsAppUrl = () => {
        const lines = [
            `*New Project Inquiry for 11 11 Digital Solutions*`,
            `━━━━━━━━━━━━━━━━━━━━━━`,
            `*Client:* ${fullName}`,
            `*Brand / Company:* ${companyName}`,
            `*Phone:* ${phone}`,
            `*Email:* ${email}`,
            `*Service Required:* ${service}`,
            `*Budget Range:* ${budget}`,
            `*Timeline:* ${timeline}`,
            prefilledPackage ? `*Selected Tier:* ${prefilledPackage.name} (₹${prefilledPackage.priceINR.toLocaleString('en-IN')})` : null,
            message ? `*Project Brief:*\n${message}` : null,
            `━━━━━━━━━━━━━━━━━━━━━━`,
            `Sent via 11 11 Digital Solutions Portal`,
        ].filter(Boolean);
        const text = lines.join('\n');
        return `https://wa.me/919566498072?text=${encodeURIComponent(text)}`;
    };
    const validate = () => {
        const errors = {};
        if (!fullName.trim())
            errors.fullName = 'Please provide your full name.';
        if (!companyName.trim())
            errors.companyName = 'Please provide your company or brand name.';
        if (!phone.trim())
            errors.phone = 'Please provide a valid contact number.';
        if (!email.trim() || !email.includes('@'))
            errors.email = 'Please provide a valid email address.';
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        setIsSubmitted(true);
        // Open formatted WhatsApp link in new tab
        const url = buildWhatsAppUrl();
        window.open(url, '_blank');
    };
    return (<>
      <Helmet>
        <title>Contact Mohamed Asper | 11 11 Digital Solutions</title>
        <meta name="description" content="Initiate your flagship project with Mohamed Asper, Founder & Creative Lead at 11 11 Digital Solutions. Guaranteed 2-hour response."/>
      </Helmet>

      <div className="min-h-screen">
        {/* 1. HERO SECTION (Obsidian Dark Stage) */}
        <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-8 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-crimson/20 blur-[160px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                  START A PROJECT
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
                Let’s build something <br className="hidden sm:inline"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">flagship</span> together.
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal">
                Tell us about your brand goals. Whether you need a high-conversion website, high-impact marketing system, or cinematic video production, we respond within 2 hours.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SPLIT CONTENT GRID (Blush Luxury Stage + Velvet Founder Card) */}
        <section className="bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white py-16 sm:py-24 border-b border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Founder & Studio Details in Velvet Dark Rose */}
              <div className="lg:col-span-5 space-y-8">
                {/* Founder Profile Card */}
                <div className="rounded-[32px] p-8 sm:p-9 bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(32,10,21,0.35)]">
                  <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-crimson/15 rounded-full blur-2xl"/>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-crimson via-magenta to-burgundy p-0.5 shadow-lg shrink-0">
                      <div className="w-full h-full rounded-full bg-[#15060E] border border-crimson/40 flex items-center justify-center font-bold text-xl text-white font-display">
                        MA
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-white">
                        {ABOUT_DATA.founder.name}
                      </h2>
                      <p className="text-xs uppercase tracking-wider text-[#FF9BB5] font-mono font-bold">
                        {ABOUT_DATA.founder.role}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-white/70 mt-1 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
                        <span>Available for New Projects</span>
                      </span>
                    </div>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <a href="tel:+919566498072" className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-crimson/50 transition-all duration-200 group text-xs sm:text-sm text-white">
                      <div className="w-9 h-9 rounded-xl bg-crimson/20 border border-crimson/30 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors text-[#FFA3BD]">
                        <Phone className="w-4 h-4"/>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/50 font-mono">
                          Direct Phone / Call
                        </span>
                        <span className="font-semibold text-white group-hover:text-[#FFA3BD] transition-colors">
                          +91 95664 98072
                        </span>
                      </div>
                    </a>

                    <a href="https://wa.me/919566498072?text=Hi%20Mohamed%20Asper%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%2011%2011%20Digital%20Solutions." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-crimson/50 transition-all duration-200 group text-xs sm:text-sm text-white">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors text-[#25D366]">
                        <MessageCircle className="w-4 h-4"/>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/50 font-mono">
                          WhatsApp Instant Chat
                        </span>
                        <span className="font-semibold text-white group-hover:text-[#25D366] transition-colors">
                          +91 95664 98072
                        </span>
                      </div>
                    </a>

                    <a href="mailto:asper.mohamed22@gmail.com" className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-crimson/50 transition-all duration-200 group text-xs sm:text-sm text-white">
                      <div className="w-9 h-9 rounded-xl bg-crimson/20 border border-crimson/30 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors text-[#FFA3BD]">
                        <Mail className="w-4 h-4"/>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/50 font-mono">
                          Email Inquiry
                        </span>
                        <span className="font-semibold text-white group-hover:text-[#FFA3BD] transition-colors">
                          asper.mohamed22@gmail.com
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Studio Location Badge */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/60 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-crimson shrink-0"/>
                    <span>Tamil Nadu, India (IST Timezone)</span>
                  </div>
                </div>

                {/* Response Commitment & Guarantees */}
                <div className="rounded-[28px] p-6 sm:p-7 bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 text-white shadow-sm space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-crimson shrink-0"/>
                    <span>2-Hour Guaranteed Response Commitment</span>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-white/75 font-normal">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0"/>
                      <span>Direct engineering with Mohamed Asper (zero junior delegation)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0"/>
                      <span>Fixed pricing with guaranteed delivery timelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0"/>
                      <span>100% intellectual property ownership from Day 1</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Right Column: Project Brief Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] sm:rounded-[36px] bg-white border border-black/[0.08] p-8 sm:p-12 shadow-[0_20px_60px_rgba(18,14,17,0.06)] relative">
                {/* Optional Prefill Banner */}
                {prefilledPackage && (<div className="mb-8 p-4 rounded-2xl bg-crimson/10 border border-crimson/30 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#120E11]">
                      <Sparkles className="w-4 h-4 text-crimson shrink-0"/>
                      <span>
                        Selected Package:{' '}
                        <strong>{prefilledPackage.name}</strong> (₹{prefilledPackage.priceINR.toLocaleString('en-IN')})
                      </span>
                    </div>
                    <Link to="/contact" className="text-xs text-crimson hover:underline shrink-0">
                      Clear
                    </Link>
                  </div>)}

                <AnimatePresence mode="wait">
                  {isSubmitted ? (<motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson text-crimson flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(248,17,90,0.5)]">
                        <CheckCircle2 className="w-8 h-8"/>
                      </div>

                      <div className="space-y-2 max-w-md mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#120E11]">
                          Brief Successfully Generated!
                        </h3>
                        <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed">
                          Your project details have been formatted and your WhatsApp chat with Mohamed Asper is open. If it did not open automatically, click the button below:
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <Button variant="primary" size="lg" className="w-full sm:w-auto">
                            <MessageCircle className="w-4 h-4 mr-2"/>
                            <span>Re-open WhatsApp</span>
                            <ExternalLink className="w-4 h-4 ml-2"/>
                          </Button>
                        </a>

                        <button type="button" onClick={() => {
                setIsSubmitted(false);
                setFullName('');
                setCompanyName('');
                setPhone('');
                setEmail('');
                setMessage('');
            }} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-text-dark-muted hover:text-[#120E11] bg-[#FAF7F9] border border-black/[0.08] hover:border-black/20 shadow-sm transition-all duration-200">
                          <RotateCcw className="w-3.5 h-3.5"/>
                          <span>Submit Another Inquiry</span>
                        </button>
                      </div>
                    </motion.div>) : (<motion.form key="form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                            Your Name *
                          </label>
                          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Rahul Sharma" className={cn('w-full px-4 py-3.5 rounded-xl bg-[#FAF7F9] border text-[#120E11] text-sm focus:outline-none transition-colors duration-200 placeholder:text-text-dark-muted/50 focus:bg-white', formErrors.fullName
                ? 'border-red-500 focus:border-red-500'
                : 'border-black/[0.1] focus:border-crimson focus:ring-1 focus:ring-crimson')}/>
                          {formErrors.fullName && (<span className="text-[11px] text-red-500 mt-1 block">
                              {formErrors.fullName}
                            </span>)}
                        </div>

                        {/* Company / Brand Name */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                            Brand / Business Name *
                          </label>
                          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="e.g. Apex Apparel Co." className={cn('w-full px-4 py-3.5 rounded-xl bg-[#FAF7F9] border text-[#120E11] text-sm focus:outline-none transition-colors duration-200 placeholder:text-text-dark-muted/50 focus:bg-white', formErrors.companyName
                ? 'border-red-500 focus:border-red-500'
                : 'border-black/[0.1] focus:border-crimson focus:ring-1 focus:ring-crimson')}/>
                          {formErrors.companyName && (<span className="text-[11px] text-red-500 mt-1 block">
                              {formErrors.companyName}
                            </span>)}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                            WhatsApp / Phone Number *
                          </label>
                          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className={cn('w-full px-4 py-3.5 rounded-xl bg-[#FAF7F9] border text-[#120E11] text-sm focus:outline-none transition-colors duration-200 placeholder:text-text-dark-muted/50 focus:bg-white', formErrors.phone
                ? 'border-red-500 focus:border-red-500'
                : 'border-black/[0.1] focus:border-crimson focus:ring-1 focus:ring-crimson')}/>
                          {formErrors.phone && (<span className="text-[11px] text-red-500 mt-1 block">
                              {formErrors.phone}
                            </span>)}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                            Work Email *
                          </label>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahul@company.com" className={cn('w-full px-4 py-3.5 rounded-xl bg-[#FAF7F9] border text-[#120E11] text-sm focus:outline-none transition-colors duration-200 placeholder:text-text-dark-muted/50 focus:bg-white', formErrors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-black/[0.1] focus:border-crimson focus:ring-1 focus:ring-crimson')}/>
                          {formErrors.email && (<span className="text-[11px] text-red-500 mt-1 block">
                              {formErrors.email}
                            </span>)}
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                          Primary Service Required
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {SERVICE_OPTIONS.map((opt) => {
                const isSelected = service === opt;
                return (<button key={opt} type="button" onClick={() => setService(opt)} className={cn('px-3.5 py-2.5 rounded-xl text-xs font-medium text-left border transition-all duration-200', isSelected
                        ? 'bg-crimson/10 border-crimson text-crimson font-bold shadow-sm'
                        : 'bg-[#FAF7F9] border-black/[0.08] text-text-dark-muted hover:border-black/20 hover:text-[#120E11]')}>
                                {opt}
                              </button>);
            })}
                        </div>
                      </div>

                      {/* Budget Selection */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                          Estimated Budget (INR)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {BUDGET_OPTIONS.map((opt) => {
                const isSelected = budget === opt;
                return (<button key={opt} type="button" onClick={() => setBudget(opt)} className={cn('px-3 py-2 rounded-xl text-xs font-medium text-center border transition-all duration-200', isSelected
                        ? 'bg-crimson/10 border-crimson text-crimson font-bold shadow-sm'
                        : 'bg-[#FAF7F9] border-black/[0.08] text-text-dark-muted hover:border-black/20 hover:text-[#120E11]')}>
                                {opt}
                              </button>);
            })}
                        </div>
                      </div>

                      {/* Timeline Selection */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                          Desired Timeline
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {TIMELINE_OPTIONS.map((opt) => {
                const isSelected = timeline === opt;
                return (<button key={opt} type="button" onClick={() => setTimeline(opt)} className={cn('px-3 py-2 rounded-xl text-xs font-medium text-center border transition-all duration-200', isSelected
                        ? 'bg-crimson/10 border-crimson text-crimson font-bold shadow-sm'
                        : 'bg-[#FAF7F9] border-black/[0.08] text-text-dark-muted hover:border-black/20 hover:text-[#120E11]')}>
                                {opt}
                              </button>);
            })}
                        </div>
                      </div>

                      {/* Project Message / Goals */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-dark-muted mb-2">
                          Project Brief &amp; Goals
                        </label>
                        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your brand, current challenges, inspiration links, or key deliverables..." className="w-full px-4 py-3 rounded-xl bg-[#FAF7F9] border border-black/[0.1] focus:border-crimson focus:ring-1 focus:ring-crimson text-[#120E11] text-sm focus:outline-none transition-colors duration-200 placeholder:text-text-dark-muted/50 focus:bg-white resize-y"/>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button variant="primary" size="lg" type="submit" className="w-full justify-center group">
                          <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1"/>
                          <span>Initiate Project Brief on WhatsApp</span>
                          <ArrowRight className="w-4 h-4 ml-2"/>
                        </Button>

                        <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-text-dark-muted">
                          <ShieldCheck className="w-3.5 h-3.5 text-crimson"/>
                          <span>Strict privacy. Your details are never shared with third parties.</span>
                        </div>
                      </div>
                    </motion.form>)}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>);
};
export default Contact;
