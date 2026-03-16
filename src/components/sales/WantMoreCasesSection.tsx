export default function WantMoreCasesSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <p className="text-[clamp(24px,7vw,30px)] font-extrabold uppercase tracking-wide sm:text-4xl md:text-5xl">
          YOU WANT MORE CASES?
        </p>

        <div className="mx-auto mt-7 grid max-w-[1050px] grid-cols-1 gap-7 sm:mt-10 sm:grid-cols-3 sm:gap-8 md:mt-14 md:gap-12">
          <div className="flex flex-col items-center">
            <img
              src="/assets/16.png"
              alt="Online advertising"
              className="h-20 w-20 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
              loading="lazy"
            />
            <p className="mt-4 text-[16px] font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
              ONLINE
              <br />
              ADVERTISING
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/17.png"
              alt="Real-time and exclusive"
              className="h-20 w-20 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
              loading="lazy"
            />
            <p className="mt-4 text-[16px] font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
              REAL-TIME &amp;
              <br />
              EXCLUSIVE
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/assets/18.png"
              alt="Pre-qualified"
              className="h-20 w-20 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
              loading="lazy"
            />
            <p className="mt-4 text-[16px] font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
              PRE-
              <br />
              QUALIFIED
            </p>
          </div>
        </div>

        <a href="/" className="mx-auto mt-8 inline-flex items-center sm:mt-14 md:mt-16">
          <img
            src="/assets/logo-horizontal.png"
            alt="Accident Payments"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
