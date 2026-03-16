export default function CancellationRateSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <div className="text-center">
            <p className="text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
              OUR CLIENTS HAVE A LESS THAN
            </p>
            <p className="font-anton mt-1 text-[clamp(96px,22vw,150px)] leading-[0.85] text-brand sm:text-[210px] md:text-[260px]">
              10%
            </p>
            <p className="mt-1 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
              CANCELLATION RATE
            </p>
          </div>

          <div className="hidden h-[360px] w-[3px] bg-[#111]/50 md:block" />

          <div className="text-center md:text-left">
            <p className="text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
              BECAUSE OUR LEADS ARE
            </p>
            <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-6">
              <div className="flex items-start justify-center gap-3 md:justify-start">
                <img src="/assets/10.png" alt="Check" className="mt-0.5 h-7 w-7 object-contain sm:mt-1 sm:h-9 sm:w-9" loading="lazy" />
                <p className="text-[16px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">QUALIFIED</p>
              </div>
              <div className="flex items-start justify-center gap-3 md:justify-start">
                <img src="/assets/10.png" alt="Check" className="mt-0.5 h-7 w-7 object-contain sm:mt-1 sm:h-9 sm:w-9" loading="lazy" />
                <p className="text-[16px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">INTERESTED</p>
              </div>
              <div className="flex items-start justify-center gap-3 md:justify-start">
                <img src="/assets/10.png" alt="Check" className="mt-0.5 h-7 w-7 object-contain sm:mt-1 sm:h-9 sm:w-9" loading="lazy" />
                <p className="text-[16px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">
                  USING SEARCH ENGINE
                  <br />
                  PLATFORMS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-10">
          <div className="bg-[#111] px-2 py-2 text-center text-[13px] font-extrabold uppercase tracking-[0.06em] text-white sm:text-3xl">
            DON'T PUT YOURSELF AT RISK WITH OUTDATED MARKETING
          </div>
        </div>
      </div>
    </section>
  );
}
