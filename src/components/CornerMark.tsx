interface CornerMarkProps {
  corner: 'tl' | 'tr' | 'bl' | 'br';
  label: string;
  className?: string;
}

const cornerStyles: Record<string, string> = {
  tl: 'top-[6%] left-[4%] sm:left-[6%] items-start',
  tr: 'top-[6%] right-[4%] sm:right-[6%] items-end text-right',
  bl: 'bottom-[8%] left-[4%] sm:left-[6%] items-start',
  br: 'bottom-[8%] right-[4%] sm:right-[6%] items-end text-right',
};

const bracketPath: Record<string, string> = {
  tl: 'M1 20V1H20',
  tr: 'M19 20V1H0',
  bl: 'M1 0V19H20',
  br: 'M19 0V19H0',
};

/**
 * Evidence-photo style corner bracket with a small file-tag label.
 * Replaces the brief's decorative moon/lego renders with a mark that
 * belongs to the subject: an investigation "exhibit" corner.
 */
export default function CornerMark({ corner, label, className = '' }: CornerMarkProps) {
  return (
    <div className={`absolute hidden md:flex flex-col gap-2 ${cornerStyles[corner]} ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d={bracketPath[corner]} stroke="#D9662B" strokeWidth="1.5" />
      </svg>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mistmuted whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
