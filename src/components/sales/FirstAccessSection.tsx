import { useCallback, useRef } from 'react';

export default function FirstAccessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleNextSlide = useCallback(() => {
    const nextSlide = sectionRef.current?.nextElementSibling as HTMLElement | null;
    nextSlide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
      }}
      className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10"
    >
      <div className="w-full max-w-[1200px] text-center">
        <div className="mx-auto flex w-full max-w-[860px] flex-col items-center">
          <p className="sales-heading text-brand">
            Stop Buying Leads.<br />
            <span className="sm:whitespace-nowrap">Start Receiving Signed Retainers.</span>
          </p>

          <p className="mt-5 max-w-[720px] text-[14px] font-medium leading-[1.55] text-[#111] sm:mt-6 sm:text-[18px]">
            We deliver high-intent, pre-qualified MVA cases directly to your firm. No upfront fees, no monthly retainers
            - just high value cases with a sub-10% cancellation rate.
          </p>

          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center bg-[#111] px-5 py-2 text-[11px] font-extrabold tracking-[0.12em] text-white sm:mt-8 sm:px-7 sm:py-2.5 sm:text-[13px]"
            onClick={handleNextSlide}
          >
            LEARN HOW WE SCALE YOUR FIRM
          </button>
        </div>
      </div>
    </section>
  );
}
