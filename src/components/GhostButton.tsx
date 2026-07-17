interface GhostButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function GhostButton({ label, href = '#', className = '' }: GhostButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border-2 border-mist text-mist font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
        transition-colors duration-200 hover:bg-mist/10 ${className}`}
    >
      {label}
    </a>
  );
}
