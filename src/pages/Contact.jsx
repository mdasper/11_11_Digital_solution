import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Clock, ShieldCheck, Send, CheckCircle2, Sparkles, ArrowRight, ExternalLink, RotateCcw, } from 'lucide-react';
import { ABOUT_DATA } from '@/data/about';
import { PRICING_PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { WordStream } from '@/components/motion/WordStream';
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

              <WordStream
                as="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
              >
                Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">flagship</span> together.
              </WordStream>

              <WordStream
                as="p"
                className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-normal"
              >
                Tell us about your brand goals. Whether you need a high-conversion website, high-impact marketing system, or cinematic video production, we respond within 2 hours.
              </WordStream>
            </div>
          </div>
        </section>

        {/* 2. DIRECT CONNECT & FULL-WIDTH PROJECT INQUIRY FORM */}
        <section className="bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white py-16 sm:py-24 border-b border-black/[0.06]">
          <div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
            
            {/* Top Full-Width Contact Channels Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {/* Direct Call */}
              <a
                href="tel:+919566498072"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 hover:border-crimson/50 text-white shadow-sm hover:shadow-crimson-glow hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-crimson/20 border border-crimson/30 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors text-[#FFA3BD]">
                  <Phone className="w-5 h-5"/>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    Direct Phone / Call
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#FFA3BD] transition-colors">
                    +91 95664 98072
                  </span>
                </div>
              </a>

              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/919566498072?text=Hi%20Mohamed%20Asper%2C%20I%20would%20like%20to%20discuss%20a%20new%20project%20with%2011%2011%20Digital%20Solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 hover:border-[#25D366]/50 text-white shadow-sm hover:shadow-[0_0_25px_rgba(37,211,102,0.25)] hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors text-[#25D366]">
                  <MessageCircle className="w-5 h-5"/>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    WhatsApp Instant Chat
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                    +91 95664 98072
                  </span>
                </div>
              </a>

              {/* Email Inquiry */}
              <a
                href="mailto:asper.mohamed22@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 hover:border-crimson/50 text-white shadow-sm hover:shadow-crimson-glow hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-crimson/20 border border-crimson/30 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors text-[#FFA3BD]">
                  <Mail className="w-5 h-5"/>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50 font-mono font-bold">
                    Email Inquiry
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#FFA3BD] transition-colors truncate block">
                    asper.mohamed22@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Full-Width Project Brief Form Card */}
            <div className="w-full rounded-[36px] bg-gradient-to-br from-[#1E0817] via-[#2A0D20] to-[#14050F] border border-crimson/30 p-8 sm:p-14 lg:p-16 text-white shadow-[0_24px_70px_rgba(32,10,21,0.45)] relative overflow-hidden">
              {/* Ambient radial lights */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-crimson/20 rounded-full blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-magenta/15 rounded-full blur-[100px]" />

              <div className="relative z-10">
                {/* Header inside Form Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/10 gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFA3BD] block mb-2">
                      || DIRECT INQUIRY BRIEF
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                      Project Specifications
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white/90">
                      Mohamed Asper · Available for New Projects
                    </span>
                  </div>
                </div>

                {/* Optional Prefill Banner */}
                {prefilledPackage && (
                  <div className="mb-8 p-4 rounded-2xl bg-crimson/20 border border-crimson/35 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                      <Sparkles className="w-4 h-4 text-crimson shrink-0 animate-pulse"/>
                      <span>
                        Selected Package:{' '}
                        <strong className="text-[#FFA3BD]">{prefilledPackage.name}</strong> (₹{prefilledPackage.priceINR.toLocaleString('en-IN')})
                      </span>
                    </div>
                    <Link to="/contact" className="text-xs text-crimson hover:text-[#FFA3BD] underline shrink-0 font-bold">
                      Clear
                    </Link>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-crimson/20 border border-crimson text-crimson flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(248,17,90,0.5)]">
                        <CheckCircle2 className="w-8 h-8 text-white"/>
                      </div>

                      <div className="space-y-2 max-w-md mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                          Brief Successfully Formatted!
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                          Your project details have been formatted and your WhatsApp chat with Mohamed Asper is open. If it did not open automatically, click the button below:
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-crimson-glow font-bold">
                            <MessageCircle className="w-4 h-4 mr-2"/>
                            <span>Re-open WhatsApp</span>
                            <ExternalLink className="w-4 h-4 ml-2"/>
                          </Button>
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFullName('');
                            setCompanyName('');
                            setPhone('');
                            setEmail('');
                            setMessage('');
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-white/80 hover:text-white bg-white/10 border border-white/15 hover:border-white/30 transition-all duration-200"
                        >
                          <RotateCcw className="w-3.5 h-3.5"/>
                          <span>Submit Another Inquiry</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-8" noValidate>
                      {/* Section 1: Contact Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-2.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rahul Sharma"
                            className={cn(
                              'w-full px-5 py-4 rounded-2xl bg-white/[0.06] border text-white text-sm focus:outline-none transition-all duration-200 placeholder:text-white/30 focus:bg-white/[0.1]',
                              formErrors.fullName
                                ? 'border-crimson ring-1 ring-crimson'
                                : 'border-white/15 focus:border-crimson focus:ring-1 focus:ring-crimson'
                            )}
                          />
                          {formErrors.fullName && (
                            <span className="text-[11px] text-crimson font-medium mt-1.5 block">
                              {formErrors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Company / Brand Name */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-2.5">
                            Brand / Business Name *
                          </label>
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Apex Apparel Co."
                            className={cn(
                              'w-full px-5 py-4 rounded-2xl bg-white/[0.06] border text-white text-sm focus:outline-none transition-all duration-200 placeholder:text-white/30 focus:bg-white/[0.1]',
                              formErrors.companyName
                                ? 'border-crimson ring-1 ring-crimson'
                                : 'border-white/15 focus:border-crimson focus:ring-1 focus:ring-crimson'
                            )}
                          />
                          {formErrors.companyName && (
                            <span className="text-[11px] text-crimson font-medium mt-1.5 block">
                              {formErrors.companyName}
                            </span>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-2.5">
                            WhatsApp / Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className={cn(
                              'w-full px-5 py-4 rounded-2xl bg-white/[0.06] border text-white text-sm focus:outline-none transition-all duration-200 placeholder:text-white/30 focus:bg-white/[0.1]',
                              formErrors.phone
                                ? 'border-crimson ring-1 ring-crimson'
                                : 'border-white/15 focus:border-crimson focus:ring-1 focus:ring-crimson'
                            )}
                          />
                          {formErrors.phone && (
                            <span className="text-[11px] text-crimson font-medium mt-1.5 block">
                              {formErrors.phone}
                            </span>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-2.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="rahul@company.com"
                            className={cn(
                              'w-full px-5 py-4 rounded-2xl bg-white/[0.06] border text-white text-sm focus:outline-none transition-all duration-200 placeholder:text-white/30 focus:bg-white/[0.1]',
                              formErrors.email
                                ? 'border-crimson ring-1 ring-crimson'
                                : 'border-white/15 focus:border-crimson focus:ring-1 focus:ring-crimson'
                            )}
                          />
                          {formErrors.email && (
                            <span className="text-[11px] text-crimson font-medium mt-1.5 block">
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Section 2: Service Selection */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-3">
                          Primary Service Required
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                          {SERVICE_OPTIONS.map((opt) => {
                            const isSelected = service === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setService(opt)}
                                className={cn(
                                  'p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm font-semibold text-center border transition-all duration-200 flex items-center justify-center min-h-[52px]',
                                  isSelected
                                    ? 'bg-gradient-to-r from-crimson to-magenta text-white font-bold border-transparent shadow-crimson-glow'
                                    : 'bg-white/[0.05] border-white/15 text-white/75 hover:border-white/35 hover:text-white'
                                )}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Section 3: Budget Selection */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-3">
                          Estimated Budget (INR)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {BUDGET_OPTIONS.map((opt) => {
                            const isSelected = budget === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setBudget(opt)}
                                className={cn(
                                  'p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-center border transition-all duration-200 flex items-center justify-center min-h-[48px]',
                                  isSelected
                                    ? 'bg-gradient-to-r from-crimson to-magenta text-white font-bold border-transparent shadow-crimson-glow'
                                    : 'bg-white/[0.05] border-white/15 text-white/75 hover:border-white/35 hover:text-white'
                                )}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Section 4: Timeline Selection */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-3">
                          Desired Timeline
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {TIMELINE_OPTIONS.map((opt) => {
                            const isSelected = timeline === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setTimeline(opt)}
                                className={cn(
                                  'p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-center border transition-all duration-200 flex items-center justify-center min-h-[48px]',
                                  isSelected
                                    ? 'bg-gradient-to-r from-crimson to-magenta text-white font-bold border-transparent shadow-crimson-glow'
                                    : 'bg-white/[0.05] border-white/15 text-white/75 hover:border-white/35 hover:text-white'
                                )}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Section 5: Project Brief / Goals */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white/70 mb-3">
                          Project Brief &amp; Goals
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your brand, current challenges, inspiration links, or key deliverables..."
                          className="w-full px-5 py-4 rounded-2xl bg-white/[0.06] border border-white/15 focus:border-crimson focus:ring-1 focus:ring-crimson text-white text-sm focus:outline-none transition-all placeholder:text-white/30 resize-y"
                        />
                      </div>

                      {/* Section 6: Submit Button */}
                      <div className="pt-2">
                        <Button
                          variant="primary"
                          size="lg"
                          type="submit"
                          className="w-full py-4 sm:py-5 justify-center shadow-crimson-glow-lg text-sm sm:text-base font-bold bg-gradient-to-r from-crimson to-magenta hover:brightness-110 active:scale-[0.99] transition-all rounded-2xl group"
                        >
                          <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1"/>
                          <span>Initiate Project Brief on WhatsApp</span>
                          <ArrowRight className="w-4 h-4 ml-2"/>
                        </Button>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/60 font-mono">
                          <ShieldCheck className="w-3.5 h-3.5 text-crimson"/>
                          <span>Strict privacy. Direct consultation with Mohamed Asper. Zero junior delegation.</span>
                        </div>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>);
};
export default Contact;
