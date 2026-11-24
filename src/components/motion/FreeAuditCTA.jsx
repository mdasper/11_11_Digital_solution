import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/data/navigation';
import { IMAGES } from '@/data/images';
export const FreeAuditCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        business: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone)
            return;
        // Format WhatsApp message
        const message = encodeURIComponent(`Hi Mohamed, I would like a free website mockup & audit!\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness: ${formData.business || 'Not specified'}`);
        window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${message}`, '_blank');
        setSubmitted(true);
    };
    return (<section className="relative py-28 sm:py-36 bg-gradient-to-br from-[#FFF0F5] via-white to-[#FAF5F8] overflow-hidden border-t border-black/[0.08]">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none"/>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-4">
              || Zero Obligation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#120E11] leading-tight mb-6">
              Get a free website mockup for your business.{' '}
              <span className="text-gradient font-display font-extrabold">No cost.</span> No pressure.
            </h2>
            <p className="text-text-dark-muted text-base sm:text-lg max-w-xl leading-relaxed">
              Tell us about your brand. We will design a custom high-fidelity homepage hero mockup in Figma and deliver it within 48 hours.
            </p>
          </div>

          {/* Right Lead Capture Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-[0_20px_50px_rgba(18,14,17,0.08)]">
              <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">
                Claim Your Free Mockup
              </h3>
              <p className="text-xs text-text-dark-muted mb-6">
                Direct WhatsApp consultation with founder Mohamed Asper.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-dark-muted mb-1.5">
                    Your Name *
                  </label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-xl bg-[#FAF7F9] border border-black/[0.1] text-[#120E11] placeholder:text-text-dark-muted/50 focus:outline-none focus:border-crimson focus:bg-white text-sm transition-colors"/>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-dark-muted mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 95664 98072" className="w-full px-4 py-3 rounded-xl bg-[#FAF7F9] border border-black/[0.1] text-[#120E11] placeholder:text-text-dark-muted/50 focus:outline-none focus:border-crimson focus:bg-white text-sm transition-colors"/>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-text-dark-muted mb-1.5">
                    Business Name / Industry
                  </label>
                  <input type="text" value={formData.business} onChange={(e) => setFormData({ ...formData, business: e.target.value })} placeholder="e.g. Specialty Export / Clinic" className="w-full px-4 py-3 rounded-xl bg-[#FAF7F9] border border-black/[0.1] text-[#120E11] placeholder:text-text-dark-muted/50 focus:outline-none focus:border-crimson focus:bg-white text-sm transition-colors"/>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center mt-4 text-xs uppercase tracking-widest font-black shadow-[0_8px_25px_rgba(248,17,90,0.3)]">
                  {submitted ? (<span className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-4 h-4 text-white"/> Request Sent!
                    </span>) : (<span className="flex items-center gap-2">
                      <Send className="w-4 h-4"/> Send On WhatsApp
                    </span>)}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
