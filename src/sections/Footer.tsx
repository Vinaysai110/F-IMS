import logo from '../assets/logo-mark.png';

const links = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advisors', href: '#advisors' },
  { label: 'Our process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-panel2 px-5 sm:px-8 md:px-10 py-10 border-t border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="IMS logo" className="h-6 w-6 object-contain" />
          <p className="text-mistmuted text-xs sm:text-sm">
            &copy; 2026 Integrity Management Services (IMS). All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-mistmuted hover:text-mist text-xs sm:text-sm uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
