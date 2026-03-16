export default function FirstAccessSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10">
      <div className="w-full max-w-[1200px] text-center">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center">
          <p className="mb-4 text-[20px] font-extrabold uppercase leading-[1.15] text-brand sm:mb-6 sm:text-[34px]">
            Quit Buying Leads<br />Start Receiving Signed Cases
          </p>
          <img
            src="/assets/computer.png"
            alt="Accident Payments preview"
            className="h-auto w-full max-w-[560px] select-none"
            loading="lazy"
          />

          <div className="mt-5 inline-flex items-center justify-center bg-[#111] px-4 py-1.5 text-[14px] font-extrabold uppercase tracking-[0.18em] text-white sm:mt-6 sm:text-[16px]">
            FIRST ACCESS
          </div>

          <h2 className="mt-5 text-[24px] font-semibold leading-[1.15] text-[#111] sm:mt-6 sm:text-[38px]">
            Custom And Tailored MVA Cases Built For <span className="font-extrabold">YOUR</span> Law Firm
          </h2>

          <h3 className="mt-3 text-[20px] font-extrabold uppercase leading-[1.15] text-brand sm:text-[34px]">
            BRANDED ADS PREMIUM CASE FEED
          </h3>

          <div className="mt-5 inline-flex items-center justify-center bg-[#111] px-5 py-2 text-[13px] font-extrabold uppercase tracking-[0.12em] text-white sm:mt-6 sm:px-8 sm:py-2.5 sm:text-[16px]">
            GET HIGH CONVERT CASES ON TAP
          </div>
        </div>
      </div>
    </section>
  );
}
