import FadeIn from '../components/FadeIn';
import EyebrowTag from '../components/EyebrowTag';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-panel rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={30} className="flex flex-col items-center mb-16 sm:mb-20 md:mb-28">
        <EyebrowTag className="mb-4">File — Services Rendered</EyebrowTag>
        <SectionHeading>Services</SectionHeading>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20} as="div">
            <div
              className="flex items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: i === services.length - 1 ? 'none' : '1px solid rgba(215, 226, 234, 0.15)' }}
            >
              <span
                className="font-mono font-black text-mist/80 shrink-0"
                style={{ fontSize: 'clamp(2.2rem, 8vw, 100px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="text-mist font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-mistmuted font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
