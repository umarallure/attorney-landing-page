export default function HighQualityLeadsSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 py-10 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[420px_1fr] md:gap-14 md:text-left">
            <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
              <img
                src="/assets/12.png"
                alt="High quality leads"
                className="h-48 w-48 object-contain sm:h-60 sm:w-60 md:h-72 md:w-72"
                loading="lazy"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-5xl font-extrabold uppercase tracking-wide text-brand sm:text-6xl md:text-7xl">
                HIGH QUALITY
              </p>
              <p className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-brand sm:text-3xl md:text-4xl">
                SEARCH-ENGINE-DRIVEN LEADS
              </p>
              <p className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl md:text-4xl">
                GENERATED FROM USERS ACTIVELY
                <br />
                LOOKING FOR YOUR SERVICES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
