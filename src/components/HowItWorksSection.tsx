import { useLazyBackground } from '@/hooks/useLazyBackground';
import { Info } from 'lucide-react';

export default function HowItWorksSection() {
  const { elementRef, loaded } = useLazyBackground('/assets/Orange-BG.png');

  return (
    <section
      ref={elementRef}
      className="relative py-12 sm:py-16"
      id="how-it-works"
      style={{
        backgroundImage: loaded ? 'url(/assets/Orange-BG.png)' : 'none',
        backgroundColor: loaded ? 'transparent' : '#cc3f08',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <div className="mx-auto w-[min(1200px,94vw)] px-4 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="relative inline-block pr-[0.9em] text-[#f6f6f6] leading-[0.9]">
            <span className="block text-[36px] sm:text-[clamp(44px,6.2vw,60px)] font-medium">HOW IT</span>
            <span className="block text-[44px] sm:text-[clamp(56px,7.2vw,50px)] font-extrabold">WORKS</span>
            <span className="pointer-events-none absolute -right-[0.5em] top-1/2 -translate-y-1/2 text-[76px] sm:text-[clamp(92px,10.5vw,120px)] font-extrabold leading-none">
              ?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg font-semibold text-[#f6f6f6]">
            From <span className="font-extrabold">Sign-Up</span> to <span className="font-extrabold">Signed Cases</span> - Simple, Transparent, Effective
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              1
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">
              APPLY &amp;
              <br />
              ONBOARD
            </p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Complete quick intake and
              <br />
              firm criteria.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              2
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">
              SALES CAMPAIGN
              <br />
              SETUP
            </p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              We tailor campaigns by location and case type.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              3
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">
              RECEIVE SIGNED
              <br />
              CASES
            </p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Get exclusive accident
              <br />
              cases in real time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              4
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">
              SIGN MORE
              <br />
              CLIENTS
            </p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Focus on cases while
              <br />
              we fuel your pipeline.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-[820px] text-center text-[#f6f6f6]">
          <h2 className="relative inline-block pr-[0.9em] text-[#f6f6f6] leading-[0.9]">
            <span className="block text-[36px] sm:text-[clamp(44px,6.2vw,60px)] font-medium">HOW WE</span>
            <span className="block text-[44px] sm:text-[clamp(56px,7.2vw,50px)] font-extrabold">SIGN CASES</span>
            <span className="pointer-events-none absolute -right-[0.5em] top-1/2 -translate-y-1/2 text-[76px] sm:text-[clamp(92px,10.5vw,120px)] font-extrabold leading-none">
              ?
            </span>
          </h2>

          <p className="mt-6 text-[14px] font-semibold sm:text-[16px]">Every case goes through a structured process:</p>

          <div className="mt-10">
            <p className="text-[18px] font-medium sm:text-[22px]">
              Targeted campaign launch based on your geography and case type
            </p>

            <img
              src="/assets/arrow-seperator.png"
              alt=""
              className="mx-auto my-6 h-8 w-auto select-none object-contain sm:h-10"
              aria-hidden="true"
              loading="lazy"
            />

            <p className="text-[18px] font-medium sm:text-[22px]">Multi-step intake qualification</p>

            <img
              src="/assets/arrow-seperator.png"
              alt=""
              className="mx-auto my-6 h-8 w-auto select-none object-contain sm:h-10"
              aria-hidden="true"
              loading="lazy"
            />

            <p className="text-[18px] font-medium sm:text-[22px]">Injury validation &amp; incident verification</p>

            <img
              src="/assets/arrow-seperator.png"
              alt=""
              className="mx-auto my-6 h-8 w-auto select-none object-contain sm:h-10"
              aria-hidden="true"
              loading="lazy"
            />

            <p className="text-[18px] font-medium sm:text-[22px]">Live sales call by trained closers</p>

            <img
              src="/assets/arrow-seperator.png"
              alt=""
              className="mx-auto my-6 h-8 w-auto select-none object-contain sm:h-10"
              aria-hidden="true"
              loading="lazy"
            />

            <p className="text-[18px] font-medium sm:text-[22px]">Signed retainer secured</p>

            <img
              src="/assets/arrow-seperator.png"
              alt=""
              className="mx-auto my-6 h-8 w-auto select-none object-contain sm:h-10"
              aria-hidden="true"
              loading="lazy"
            />

            <p className="text-[18px] font-extrabold sm:text-[22px]">Case delivered directly to your firm</p>
          </div>

          <p className="mt-10 text-[14px] font-semibold sm:text-[16px]">You only receive clients who are ready to proceed.</p>

          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-pill bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-12 py-5 text-[18px] sm:text-[20px] font-extrabold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
              >
                SCHEDULE A CALL
              </a>

              <a
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-pill border border-[#f6f6f6] bg-[#f3f3f3] px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#111] transition hover:-translate-y-[1px] hover:bg-[#e9e9e9]"
                href="/sales"
              >
                <Info className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                MORE INFO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
