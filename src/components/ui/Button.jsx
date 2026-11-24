import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
export const Button = ({ variant = 'primary', size = 'md', to, href, icon = true, children, className, ...props }) => {
    const btnRef = useRef(null);
    const sizeClasses = {
        sm: 'px-4 py-2 text-xs font-semibold tracking-wide',
        md: 'px-6 py-3.5 text-sm font-semibold tracking-wide',
        lg: 'px-8 py-4 text-base font-bold tracking-wide',
    };
    const baseClasses = cn('group relative inline-flex items-center justify-center gap-2 rounded-full font-body transition-all duration-300 ease-out select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 active:scale-[0.97]', sizeClasses[size], variant === 'primary' &&
        'bg-crimson-grad text-white shadow-crimson-glow hover:shadow-crimson-glow-lg hover:-translate-y-0.5', variant === 'secondary' &&
        'bg-white/80 border border-black/15 text-[#120E11] hover:border-crimson hover:text-crimson hover:bg-crimson/[0.04] shadow-sm backdrop-blur-sm', variant === 'ghost' &&
        'bg-transparent text-[#120E11] hover:text-crimson hover:bg-black/5', className);
    const content = (<>
      {/* Primary Shine Sweep on hover */}
      {variant === 'primary' && (<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" aria-hidden="true"/>)}
      <span className="relative z-10 font-medium tracking-wide flex items-center gap-2">
        {children}
        {icon && (<ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"/>)}
      </span>
    </>);
    if (to) {
        return (<Link to={to} className={baseClasses}>
        {content}
      </Link>);
    }
    if (href) {
        return (<a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>);
    }
    return (<button ref={btnRef} className={baseClasses} {...props}>
      {content}
    </button>);
};
