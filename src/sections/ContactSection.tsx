import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import EyebrowTag from '../components/EyebrowTag';
import SectionHeading from '../components/SectionHeading';

const inputClass =
  'w-full bg-transparent border border-hairline focus:border-amber rounded-2xl px-4 py-3 text-mist placeholder:text-mistmuted/60 text-sm sm:text-base outline-none transition-colors';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // Demo-only handler — no backend is wired up yet. Swap this for a real
  // submission (e.g. an email service or API call) when one is ready.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-panel2 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30} className="flex flex-col items-center mb-16 sm:mb-20">
        <EyebrowTag className="mb-4">File — Get In Touch</EyebrowTag>
        <SectionHeading>Contact</SectionHeading>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <FadeIn delay={0.1} y={20}>
          {submitted ? (
            <div className="rounded-[24px] border border-hairline bg-ink px-6 py-10 text-center">
              <p className="text-mist text-lg font-medium mb-2">Message received.</p>
              <p className="text-mistmuted text-sm">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" required placeholder="Full Name" className={inputClass} />
              <input type="email" required placeholder="Email Address" className={inputClass} />
              <input type="tel" required placeholder="Phone Number" className={inputClass} />
              <textarea
                required
                rows={5}
                placeholder="Details about your investigation request..."
                className={inputClass}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-sm transition-transform duration-200 hover:scale-[1.02] mt-2"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="rounded-[24px] border border-hairline bg-ink px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 h-full">
            <h3 className="text-mist font-medium uppercase text-lg tracking-wide">IMS Corporate Office</h3>

            <div className="flex items-start gap-4">
              <MapPin className="text-amber shrink-0 mt-0.5" size={20} />
              <div>
                <span className="block text-mistmuted text-xs uppercase tracking-wide mb-1">Address</span>
                <p className="text-mist text-sm sm:text-base">123 Integrity Tower, Financial District, New York, NY 10005</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-amber shrink-0 mt-0.5" size={20} />
              <div>
                <span className="block text-mistmuted text-xs uppercase tracking-wide mb-1">Phone</span>
                <p className="text-mist text-sm sm:text-base">+1 (555) 019-2834</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-amber shrink-0 mt-0.5" size={20} />
              <div>
                <span className="block text-mistmuted text-xs uppercase tracking-wide mb-1">Email</span>
                <p className="text-mist text-sm sm:text-base">info@integritymanagement.com</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
