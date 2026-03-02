export default function HelpedLawFirmsSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[1fr_auto_1fr] md:gap-14 md:text-left">
            <div className="text-center">
              <p className="text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                WE HAVE HELPED OVER
              </p>
              <p className="mt-4 text-[120px] font-extrabold leading-none text-brand sm:text-[160px] md:text-[190px]">
                150
              </p>
              <p className="mt-4 text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                LAW FIRMS
              </p>
            </div>

            <div className="mx-auto hidden h-72 w-px bg-[#111] md:block" />

            <div className="text-center md:text-left">
              <p className="text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                IT'S TIME TO GET STARTED
              </p>
              <p className="mt-5 text-xl font-extrabold leading-snug text-[#111] sm:text-2xl">
                We Have Room for FIVE More
                <br />
                People In This Program.
              </p>
              <div className="mt-6">
                <span className="inline-block bg-[#111] px-3 py-1 text-lg font-extrabold uppercase tracking-wide text-[#d9d9d9] sm:text-xl">
                  HOW CAN WE HELP YOU?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
