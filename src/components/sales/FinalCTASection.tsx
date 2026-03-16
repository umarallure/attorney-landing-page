export default function FinalCTASection() {
  return (
    <section className="snap-start sales-slide flex w-full items-center justify-center px-4 py-8 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <p className="text-[clamp(20px,6vw,30px)] font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-4xl md:text-5xl">
          ARE YOU READY TO
        </p>
        <p className="mt-1 text-[clamp(28px,9vw,48px)] font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-6xl md:text-7xl">
          SCALE YOUR
        </p>
        <p className="mt-2 text-[clamp(44px,14vw,72px)] font-extrabold uppercase leading-none tracking-wide text-brand sm:text-8xl md:text-9xl">
          FIRM?
        </p>

        <a
          className="mx-auto mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-[14px] font-extrabold uppercase tracking-wide text-white sm:mt-12 sm:px-14 sm:py-5 sm:text-xl"
          href="/#booking"
        >
          SCHEDULE A CALL
        </a>
      </div>
    </section>
  );
}
