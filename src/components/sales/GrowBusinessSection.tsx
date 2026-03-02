export default function GrowBusinessSection() {
  return (
    <section className="relative snap-start h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center px-4 py-10 sm:px-10 sm:py-14">
        <div className="w-full max-w-[1200px] text-center text-[#111]">
          <img
            src="/assets/11.png"
            alt="Accident Payments"
            className="mx-auto h-[70px] w-auto object-contain sm:h-[90px] md:h-[110px]"
            loading="lazy"
          />

          <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#111] sm:text-[32px]">
            WE WANT TO HELP
            <br />
            GROW YOUR BUSINESS
          </p>

          <p className="mt-4 text-[2px] font-extrabold leading-[1.2] text-[#111] sm:text-[30px]">
            Not Just Give You Busy work
          </p>

          <div className="mt-10 flex justify-center">
            <div className="bg-brand px-2 py-2 text-center text-3xl sm:text-7xl font-extrabold uppercase leading-none tracking-[0.04em] text-[#d9d9d9] ">
              SO HOW DOES IT WORK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
