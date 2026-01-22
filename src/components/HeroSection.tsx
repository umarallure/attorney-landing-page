export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
      id="top"
      style={{
        backgroundImage: 'url(/assets/background-bg-black.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto flex w-[min(1200px,94vw)] flex-col gap-6 sm:gap-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-3 py-2 text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            High-Intent | Human-Vetted
          </div>
          <h1 className="mt-3 text-[clamp(28px,5vw,54px)] font-bold leading-[1.08] text-[#fdf7f4] px-2">
            You don't need more leads. You need more signed cases.
          </h1>
        </div>
      </div>
    </section>
  );
}
