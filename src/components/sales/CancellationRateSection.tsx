export default function CancellationRateSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 py-8 sm:px-10 sm:py-10">
        <div className="w-full max-w-[1200px] text-center text-[#111]">
          <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-12">
            <div className="text-center">
              <p className="text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                OUR CLIENTS HAVE A LESS THAN
              </p>
              <p className="font-anton mt-1 text-[150px] leading-[0.85] text-brand sm:text-[210px] md:text-[260px]">
                10%
              </p>
              <p className="mt-1 text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                CANCELLATION RATE
              </p>
            </div>

            <div className="hidden h-[360px] w-[3px] bg-[#111]/50 md:block" />

            <div className="text-center md:text-left">
              <p className="text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                BECAUSE OUR LEADS ARE
              </p>
              <div className="mt-5 space-y-6">
                <div className="flex items-start justify-center gap-4 md:justify-start">
                  <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                  <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">QUALIFIED</p>
                </div>
                <div className="flex items-start justify-center gap-4 md:justify-start">
                  <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                  <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">INTERESTED</p>
                </div>
                <div className="flex items-start justify-center gap-4 md:justify-start">
                  <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                  <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">
                    USING SEARCH ENGINE
                    <br />
                    PLATFORMS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="bg-[#111] px-2 py-2 text-center text-[14px] sm:text-3xl font-extrabold uppercase tracking-[0.06em] text-white">
              DON'T PUT YOURSELF AT RISK WITH OUTDATED MARKETING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
