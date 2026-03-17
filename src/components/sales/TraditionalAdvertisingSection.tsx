export default function TraditionalAdvertisingSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px] text-center">
        <img
          src="/assets/5.png"
          alt="Traditional advertising"
          className="mx-auto h-[120px] w-[120px] object-contain sm:h-[210px] sm:w-[210px] md:h-[260px] md:w-[260px]"
          loading="lazy"
        />

        <p className="sales-heading mt-6 text-brand sm:mt-8">
          Traditional Advertising
        </p>
        <p className="mt-2 text-[14px] font-extrabold tracking-[0.06em] text-[#111] sm:text-[20px]">
          "Other Companies"
        </p>

        <p className="mt-6 text-[14px] font-semibold leading-relaxed text-[#111] sm:mt-8 sm:text-[20px]">
          Standard marketing agencies and lead generation companies
          <br />
          are currently using...
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-10 sm:gap-5">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/assets/8.png"
              alt="Billboard"
              className="h-7 w-7 object-contain sm:h-10 sm:w-10"
              loading="lazy"
            />
            <span className="text-[15px] font-extrabold tracking-[0.03em] text-[#111] sm:text-[22px]">
              Billboard Advertising
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <img
              src="/assets/6.png"
              alt="Radio"
              className="h-7 w-7 object-contain sm:h-10 sm:w-10"
              loading="lazy"
            />
            <span className="text-[15px] font-extrabold tracking-[0.03em] text-[#111] sm:text-[22px]">
              Radio Advertising
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <img
              src="/assets/7.png"
              alt="Television"
              className="h-7 w-7 object-contain sm:h-10 sm:w-10"
              loading="lazy"
            />
            <span className="text-[15px] font-extrabold tracking-[0.03em] text-[#111] sm:text-[22px]">
              Television Advertising
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
