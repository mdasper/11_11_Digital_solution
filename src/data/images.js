import stratImg from '@/assets/manifesto/strategy.svg';
import designImg from '@/assets/manifesto/design.svg';
import prodImg from '@/assets/manifesto/production.svg';
import jbImg from '@/assets/projects/jb-healthcare.svg';
import highlandImg from '@/assets/projects/highland-origin.svg';
import fazilImg from '@/assets/projects/fazil-garments.svg';
import snapitImg from '@/assets/projects/snapit-studio.svg';
/**
 * Editorial Visual Assets (Local SVGs + Fallbacks)
 */
export const IMAGES = {
    hero: {
        darkWorkspace: jbImg,
        alt: 'Dark minimalist creative workspace with laptop and ambient crimson backlight',
    },
    manifesto: [
        {
            url: stratImg,
            alt: 'Creative digital agency team collaborating on strategy',
            rotate: '-3deg',
        },
        {
            url: designImg,
            alt: 'UI designer sketching wireframes on tablet',
            rotate: '4deg',
        },
        {
            url: prodImg,
            alt: 'Creator filming high-definition video on gimbal rig',
            rotate: '-2deg',
        },
    ],
    services: {
        websites: jbImg,
        marketing: highlandImg,
        reels: fazilImg,
        editing: snapitImg,
    },
    auditCta: {
        url: jbImg,
        alt: 'High-end studio monitor showing custom web analytics mockup',
    },
    founder: {
        url: stratImg,
        alt: 'Mohamed Asper, Founder of 11 11 Digital Solutions',
    },
};
