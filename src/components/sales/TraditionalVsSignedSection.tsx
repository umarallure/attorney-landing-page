export default function TraditionalVsSignedSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 sm:px-10">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 items-center justify-items-center gap-8 text-center sm:gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/assets/4.png"
                alt="Traditional advertising"
                className="h-[190px] w-[190px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
                loading="lazy"
              />

              <div className="mt-6">
                <p className="text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[32px]">
                  TRANDITIONAL
                  <br />
                  ADVERTISING
                </p>
                <p className="mt-2 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                  "OTHER COMPANIES"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-[22px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[26px]">vs.</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/assets/contract.png"
                alt="Signed retainers"
                className="h-[190px] w-[190px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
                loading="lazy"
              />

              <div className="mt-6 text-center">
                <p className="text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[32px]">
                  SIGNED
                  <br />
                  RETAINERS
                </p>
                <a href="/" className="mt-3 inline-flex items-center">
                  <img
                    src="/assets/logo-horizontal.png"
                    alt="Accident Payments"
                    className="h-8 w-auto select-none sm:h-10"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
