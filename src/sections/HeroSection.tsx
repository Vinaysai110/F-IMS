import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';
import logo from '../assets/logo.png';
import logoMark from '../assets/logo-mark.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 gap-4">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <img src={logoMark} alt="IMS logo" className="h-6 md:h-8 w-auto object-contain block" />
            <span className="text-mist font-semibold tracking-wider text-sm md:text-lg leading-none translate-y-[1px]">IMS</span>
          </a>
          <nav className="hidden sm:flex items-center gap-5 md:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="sm:hidden text-mist"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-end gap-4 px-6 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </FadeIn>

      {/* Massive heading */}
      <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-2">
        <FadeIn delay={0.15} y={40} as="div">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5vw]">
            We&apos;re IMS.
          </h1>
        </FadeIn>
      </div>

      {/* Hero portrait — the handshake mark, magnetic */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-16 md:bottom-20 z-10 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={4}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #BE4C00 0%, #7621B0 55%, transparent 75%)' }}
              />
              <img src={logo} alt="" className="relative w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[280px]">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            delivering evidence-based investigations that help insurers decide with confidence
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
