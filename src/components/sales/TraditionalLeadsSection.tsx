export default function TraditionalLeadsSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-7 text-center md:grid-cols-[420px_1fr] md:gap-14 md:text-left">
          <div className="mx-auto flex w-full max-w-[420px] flex-col items-center md:items-start">
            <img
              src="/assets/4.png"
              alt="Traditional advertising"
              className="h-[160px] w-[160px] object-contain sm:h-[260px] sm:w-[260px]"
              loading="lazy"
            />

            <div className="mt-4 sm:mt-6">
              <p className="text-[18px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[28px]">
                TRADITIONAL
                <br />
                ADVERTISING
              </p>
              <p className="mt-2 text-[34px] font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-[#111] sm:text-[56px]">
                LEADS
              </p>
              <p className="mt-2 text-[14px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[18px]">
                "OTHER COMPANIES"
              </p>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-[760px] grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6">
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Don't Answer
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Don't Convert to
              <br />
              Settlements
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Inconsistent Pricing
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Cost Too much
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Inconsistent Volume
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Are out of Area
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Inconsistent Quality
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Cancel Before Court
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
