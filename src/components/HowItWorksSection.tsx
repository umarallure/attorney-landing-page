import { useLazyBackground } from '@/hooks/useLazyBackground';

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
            <span className="block text-[clamp(44px,6.2vw,60px)] font-medium">HOW IT</span>
            <span className="block text-[clamp(56px,7.2vw,50px)] font-extrabold">WORKS</span>
            <span className="pointer-events-none absolute -right-[0.5em] top-1/2 -translate-y-1/2 text-[clamp(92px,10.5vw,120px)] font-extrabold leading-none">
              ?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-semibold text-[#f6f6f6]">
            From <span className="font-extrabold">Sign-Up</span> to <span className="font-extrabold">Signed Cases</span> - Simple, Transparent, Effective
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              1
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">APPLY &amp; ONBOARD</p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Complete a quick intake form with your custom case criteria.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              2
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">SALES CAMPAIGN SETUP</p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              We tailor campaigns by location and case type.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              3
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">RECEIVE SIGNED CASES</p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Get exclusive signed retainers for your law firm.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f0f0f] text-5xl font-extrabold text-[#f6f6f6]">
              4
            </div>
            <p className="mt-4 text-xl font-extrabold tracking-wide text-[#f6f6f6]">SIGN MORE CLIENTS</p>
            <p className="mt-1 max-w-[220px] text-base sm:text-base leading-relaxed text-[#f6f6f6]">
              Focus on cases while we sell customers for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
