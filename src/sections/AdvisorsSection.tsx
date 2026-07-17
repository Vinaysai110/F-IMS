import FadeIn from '../components/FadeIn';
import EyebrowTag from '../components/EyebrowTag';
import SectionHeading from '../components/SectionHeading';
import { advisors } from '../data/advisors';

export default function AdvisorsSection() {
  return (
    <section id="advisors" className="bg-panel2 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30} className="flex flex-col items-center mb-16 sm:mb-20">
        <EyebrowTag className="mb-4">File — Advisory Panel</EyebrowTag>
        <SectionHeading>Advisors</SectionHeading>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {advisors.map((advisor, i) => (
          <FadeIn key={advisor.number} delay={i * 0.12} y={30}>
            <div className="group rounded-[28px] sm:rounded-[32px] border-2 border-hairline hover:border-mist/40 bg-ink p-4 sm:p-5 transition-colors duration-300 h-full flex flex-col">
              <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] mb-4 h-40 sm:h-44 md:h-48">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(12,12,12,0.7) 100%)' }}
                />
              </div>
              <EyebrowTag className="mb-1.5">Advisor N°{advisor.number}</EyebrowTag>
              <h3 className="text-mist font-medium uppercase text-base sm:text-lg mb-1">{advisor.name}</h3>
              <p className="text-amber text-xs uppercase tracking-wide mb-2.5">{advisor.role}</p>
              <p className="text-mistmuted text-xs sm:text-sm leading-relaxed">{advisor.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
