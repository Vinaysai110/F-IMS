import { useEffect, useRef, useState } from 'react';
import { marqueeRow1, marqueeRow2 } from '../data/marquee';

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = tripled(marqueeRow1);
  const row2 = tripled(marqueeRow2);

  return (
    <section ref={sectionRef} className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden">
          <div
            className="flex gap-3"
            style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
          >
            {row1.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] object-cover rounded-2xl shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-3"
            style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
          >
            {row2.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] object-cover rounded-2xl shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
