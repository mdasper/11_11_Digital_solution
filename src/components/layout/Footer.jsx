import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import logoImg from '@/assets/logo-clean.png';
import { MAIN_NAV_ITEMS, SERVICES_MEGA_MENU } from '@/data/navigation';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const directWhatsAppUrl = `https://wa.me/919566498072?text=${encodeURIComponent('Hi Mohamed, I would like to discuss a project with 11 11 Digital Solutions.')}`;
    const instagramUrl = 'https://www.instagram.com/1111digitalsolutions';

    return (
        <footer className="relative bg-[#0A0709] text-white border-t border-white/[0.06] overflow-hidden">

            {/* Subtle top crimson line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

            {/* Main Content: Full-Width Edge-to-Edge with Generous Side Padding */}
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">

                {/* Top Row: Logo + Nav + Socials — single clean row */}
                <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

                    {/* Left: Logo + One-liner */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link to="/" className="inline-block mb-4 group">
                            <img
                                src={logoImg}
                                alt="11 11 Digital Solutions"
                                className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(248,17,90,0.25)]"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            Custom websites, marketing funnels, and cinema-grade reels for businesses that want to stand out.
                        </p>

                        {/* Social icons row */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href={directWhatsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 flex items-center justify-center text-white/60 hover:text-[#25D366] transition-all duration-300"
                            >
                                <WhatsAppIcon className="w-4.5 h-4.5 fill-current" />
                            </a>
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-white/60 hover:text-pink-400 transition-all duration-300"
                            >
                                <InstagramIcon className="w-4.5 h-4.5" />
                            </a>
                        </div>
                    </div>

                    {/* Middle: Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 font-bold mb-5">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            {SERVICES_MEGA_MENU.map((srv) => (
                                <li key={srv.href}>
                                    <Link to={srv.href} className="hover:text-white transition-colors duration-200">
                                        {srv.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle: Pages */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 font-bold mb-5">
                            Pages
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            {MAIN_NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link to={item.href} className="hover:text-white transition-colors duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 font-bold mb-5">
                            Get in Touch
                        </h4>
                        <div className="space-y-3 text-sm text-white/60">
                            <a href="tel:+919566498072" className="block hover:text-white transition-colors">
                                +91 95664 98072
                            </a>
                            <a href="mailto:asper.mohamed22@gmail.com" className="block hover:text-white transition-colors">
                                asper.mohamed22@gmail.com
                            </a>
                            <p className="text-white/40">Tamil Nadu, India</p>
                        </div>

                        {/* CTA */}
                        <a
                            href={directWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-crimson/15 hover:bg-crimson/25 border border-crimson/30 hover:border-crimson/60 text-crimson text-xs font-bold uppercase tracking-wider transition-all duration-300 group"
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bottom divider */}
                <div className="h-[1px] bg-white/[0.06]" />

                {/* Bottom Bar: Copyright + Back to Top */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/35 font-mono">
                        © 2026 11 11 Digital Solutions. All rights reserved.
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                        aria-label="Back to top"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
