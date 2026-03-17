import { useCallback, useRef } from 'react';

export default function FirstAccessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const brandColor = '#CC3F08';

  const getBrandMaskStyle = (src: string) =>
    ({
      backgroundColor: brandColor,
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }) as const;

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
          <img
            src="/assets/Logo-first-slide.png"
            alt="Accident Payments"
            className="mb-6 h-16 w-auto select-none sm:mb-8 sm:h-20"
            loading="lazy"
          />

          <p className="sales-heading leading-[1.05] text-brand">
            <span className="block">Stop Buying Leads.</span>
            <span className="block sm:whitespace-nowrap">Start Receiving Signed Retainers.</span>
          </p>

          <p className="mt-5 max-w-[720px] text-[14px] font-medium leading-[1.55] text-[#111] sm:mt-6 sm:text-[18px]">
            We deliver high-intent, pre-qualified MVA cases directly to your firm. No upfront fees, no monthly retainers
            - just high value cases with a sub-10% cancellation rate.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center bg-[#111] px-5 py-2 text-[11px] font-extrabold tracking-[0.12em] text-white sm:mt-7 sm:px-7 sm:py-2.5 sm:text-[13px]"
            onClick={handleNextSlide}
          >
            LEARN HOW WE SCALE YOUR FIRM
          </button>

          <div className="mt-6 w-full max-w-[980px] overflow-hidden">
            <div
              className="flex w-max animate-[marquee-scroll_22s_linear_infinite] items-center motion-reduce:animate-none"
              style={{ willChange: 'transform' }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-7 px-6 sm:gap-10">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 select-none sm:h-10 sm:w-10"
                      style={getBrandMaskStyle('/assets/firms.png')}
                    />
                    <p className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em] text-[#111]/80 sm:text-[13px]">
                      100+ Law Firms
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 select-none sm:h-10 sm:w-10"
                      style={getBrandMaskStyle('/assets/state.png')}
                    />
                    <p className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em] text-[#111]/80 sm:text-[13px]">
                      Active in <span className="font-extrabold text-[#111]">46+</span> States
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 select-none sm:h-10 sm:w-10"
                      style={getBrandMaskStyle('/assets/contract-icon.png')}
                    />
                    <p className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em] text-[#111]/80 sm:text-[13px]">
                      500+ Signed Retainers
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 text-center">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 select-none sm:h-10 sm:w-10"
                      style={getBrandMaskStyle('/assets/cancellation-order.png')}
                    />
                    <p className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em] text-[#111]/80 sm:text-[13px]">
                      Sub-10% Cancellation Rate
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
