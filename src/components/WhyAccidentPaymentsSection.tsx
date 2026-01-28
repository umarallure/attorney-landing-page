export default function WhyAccidentPaymentsSection() {
  return (
    <section className="bg-[#f3f3f3] py-12 sm:py-16" id="why-accident-payments">
      <div className="mx-auto w-[min(1200px,94vw)] px-4 text-center">
        <div className="flex items-baseline justify-center gap-3">
          <h3 className="text-4xl font-medium text-brand">Why</h3>
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[#111]">
            <span className="text-brand">Accident Payments?</span>
          </h2>
        </div>
        <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[#444]">
          We don’t generate leads. We qualify, follow up, and deliver signed cases ready to sign.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <img src="/assets/1.png" alt="Exclusive lead delivery" className="h-24 w-auto sm:h-28" />
            <p className="mt-2 text-lg font-bold tracking-wide text-brand">EXCLUSIVE</p>
            <p className="text-2xl sm:text-3xl font-bold text-brand">SALES TEAM</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/2.png" alt="Fast follow-up system" className="h-24 w-auto sm:h-28" />
            <p className="mt-2 text-lg font-extrabold tracking-wide text-brand">FAST FOLLOW-UP</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand">SYSTEM</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/3.png" alt="Premium case quality" className="h-24 w-auto sm:h-28" />
            <p className="mt-2 text-lg font-extrabold tracking-wide text-brand">PREMIUM</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand">CASE QUALITY</p>
          </div>
        </div>

        <p className="mt-8 text-sm sm:text-sm font-semibold text-[#666]">
          Trusted by personal injury firms to close more cases without expanding their in-house sales team.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-12 py-5 text-[18px] sm:text-[20px] font-extrabold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
          >
            SCHEDULE A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
