interface EyebrowTagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small monospace "file stamp" label — the recurring case-file motif that
 * threads through the site (nav numbers, section eyebrows, exhibit marks).
 */
export default function EyebrowTag({ children, className = '' }: EyebrowTagProps) {
  return (
    <span
      className={`font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-amber ${className}`}
    >
      {children}
    </span>
  );
}
