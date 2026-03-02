export default function WantMoreCasesSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px] text-center text-[#111]">
          <p className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl md:text-5xl">
            YOU WANT MORE CASES?
          </p>

          <div className="mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:mt-14 md:gap-12">
            <div className="flex flex-col items-center">
              <img
                src="/assets/16.png"
                alt="Online advertising"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                loading="lazy"
              />
              <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                ONLINE
                <br />
                ADVERTISING
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/assets/17.png"
                alt="Real-time and exclusive"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                loading="lazy"
              />
              <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                REAL-TIME &amp;
                <br />
                EXCLUSIVE
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/assets/18.png"
                alt="Pre-qualified"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                loading="lazy"
              />
              <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                PRE-
                <br />
                QUALIFIED
              </p>
            </div>
          </div>

          <img
            src="/assets/logo-horizontal.png"
            alt="Accident Payments"
            className="mx-auto mt-12 h-10 w-auto object-contain sm:mt-14 sm:h-12 md:mt-16 md:h-14"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
