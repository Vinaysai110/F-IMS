import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import EyebrowTag from '../components/EyebrowTag';
import SectionHeading from '../components/SectionHeading';
import { coverageCards, type CoverageCard } from '../data/coverage';

function StackCard({
  card,
  index,
  total,
  progress,
}: {
  card: CoverageCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-20 md:top-24 h-[72vh] flex items-start justify-center">
      <motion.div
        style={{ scale, top: `${index * 20}px` }}
        className="relative w-full max-w-3xl rounded-[26px] sm:rounded-[34px] md:rounded-[40px] border-2 border-mist bg-ink p-4 sm:p-5 md:p-6"
      >
        {/* top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 md:mb-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="font-mono font-black text-mist/80"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 48px)' }}
            >
              {card.number}
            </span>
            <div>
              <EyebrowTag className="block mb-1">{card.category}</EyebrowTag>
              <h3 className="text-mist font-medium uppercase text-base sm:text-lg md:text-xl">
                {card.name}
              </h3>
            </div>
          </div>
          <GhostButton label="View Services" href="#services" className="!px-5 !py-2 !text-xs" />
        </div>

        <p className="text-mistmuted mb-4 md:mb-5 max-w-xl text-xs sm:text-sm">{card.description}</p>

        {/* image grid */}
        <div className="flex gap-2.5 sm:gap-3">
          <img
            src={card.imageLeft}
            alt=""
            className="w-[45%] object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
            style={{ height: 'clamp(110px, 14vw, 190px)' }}
          />
          <img
            src={card.imageRight}
            alt=""
            className="w-[55%] object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
            style={{ height: 'clamp(110px, 14vw, 190px)' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function CoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="coverage"
      className="bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={30} className="flex justify-center mb-16 sm:mb-20">
        <SectionHeading>Coverage</SectionHeading>
      </FadeIn>

      <div ref={containerRef} className="relative">
        {coverageCards.map((card, i) => (
          <StackCard key={card.number} card={card} index={i} total={coverageCards.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
