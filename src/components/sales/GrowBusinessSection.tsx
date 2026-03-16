export default function GrowBusinessSection() {
  return (
    <section className="relative snap-start sales-slide flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-14">
      <div className="w-full max-w-[1200px] text-center text-[#111]">
        <img
          src="/assets/11.png"
          alt="Accident Payments"
          className="mx-auto h-[60px] w-auto object-contain sm:h-[90px] md:h-[110px]"
          loading="lazy"
        />

        <p className="mt-6 text-[20px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#111] sm:mt-8 sm:text-[32px]">
          WE WANT TO HELP
          <br />
          GROW YOUR BUSINESS
        </p>

        <p className="mt-3 text-[16px] font-extrabold leading-[1.2] text-[#111] sm:mt-4 sm:text-[30px]">
          Not Just Give You Busy work
        </p>

        <div className="mt-7 flex justify-center sm:mt-10">
          <div className="max-w-[980px] bg-brand px-2 py-2 text-center text-[clamp(22px,6vw,30px)] font-extrabold uppercase leading-none tracking-[0.04em] text-[#d9d9d9] sm:text-7xl">
            SO HOW DOES IT WORK
          </div>
        </div>
      </div>
    </section>
  );
}
