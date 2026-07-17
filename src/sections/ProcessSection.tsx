import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import EyebrowTag from '../components/EyebrowTag';
import SectionHeading from '../components/SectionHeading';
import { processSteps, turnaroundNotes } from '../data/process';

export default function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.7'],
  });

  return (
    <section id="process" className="bg-panel px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30} className="flex flex-col items-center mb-16 sm:mb-24">
        <EyebrowTag className="mb-4">File — Investigation Workflow</EyebrowTag>
        <SectionHeading>Our Process</SectionHeading>
      </FadeIn>

      <div ref={timelineRef} className="max-w-3xl mx-auto relative pl-10 sm:pl-14">
        {/* track */}
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-hairline" />
        <motion.div
          className="absolute left-[7px] sm:left-[11px] top-2 w-[2px] origin-top"
          style={{ scaleY: scrollYProgress, background: '#D9662B', height: 'calc(100% - 16px)' }}
        />

        <div className="flex flex-col gap-10 sm:gap-12">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08} x={-16} y={0} className="relative">
              <span className="absolute -left-10 sm:-left-14 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-ink border-2 border-amber flex items-center justify-center">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber" />
              </span>
              <EyebrowTag className="mb-1 block">N°{step.number}</EyebrowTag>
              <h3 className="text-mist font-medium uppercase text-base sm:text-lg mb-1">{step.title}</h3>
              <p className="text-mistmuted text-sm sm:text-base leading-relaxed max-w-lg">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.1} y={20} className="max-w-3xl mx-auto mt-16 sm:mt-20">
        <div className="rounded-[24px] border border-hairline bg-ink px-6 py-5 sm:px-8 sm:py-6 flex items-start gap-4">
          <Clock className="text-amber shrink-0 mt-1" size={22} />
          <div className="flex flex-col gap-1.5">
            {turnaroundNotes.map((note) => (
              <p key={note.label} className="text-mistmuted text-sm sm:text-base">
                <span className="text-mist font-medium">{note.label}:</span> {note.value}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
