export default function TraditionalAdvertisingSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 py-10 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px] text-center">
          <img
            src="/assets/5.png"
            alt="Traditional advertising"
            className="mx-auto h-[150px] w-[150px] object-contain sm:h-[210px] sm:w-[210px] md:h-[260px] md:w-[260px]"
            loading="lazy"
          />

          <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[30px] md:text-[34px]">
            TRADITIONAL ADVERTISING
          </p>
          <p className="mt-2 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[20px]">
            "OTHER COMPANIES"
          </p>

          <p className="mt-8 text-[16px] font-semibold leading-relaxed text-[#111] sm:text-[20px]">
            Standard Marketing Agencies, Lead Generation Comapanies
            <br />
            Are Currently Using...
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex items-center justify-center gap-3">
              <img
                src="/assets/8.png"
                alt="Billboard"
                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                loading="lazy"
              />
              <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                BILLBOARD ADVERTISING
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img
                src="/assets/6.png"
                alt="Radio"
                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                loading="lazy"
              />
              <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                RADIO ADVERTISING
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img
                src="/assets/7.png"
                alt="Television"
                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                loading="lazy"
              />
              <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                TELEVISION ADVERTISING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
