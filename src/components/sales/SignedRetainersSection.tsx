export default function SignedRetainersSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center overflow-hidden px-4 py-6 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_420px] md:gap-14">
            <div className="order-2 mx-auto grid w-full max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:order-1">
              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Actively Searching
                <br />
                for your Service
              </div>
              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Low Cancellation Rate
              </div>

              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Convert to
                <br />
                Settlements
              </div>
              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Consistent Lead Flow
              </div>

              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Fixed Rate Pricing
              </div>
              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Zip code Specific
              </div>

              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                High Quality
              </div>
              <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                Control of your
                <br />
                Lead Flow
              </div>
            </div>

            <div className="order-1 mx-auto flex w-full max-w-[420px] flex-col items-center text-center text-[#111] md:order-2">
              <p className="text-[34px] font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-brand sm:text-[50px]">
                SIGNED
                <br />
                RETAINERS
              </p>

              <a href="/" className="mt-2 inline-flex items-center">
                <img
                  src="/assets/logo-horizontal.png"
                  alt="Accident Payments"
                  className="h-8 w-auto select-none sm:h-10"
                  loading="lazy"
                />
              </a>

              <p className="mt-2 text-base font-extrabold uppercase tracking-[0.06em] text-[#111] sm:mt-3 sm:text-xl">
                PROVIDES YOUR LAW FIRM
              </p>

              <img
                src="/assets/contract.png"
                alt="Signed retainers contract"
                className="mt-3 h-[150px] w-[150px] object-contain sm:mt-6 sm:h-[260px] sm:w-[260px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
