import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
export const Accordion = ({ items, allowMultiple = false, className, }) => {
    const [openIds, setOpenIds] = useState([]);
    const toggleItem = (id) => {
        if (allowMultiple) {
            setOpenIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
        }
        else {
            setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
        }
    };
    return (<div className={cn('space-y-4 w-full', className)}>
      {items.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (<div key={item.id} className="rounded-2xl bg-white border border-black/[0.08] shadow-sm overflow-hidden transition-colors duration-200 hover:border-crimson/40">
            <button type="button" onClick={() => toggleItem(item.id)} aria-expanded={isOpen} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson">
              <span className="text-base sm:text-lg font-display font-semibold text-[#120E11]">
                {item.question}
              </span>
              <div className={cn('w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center text-crimson transition-transform duration-300', isOpen && 'rotate-180 bg-crimson text-white')}>
                <ChevronDown className="w-4 h-4"/>
              </div>
            </button>

            {isOpen && (<div className="px-6 pb-6 text-sm sm:text-base text-text-dark-muted leading-relaxed border-t border-black/[0.06] pt-4 animate-in fade-in duration-200">
                {item.answer}
              </div>)}
          </div>);
        })}
    </div>);
};
