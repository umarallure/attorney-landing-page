export default function SignedRetainersSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_420px] md:gap-14">
          <div className="order-2 mx-auto grid w-full max-w-[760px] grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 md:order-1">
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Actively Searching
              <br />
              for Your Service
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Low Cancellation Rate
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Convert to
              <br />
              Settlements
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Consistent Lead Flow
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Fixed Rate Pricing
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Zip Code Specific
            </div>

            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              High Quality
            </div>
            <div className="flex min-h-[44px] items-center justify-center rounded-none bg-[#111] px-3 py-2 text-center text-[13px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
              Control of Your
              <br />
              Lead Flow
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-[420px] flex-col items-center text-center text-[#111] md:order-2">
            <p className="sales-heading text-brand">
              Signed
              <br />
              Retainers
            </p>

            <a href="/" className="mt-2 inline-flex items-center">
              <img
                src="/assets/logo-horizontal.png"
                alt="Accident Payments"
                className="h-8 w-auto select-none sm:h-10"
                loading="lazy"
              />
            </a>

            <p className="mt-2 text-[13px] font-extrabold tracking-[0.04em] text-[#111] sm:mt-3 sm:text-xl">
              Provides Your Law Firm
            </p>

            <img
              src="/assets/contract.png"
              alt="Signed retainers contract"
              className="mt-3 h-[120px] w-[120px] object-contain sm:mt-6 sm:h-[260px] sm:w-[260px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
