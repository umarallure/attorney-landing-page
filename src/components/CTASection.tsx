export default function CTASection() {
  return (
    <section className="py-12 sm:py-16" id="cta">
      <div className="mx-auto flex w-[min(1200px,94vw)] flex-col items-center gap-6 px-4 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-4">
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[#f6f6f6]">
            Let's talk about your firm's growth.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#bfbfbf]">
            We only work with a limited number of firms per region to ensure lead exclusivity. Pick a time below for a 15-minute Reality Check on your current marketing.
          </p>
          <a
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-4 py-2.5 text-[14px] sm:px-5 sm:py-3 sm:text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
            href="#booking"
          >
            Book my Case Growth Audit
          </a>
        </div>
      </div>
    </section>
  );
}
