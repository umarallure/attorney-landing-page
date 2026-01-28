export default function ExclusiveAccidentCasesSection() {
  return (
    <section
      className="relative py-12 sm:py-16"
      id="exclusive-accident-cases"
      style={{
        backgroundImage: 'url(/assets/White-BG.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 140%',
        backgroundPosition: 'top center',
      }}
    >
      <div className="mx-auto w-[min(1200px,94vw)] px-4">
        <div className="text-center">
          <h2 className="text-[clamp(22px,4vw,34px)] font-extrabold text-brand">
            Exclusive Accident Cases for Attorneys
          </h2>
          <p className="mt-2 text-[clamp(18px,3vw,28px)] font-medium text-[#1b1b1b]">
            Not Shared, Not Resold.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            <div className="text-center">
              <div className="text-9xl font-black leading-none text-brand">26</div>
              <div className="text-lg sm:text-xl font-extrabold text-[#1b1b1b]">Settlements Closed for</div>
              <div className="text-base sm:text-lg font-extrabold text-[#1b1b1b]">$2,500 in Minnesota</div>
            </div>
            <div className="text-center">
              <div className="text-9xl font-black leading-none text-brand">43</div>
              <div className="text-xl sm:text-xl font-extrabold text-[#1b1b1b]">Settlements Closed for</div>
              <div className="text-base sm:text-lg font-extrabold text-[#1b1b1b]">$3,500 in Washington</div>
            </div>
            <div className="text-center">
              <div className="text-9xl font-black leading-none text-brand">31</div>
              <div className="text-xl sm:text-xl font-extrabold text-[#1b1b1b]">Settlements Closed for</div>
              <div className="text-base sm:text-lg font-extrabold text-[#1b1b1b]">$6,500 in Oregon</div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[20px] sm:rounded-[22px]">
            <img
              src="/assets/Man.png"
              alt="Ready to start receiving exclusive accident cases"
              className="w-full h-[360px] object-cover object-[50%_18%] sm:h-auto sm:object-contain"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center translate-y-6 sm:translate-y-10">
              <p className="text-[clamp(18px,3vw,30px)] font-extrabold text-white drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]">
                Ready to Start Receiving Exclusive Accident Cases?
              </p>
              <a
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-brand px-8 py-5 text-lg font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px] sm:mt-5 sm:bg-brand sm:px-10 sm:py-4 sm:text-lg"
                href="#booking"
              >
                SCHEDULE A CALL
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-[clamp(18px,3vw,28px)] font-medium text-[#1b1b1b]">Our Testimonials</p>
          <p className="mt-2 text-[clamp(18px,3.2vw,30px)] font-extrabold text-brand">
            WHAT PEOPLE ARE SAYING ABOUT US
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="rounded-smooth bg-white/85 px-6 py-6 text-left shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“High-quality accident cases with real intent”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                Accident Payments has been a reliable growth partner for our personal injury practice. The leads are exclusive, properly screened, and delivered in real time.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Michael R</p>
            </div>

            <div className="rounded-smooth bg-white/85 px-6 py-6 text-left shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“Transparent, professional, and effective”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                Expectations are clear and delivery is exactly what they promise. The quality of accident cases and the speed of delivery helped our team convert more prospects.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Sarah L</p>
            </div>

            <div className="rounded-smooth bg-white/85 px-6 py-6 text-left shadow-[0_14px_40px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="text-[18px] text-yellow-400">★★★★★</div>
              <p className="mt-4 text-sm font-extrabold text-[#1b1b1b]">“A noticeable upgrade from shared leads”</p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#444]">
                We’ve worked with multiple vendors before, but Accident Payments stands out for exclusivity and consistency. Our intake team immediately noticed the difference.
              </p>
              <p className="mt-5 text-sm font-extrabold text-[#1b1b1b]">Michael T</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-2xl bg-[#0f0f0f] px-12 py-4 text-[16px] sm:text-[18px] font-extrabold text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-[1px]"
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
