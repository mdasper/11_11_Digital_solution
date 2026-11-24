import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CompanyLogoCard = ({ project }) => {
  // Render bespoke vector brand emblems for each flagship partner
  const renderEmblem = () => {
    switch (project.id) {
      case 'jb-healthcare':
        return (
          <div className="relative flex flex-col items-center">
            {/* Medical Heartbeat + Cross Vector */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#FF1A63]/20 via-[#FF4081]/30 to-crimson/20 border border-crimson/40 p-1 flex items-center justify-center shadow-[0_0_40px_rgba(248,17,90,0.35)] group-hover/logo:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-crimson fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                {/* Cross shape */}
                <path d="M24 8h16v16h16v16H40v16H24V40H8V24h16V8z" className="stroke-crimson fill-crimson/15" />
                {/* Heartbeat pulse line */}
                <path d="M14 32h10l4-8 8 16 6-10 4 2h10" className="stroke-white stroke-[3] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </svg>
            </div>
            {/* Brand Title */}
            <div className="mt-5 text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white group-hover/logo:text-[#FFA3BD] transition-colors">
                JB HEALTHCARE
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF9BB5] mt-1 font-bold">
                MULTISPECIALITY HOSPITAL · SIVAKASI
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono mt-3">
                <ShieldCheck className="w-3 h-3" />
                <span>24/7 EMERGENCY &amp; DIGITAL PORTAL</span>
              </div>
            </div>
          </div>
        );

      case 'highland-origin':
        return (
          <div className="relative flex flex-col items-center">
            {/* Terroir Mountain + Coffee Emblem */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#C2104A]/25 via-crimson/25 to-[#FF7096]/20 border border-crimson/40 p-1 flex items-center justify-center shadow-[0_0_40px_rgba(194,16,74,0.35)] group-hover/logo:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-white fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                {/* Mountain Peaks */}
                <path d="M8 48L24 20l12 20 8-14 12 22H8z" className="stroke-crimson fill-crimson/15" />
                {/* Coffee Bean Contour */}
                <ellipse cx="32" cy="30" rx="9" ry="13" className="stroke-[#FFA3BD] stroke-[2] fill-transparent" />
                <path d="M32 18c-3 4-3 10 0 14s3 8 0 12" className="stroke-white stroke-[2]" />
              </svg>
            </div>
            {/* Brand Title */}
            <div className="mt-5 text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white group-hover/logo:text-[#FFA3BD] transition-colors">
                HIGHLAND ORIGIN
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF9BB5] mt-1 font-bold">
                SPECIALTY COFFEE CO. · TERROIR EXPORTS
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono mt-3">
                <Award className="w-3 h-3" />
                <span>ORGANIC GRADE AA · 12 IMPORTING NATIONS</span>
              </div>
            </div>
          </div>
        );

      case 'fazil-garments':
        return (
          <div className="relative flex flex-col items-center">
            {/* Precision Textile Weave & Spool Emblem */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-[#7A0A2E]/30 via-crimson/25 to-[#FF2D6C]/20 border border-crimson/40 p-1 flex items-center justify-center shadow-[0_0_40px_rgba(248,17,90,0.35)] group-hover/logo:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-white fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                {/* Geometric Interlocking Weave */}
                <rect x="14" y="14" width="36" height="36" rx="6" className="stroke-crimson stroke-[2.5] fill-crimson/15" />
                <path d="M22 14v36M32 14v36M42 14v36M14 22h36M14 32h36M14 42h36" className="stroke-white/80 stroke-[2]" />
                <circle cx="32" cy="32" r="6" className="stroke-crimson fill-crimson drop-shadow-[0_0_8px_rgba(248,17,90,0.8)]" />
              </svg>
            </div>
            {/* Brand Title */}
            <div className="mt-5 text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white group-hover/logo:text-[#FFA3BD] transition-colors">
                FAZIL GARMENTS
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF9BB5] mt-1 font-bold">
                HIGH-VOLUME APPAREL EXPORTS
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[10px] font-mono mt-3">
                <ShieldCheck className="w-3 h-3" />
                <span>SEDEX &amp; GOTS CERTIFIED FACTORY</span>
              </div>
            </div>
          </div>
        );

      case 'snapit-studio':
      default:
        return (
          <div className="relative flex flex-col items-center">
            {/* Cinema Aperture Lens Emblem */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-crimson/30 via-magenta/25 to-[#FF5E8E]/20 border border-crimson/40 p-1 flex items-center justify-center shadow-[0_0_40px_rgba(248,17,90,0.35)] group-hover/logo:scale-105 transition-transform duration-500">
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-white fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                {/* Circular Lens */}
                <circle cx="32" cy="32" r="22" className="stroke-crimson stroke-[2.5] fill-crimson/15" />
                {/* Aperture blades */}
                <path d="M32 10l16 14M48 24v20M48 44L28 52M28 52l-14-16M14 36V16M14 16l22-6" className="stroke-white stroke-[2]" />
                <circle cx="32" cy="32" r="5" className="fill-crimson stroke-crimson drop-shadow-[0_0_10px_rgba(248,17,90,1)]" />
              </svg>
            </div>
            {/* Brand Title */}
            <div className="mt-5 text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white group-hover/logo:text-[#FFA3BD] transition-colors">
                SNAPIT STUDIO
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF9BB5] mt-1 font-bold">
                COMMERCIAL FILM &amp; PHOTOGRAPHY
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-mono mt-3">
                <Sparkles className="w-3 h-3" />
                <span>CINEMA 4K PRODUCTION · 2.5M+ VIEWS</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[360px] rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1A0713]/90 via-[#260B1C]/80 to-[#12050E]/90 border border-crimson/30 hover:border-crimson/60 p-8 sm:p-12 flex flex-col items-center justify-between relative overflow-hidden group/logo shadow-2xl transition-all duration-500">
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-crimson/20 rounded-full blur-[80px] group-hover/logo:bg-crimson/30 transition-all duration-500" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 bg-magenta/15 rounded-full blur-[80px]" />
      
      {/* Subtle Grid Accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(248,17,90,0.08)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      {/* Top Status Seal */}
      <div className="w-full flex items-center justify-between relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-white/80">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span>VERIFIED FLAGSHIP CLIENT</span>
        </div>
        <span className="text-xs font-mono text-white/50">{project.year}</span>
      </div>

      {/* Center Brand Identity Emblem */}
      <div className="my-auto py-6 relative z-10">
        {renderEmblem()}
      </div>

      {/* Bottom Footer Row with Live Link indicator */}
      <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 relative z-10">
        <span className="font-mono text-[11px] tracking-wider uppercase text-white/40">
          Engineering by 11 11
        </span>
        <span className="inline-flex items-center gap-1 text-crimson group-hover/logo:text-[#FFA3BD] font-semibold transition-colors">
          <span>Explore Architecture</span>
          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
        </span>
      </div>
    </div>
  );
};
