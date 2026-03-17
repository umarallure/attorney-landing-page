export default function FinalCTASection() {
  return (
    <section
      className="snap-start sales-slide flex w-full items-center justify-center px-4 py-8 sm:px-10 sm:py-14"
      data-sales-last-slide
    >
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <p className="sales-heading text-[#111]">
          Are You Ready to
          <br />
          Scale Your
          <br />
          <span className="text-brand">Firm?</span>
        </p>

        <a
          className="mx-auto mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-[14px] font-extrabold tracking-wide text-white sm:mt-12 sm:px-14 sm:py-5 sm:text-xl"
          href="/#booking"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
