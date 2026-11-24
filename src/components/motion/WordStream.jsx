import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: (custom = {}) => ({
    transition: {
      staggerChildren: custom.stagger ?? 0.024,
      delayChildren: custom.delay ?? 0,
    },
  }),
};

const wordVariants = {
  hidden: {
    opacity: 0.08,
    y: 8,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Recursively extracts plain word tokens while preserving nested element styles (e.g. gradient spans).
 */
function extractTokens(node) {
  const tokens = [];

  const traverse = (item, inheritedClass = '') => {
    if (typeof item === 'string' || typeof item === 'number') {
      const words = String(item).split(/\s+/).filter(Boolean);
      for (const w of words) {
        tokens.push({ text: w, className: inheritedClass });
      }
    } else if (Array.isArray(item)) {
      for (const child of item) {
        traverse(child, inheritedClass);
      }
    } else if (React.isValidElement(item)) {
      const combinedClass = [inheritedClass, item.props.className].filter(Boolean).join(' ');
      traverse(item.props.children, combinedClass);
    }
  };

  traverse(node);
  return tokens;
}

export const WordStream = ({
  text,
  children,
  as = 'p',
  className = '',
  delay = 0,
  stagger = 0.022,
  highlightWords = [],
  highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]',
  once = true,
  viewportMargin = '-30px',
}) => {
  const Component = motion[as] || motion.p;
  const input = text || children;

  if (!input) {
    return null;
  }

  const tokens = extractTokens(input);

  if (!tokens.length) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      custom={{ stagger, delay }}
      variants={containerVariants}
      className={className}
    >
      {tokens.map((token, i) => {
        const cleanWord = token.text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord || token.text.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${token.className || ''} ${isHighlighted ? highlightClass : ''}`}
            >
              {token.text}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
};

export default WordStream;
