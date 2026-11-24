import React from 'react';
import { cn } from '@/lib/utils';
export const DeviceMockup = ({ type, imageSrc, alt, className, scrollOnHover = true, }) => {
    if (type === 'phone') {
        return (<div className={cn('relative mx-auto rounded-[38px] p-2 bg-[#2B2B2E] border-2 border-white/20 shadow-2xl overflow-hidden aspect-[9/19.5] max-w-[260px]', className)}>
        {/* Dynamic Island Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10"/>
        </div>

        {/* Screen Container */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-ink">
          <img src={imageSrc} alt={alt} loading="lazy" className={cn('w-full object-cover object-top transition-transform duration-1000 ease-out', scrollOnHover && 'hover:-translate-y-1/3')} style={{ minHeight: '100%' }}/>
        </div>
      </div>);
    }
    // Laptop Mockup (MacBook Pro aesthetic)
    return (<div className={cn('relative mx-auto max-w-[720px] w-full', className)}>
      {/* Screen Frame */}
      <div className="relative rounded-t-[18px] p-2 sm:p-2.5 bg-[#201D21] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
        {/* Camera Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-b-md z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#151515] border border-white/20"/>
        </div>

        {/* Display Inner Screen */}
        <div className="relative aspect-[16/10] w-full rounded-[10px] overflow-hidden bg-ink group/screen">
          <img src={imageSrc} alt={alt} loading="lazy" className={cn('w-full object-cover object-top transition-transform duration-1000 ease-out', scrollOnHover && 'group-hover/screen:-translate-y-1/2')} style={{ minHeight: '100%' }}/>

          {/* Crimson Glass Reflection Sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-crimson/5 via-transparent to-white/5 opacity-60" aria-hidden="true"/>
        </div>
      </div>

      {/* Laptop Base & Notch */}
      <div className="relative h-3.5 sm:h-4 w-[104%] -left-[2%] bg-gradient-to-b from-[#383337] to-[#1F1B1E] rounded-b-[14px] shadow-2xl flex justify-center">
        <div className="w-20 h-1 bg-[#151214] rounded-b-sm"/>
      </div>
    </div>);
};
