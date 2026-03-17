import Image from 'next/image';
import { Info } from 'lucide-react';
import { useLazyBackground } from '@/hooks/useLazyBackground';

export default function ExclusiveAccidentCasesSection() {
  const { elementRef, loaded } = useLazyBackground('/assets/White-BG.png');

  return (
    <section
      ref={elementRef}
      className="relative py-12 sm:py-16"
      id="exclusive-accident-cases"
      style={{
        backgroundImage: loaded ? 'url(/assets/White-BG.png)' : 'none',
        backgroundColor: loaded ? 'transparent' : '#f3f3f3',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 140%',
        backgroundPosition: 'top center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <div className="mx-auto w-[min(1200px,94vw)] px-4">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-brand">
            Exclusive Accident Cases for Attorneys
          </h2>
          <p className="mt-2 text-sm sm:text-lg font-medium text-[#1b1b1b]">
            Not Shared, Not Resold.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-9 sm:grid-cols-3 sm:gap-10">
            <div className="text-center">
              <div className="font-anton text-7xl leading-none text-brand">$2,500</div>
              <div className="text-lg sm:text-xl font-base text-[#1b1b1b]">Average Cost Per Acquisition</div>
              <div className="text-xl sm:text-xl font-extrabold text-[#1b1b1b]">in New York</div>
            </div>
            <div className="text-center">
              <div className="font-anton text-7xl leading-none text-brand">$3,500</div>
              <div className="text-lg sm:text-xl font-base text-[#1b1b1b]">Average Cost Per Acquisition</div>
              <div className="text-xl sm:text-xl font-extrabold text-[#1b1b1b]">in Texas</div>
            </div>
            <div className="text-center">
              <div className="font-anton text-7xl leading-none text-brand">$6,500</div>
              <div className="text-lg sm:text-xl font-base text-[#1b1b1b]">Average Cost Per Acquisition</div>
              <div className="text-xl sm:text-xl font-extrabold text-[#1b1b1b]">in California</div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[20px] sm:rounded-[22px]">
            <Image
              src="/assets/Man.png"
              alt="Ready to start receiving exclusive accident cases"
              width={1100}
              height={360}
              className="w-full h-[360px] object-cover object-[50%_18%] sm:h-auto sm:object-contain"
              loading="lazy"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center translate-y-6 sm:translate-y-10">
              <p className="text-[clamp(18px,3vw,30px)] font-extrabold text-white drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]">
                Ready to Start Receiving Exclusive Accident Cases?
              </p>
              <div className="mt-4 flex flex-col items-center justify-center sm:mt-5">
                <a
                  className="inline-flex items-center justify-center rounded-pill bg-brand px-9 py-3 lg:px-12 lg:py-4 text-lg font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px] sm:bg-brand sm:px-10 sm:py-4 sm:text-lg"
                  href="#booking"
                >
                  SCHEDULE A CALL
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-0.5 sm:mt-2 text-center">
          <p className="text-2xl lg:text-4xl font-extrabold text-brand">Our Case Quality Guarantee</p>
          <p className="mt-2 text-sm sm:text-lg font-medium text-[#444]">
            Built-in protection to eliminate your outsourcing risk.
          </p>

          <div className="mx-auto mt-8 w-full max-w-[860px]">
            <div className="grid grid-cols-1 gap-4 text-left">
              <div className="flex items-center gap-4">
                <img src="/assets/10.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" loading="lazy" />
                <p className="text-[clamp(16px,2.3vw,20px)] font-medium text-[#1b1b1b]">Exclusive to your firm</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/10.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" loading="lazy" />
                <p className="text-[clamp(16px,2.3vw,20px)] font-medium text-[#1b1b1b]">Signed retainer agreement before delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/10.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" loading="lazy" />
                <p className="text-[clamp(16px,2.3vw,20px)] font-medium text-[#1b1b1b]">Pre-qualified based on your exact criteria</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/10.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" loading="lazy" />
                <p className="text-[clamp(16px,2.3vw,20px)] font-medium text-[#1b1b1b]">Multi-step verification process</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/10.png" alt="" className="h-10 w-10 object-contain" aria-hidden="true" loading="lazy" />
                <p className="text-[clamp(16px,2.3vw,20px)] font-medium text-[#1b1b1b]">Replacement policy if agreed criteria are not met</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-2xl lg:text-4xl font-extrabold text-brand">Our Testimonials</p>
          <p className="mt-2 text-sm sm:text-lg font-medium text-[#444]">
            WHAT PEOPLE ARE SAYING ABOUT US
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="rounded-smooth bg-white/85 px-6 py-6 text-center shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“Outsourcing our sales operations was the best decision we made.”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                Partnering with Accident Payments felt like instantly adding a highly trained sales team that actually understands attorneys. Their qualification process is dialed in, the cases are real, and the intent is obvious from the first call. We’re signing better cases with less wasted effort.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Michael R</p>
            </div>

            <div className="rounded-smooth bg-white/85 px-6 py-6 text-center shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“Transparent, professional, and effective”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                Accident Payments sets clear expectations and delivers exactly what they promise. The quality of accident cases and the speed of delivery helped our team convert more prospects into signed clients.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Sarah L</p>
            </div>

            <div className="rounded-smooth bg-white/85 px-6 py-6 text-center shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“A noticeable upgrade from shared cases”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                We’ve worked with multiple vendors before, but Accident Payments stands out for exclusivity and consistency. Our intake team immediately noticed the difference in lead quality.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Xavier T</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-pill bg-[#0f0f0f] px-9 py-3 lg:px-12 lg:py-4 text-[16px] sm:text-[18px] font-extrabold text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px]"
              >
                SCHEDULE A CALL
              </a>

              <a
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-pill border border-brand bg-[#f3f3f3] px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-brand transition hover:-translate-y-[1px] hover:bg-[#e9e9e9]"
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
