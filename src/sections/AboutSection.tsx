import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import CornerMark from '../components/CornerMark';
import SectionHeading from '../components/SectionHeading';

const aboutText =
  "We're a dedicated insurance investigation agency guided by integrity, accuracy, and accountability. From field verification to detailed reporting, our team helps insurers make informed, confident claim decisions — clear evidence, sound judgement, and results delivered on time.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-ink"
    >
      <CornerMark corner="tl" label="Field Verified" />
      <CornerMark corner="tr" label="Evidence Logged" />
      <CornerMark corner="bl" label="Report Reviewed" />
      <CornerMark corner="br" label="Case Closed" />

      <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16 max-w-3xl">
        <FadeIn delay={0} y={40}>
          <SectionHeading>About us</SectionHeading>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
