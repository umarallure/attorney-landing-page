export default function WeDoDifferentSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <h2 className="text-[18px] font-extrabold leading-[1.25] sm:text-[28px]">
          But here at <span className="text-brand">Accident Payments</span>, we do everything different.
        </h2>

        <img
          src="/assets/9.png"
          alt="Signed retainers"
          className="mx-auto mt-3 h-[140px] w-[140px] object-contain sm:mt-0 sm:h-[220px] sm:w-[200px] md:h-[250px] md:w-[250px]"
          loading="lazy"
        />

        <p className="sales-heading mt-5 text-brand sm:mt-8">
          Signed Retainers
        </p>

        <a href="/" className="mx-auto inline-flex items-center">
          <img
            src="/assets/logo-horizontal.png"
            alt="Accident Payments"
            className="h-8 w-auto select-none sm:h-10"
            loading="lazy"
          />
        </a>

        <div className="mx-auto mt-4 max-w-[980px] space-y-4 text-[13px] font-semibold leading-relaxed text-[#111] sm:mt-6 sm:space-y-6 sm:text-[18px]">
          <p>
            We specialize in motor vehicle accident cases and are currently working with over 100 law firms across 44 states closing over 65 fully
            signed cases per day.
          </p>
          <p>
            We don't do outdated marketing strategies like: radio, television, billboards, or cold calling.
          </p>
          <p>
            We don't charge our clients anything upfront or any monthly services fees or term agreements where you have to commit to working with us
            before even provided services.
          </p>
          <p>
            We fully handle the process for you. We will provide you with the complete signed retainer, including accident, injury and police report.
            There's no need for your secretary or staff to be involved. You'll only need to submit the retainer on your end, and we'll take care of
            everything else.
          </p>
        </div>
      </div>
    </section>
  );
}
