export default function FinalCTASection() {
  return (
    <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1200px] text-center text-[#111]">
          <p className="text-3xl font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-4xl md:text-5xl">
            ARE YOU READY TO
          </p>
          <p className="mt-1 text-5xl font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-6xl md:text-7xl">
            SCALE YOUR
          </p>
          <p className="mt-2 text-7xl font-extrabold uppercase leading-none tracking-wide text-brand sm:text-8xl md:text-9xl">
            FIRM?
          </p>

          <a
            className="mx-auto mt-10 inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-lg font-extrabold uppercase tracking-wide text-white sm:mt-12 sm:px-14 sm:py-5 sm:text-xl"
            href="/#booking"
          >
            SCHEDULE A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
