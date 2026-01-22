export default function WhyAccidentPaymentsSection() {
  return (
    <section className="bg-[#f3f3f3] py-12 sm:py-16" id="why-accident-payments">
      <div className="mx-auto w-[min(1200px,94vw)] px-4 text-center">
        <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[#111]">
          Why <span className="text-brand">Accident Payments?</span>
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[#444]">
          Because, it's built for attorneys who want high-intent, exclusive accident cases
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <img src="/assets/1.png" alt="Exclusive lead delivery" className="h-24 w-auto sm:h-28" />
            <p className="mt-4 text-xs font-extrabold tracking-wide text-brand">EXCLUSIVE</p>
            <p className="mt-1 text-base sm:text-lg font-extrabold text-brand">LEAD DELIVERY</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/2.png" alt="Fast follow-up system" className="h-24 w-auto sm:h-28" />
            <p className="mt-4 text-xs font-extrabold tracking-wide text-brand">FAST FOLLOW-UP</p>
            <p className="mt-1 text-base sm:text-lg font-extrabold text-brand">SYSTEM</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/assets/3.png" alt="Premium case quality" className="h-24 w-auto sm:h-28" />
            <p className="mt-4 text-xs font-extrabold tracking-wide text-brand">PREMIUM</p>
            <p className="mt-1 text-base sm:text-lg font-extrabold text-brand">CASE QUALITY</p>
          </div>
        </div>

        <p className="mt-8 text-xs sm:text-sm font-semibold text-[#666]">
          Trusted by top firms generating consistent monthly growth.
        </p>
      </div>
    </section>
  );
}
