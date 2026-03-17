export default function TraditionalVsSignedSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center justify-items-center gap-7 text-center sm:gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/assets/4.png"
              alt="Traditional advertising"
              className="h-[160px] w-[160px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
              loading="lazy"
            />

            <div className="mt-5 sm:mt-6">
              <p className="sales-heading text-brand">
                Traditional
                <br />
                Advertising
              </p>
              <p className="mt-2 text-[14px] font-extrabold tracking-[0.06em] text-[#111] sm:text-[24px]">
                "Other Companies"
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-[20px] font-extrabold tracking-[0.04em] text-[#111] sm:text-[26px]">vs.</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/contract.png"
              alt="Signed retainers"
              className="h-[160px] w-[160px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
              loading="lazy"
            />

            <div className="mt-5 text-center sm:mt-6">
              <p className="sales-heading text-brand">
                Signed
                <br />
                Retainers
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
    </section>
  );
}
