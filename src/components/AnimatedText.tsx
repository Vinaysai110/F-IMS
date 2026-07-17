import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Splits `text` into words, then characters within each word, and reveals
 * them one by one (opacity 0.2 -> 1) as the paragraph scrolls through the
 * viewport. Words are wrapped in a nowrap span so line breaks only ever
 * happen at real spaces, not mid-word.
 */
export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.55'],
  });

  const totalLength = text.length;
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const wordNode = (
          <span key={`w-${wi}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {Array.from(word).map((char, ci) => {
              const start = charIndex / totalLength;
              const end = (charIndex + 1) / totalLength;
              charIndex += 1;
              return (
                <Character key={ci} progress={scrollYProgress} start={start} end={end}>
                  {char}
                </Character>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) charIndex += 1; // account for the space
        return (
          <span key={`ws-${wi}`}>
            {wordNode}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}

function Character({
  children,
  progress,
  start,
  end,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder keeps layout width stable */}
      <span style={{ visibility: 'hidden' }}>{children === ' ' ? '\u00A0' : children}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {children === ' ' ? '\u00A0' : children}
      </motion.span>
    </span>
  );
}
