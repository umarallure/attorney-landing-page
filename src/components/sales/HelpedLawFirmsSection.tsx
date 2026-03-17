export default function HelpedLawFirmsSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-7 text-center md:grid-cols-[1fr_auto_1fr] md:gap-14 md:text-left">
          <div className="text-center">
            <p className="sales-heading text-[#111]">
              We Have Helped Over
            </p>
            <p className="font-anton mt-3 text-[clamp(96px,22vw,120px)] leading-none text-brand sm:mt-4 sm:text-[160px] md:text-[190px]">
              150
            </p>
            <p className="sales-heading mt-3 text-[#111] sm:mt-4">
              Law Firms
            </p>
          </div>

          <div className="mx-auto hidden h-72 w-px bg-[#111] md:block" />

          <div className="text-center md:text-left">
            <p className="sales-heading text-[#111]">
              It's Time to Get Started
            </p>
            <p className="mt-4 text-[16px] font-extrabold leading-snug text-[#111] sm:mt-5 sm:text-2xl">
              We have room for five more
              <br />
              people in this program.
            </p>
            <div className="mt-5 sm:mt-6">
              <span className="inline-block bg-[#111] px-3 py-1 text-[14px] font-extrabold tracking-wide text-[#d9d9d9] sm:text-xl">
                How can we help you?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
