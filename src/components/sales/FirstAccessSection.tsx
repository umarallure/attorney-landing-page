export default function FirstAccessSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 sm:px-10">
        <div className="w-full max-w-[1200px] text-center">
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center">
            <img
              src="/assets/computer.png"
              alt="Accident Payments preview"
              className="w-full max-w-[560px] h-auto select-none"
              loading="lazy"
            />

            <div className="mt-6 inline-flex items-center justify-center bg-[#111] px-4 py-1.5 text-[14px] font-extrabold uppercase tracking-[0.18em] text-white sm:text-[16px]">
              FIRST ACCESS
            </div>

            <h2 className="mt-6 text-[26px] font-semibold leading-[1.15] text-[#111] sm:text-[38px]">
              Custom And Tailored MVA Cases Built For <span className="font-extrabold">YOUR</span> Law Firm
            </h2>

            <h3 className="mt-3 text-[22px] font-extrabold uppercase leading-[1.15] text-brand sm:text-[34px]">
              BRANDED ADS PREMIUM CASE FEED
            </h3>

            <div className="mt-6 inline-flex items-center justify-center bg-[#111] px-6 py-2 text-[14px] font-extrabold uppercase tracking-[0.12em] text-white sm:px-8 sm:py-2.5 sm:text-[16px]">
              GET HIGH CONVERT CASES ON TAP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
