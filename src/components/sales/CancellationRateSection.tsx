export default function CancellationRateSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <div className="mx-auto w-full max-w-[780px] text-center">
          <p className="text-[16px] font-extrabold tracking-[0.06em] text-[#111] sm:text-[26px]">
            Our Clients Have a Less Than
          </p>

          <p className="font-anton mt-3 text-[clamp(96px,22vw,150px)] leading-[0.85] text-brand sm:mt-4 sm:text-[210px] md:text-[260px]">
            10%
          </p>

          <p className="mt-2 text-[16px] font-extrabold tracking-[0.06em] text-[#111] sm:text-[26px]">
            Cancellation Rate
          </p>

          <p className="mt-7 text-[16px] font-extrabold tracking-[0.06em] text-[#111] sm:mt-10 sm:text-[26px]">
            Because Our Leads Are
          </p>

          <div className="mx-auto mt-5 w-fit max-w-[520px] space-y-4 text-left sm:mt-6 sm:space-y-6">
            <div className="flex w-full items-start gap-3">
              <img src="/assets/10.png" alt="Check" className="mt-0.5 h-8 w-8 object-contain sm:mt-1 sm:h-10 sm:w-10" loading="lazy" />
              <p className="text-[18px] font-extrabold tracking-[0.04em] text-[#111] sm:text-[26px]">Qualified</p>
            </div>
            <div className="flex w-full items-start gap-3">
              <img src="/assets/10.png" alt="Check" className="mt-0.5 h-8 w-8 object-contain sm:mt-1 sm:h-10 sm:w-10" loading="lazy" />
              <p className="text-[18px] font-extrabold tracking-[0.04em] text-[#111] sm:text-[26px]">Interested</p>
            </div>
            <div className="flex w-full items-start gap-3">
              <img src="/assets/10.png" alt="Check" className="mt-0.5 h-8 w-8 object-contain sm:mt-1 sm:h-10 sm:w-10" loading="lazy" />
              <p className="text-[18px] font-extrabold tracking-[0.04em] text-[#111] sm:text-[26px]">
                Using Search Engine
                <br />
                Platforms
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center sm:mt-12">
            <div className="w-full bg-[#111] px-3 py-2 text-center text-[14px] font-extrabold tracking-[0.04em] text-white sm:text-[34px]">
              Don't Put Yourself at Risk With Outdated Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
