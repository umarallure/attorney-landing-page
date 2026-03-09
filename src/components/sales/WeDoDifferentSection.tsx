export default function WeDoDifferentSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="w-full max-w-[1200px] text-center text-[#111]">
          <h2 className="text-[20px] font-extrabold leading-[1.25] sm:text-[28px]">
            But Here At <span className="text-brand">Accident Payments</span>, We Do Everything Different.
          </h2>

          <img
            src="/assets/9.png"
            alt="Signed retainers"
            className="mx-auto h-[170px] w-[170px] object-contain sm:h-[220px] sm:w-[200px] md:h-[250px] md:w-[250px]"
            loading="lazy"
          />

          <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[30px] md:text-[34px]">
            SIGNED RETAINERS
          </p>

          <a href="/" className="mx-auto inline-flex items-center">
            <img
              src="/assets/logo-horizontal.png"
              alt="Accident Payments"
              className="h-8 w-auto select-none sm:h-10"
              loading="lazy"
            />
          </a>

          <div className="mx-auto mt-6 max-w-[980px] space-y-6 text-[14px] font-semibold leading-relaxed text-[#111] sm:text-[18px]">
            <p>
              We specialize in motor vehicle accident cases and are currently working with over 100 law firms across 44 states closing over 65 fully
              signed cases per day.
            </p>
            <p>
              We don't do outdated marketing strategies like: Radio, Television, Billboards, or Cold Calling.
            </p>
            <p>
              We don't charge our clients anything upfront or any monthly services fees or term agreements where you have to commit to working with us
              before even provided services.
            </p>
            <p>
              We fully handle the process for you. We will provide you with the complete signed retainer, including Accident, Injury and police report.
              There's no need for your secretary or staff to be involved. You'll only need to submit the retainer on your end, and we'll take care of
              everything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
