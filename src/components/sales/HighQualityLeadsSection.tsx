export default function HighQualityLeadsSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-[420px_1fr] md:gap-14 md:text-left">
          <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
            <img
              src="/assets/12.png"
              alt="High quality leads"
              className="h-40 w-40 object-contain sm:h-60 sm:w-60 md:h-72 md:w-72"
              loading="lazy"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="sales-heading text-brand">
              High Quality
            </p>
            <p className="mt-2 text-[18px] font-extrabold tracking-wide text-brand sm:text-3xl md:text-4xl">
              Search-Engine-Driven Leads
            </p>
            <p className="mt-2 text-[18px] font-extrabold tracking-wide text-[#111] sm:text-3xl md:text-4xl">
              Generated From Users Actively
              <br />
              Looking for Your Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
