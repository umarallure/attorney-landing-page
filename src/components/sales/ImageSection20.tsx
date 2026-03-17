export default function ImageSection20() {
  return (
    <section
      className="relative snap-start sales-slide sales-slide-no-surface flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10"
      style={{ height: 'calc(100dvh - var(--sales-header))' }}
    >
      <div className="flex h-full w-full max-w-[1400px] min-h-0 flex-col items-center justify-center text-center text-[#111]">
        <p className="sales-heading mx-auto max-w-[980px] text-brand">
          Targeted Intake<br />100% Exclusive
        </p>
        <p className="mx-auto mt-1 max-w-[980px] text-[clamp(14px,3.2vw,20px)] font-semibold leading-snug text-[#111]/80 sm:mt-2">
          Pick your states and monitor firm growth in real-time.
        </p>

        <div className="mt-3 flex w-full justify-center sm:mt-4 sm:flex-1 sm:min-h-0 sm:items-start">
          {/* Desktop/tablet */}
          <img
            src="/assets/20.png"
            alt="Intake map preview"
            className="hidden h-full w-full max-w-[1320px] object-contain object-top sm:block"
            loading="lazy"
          />
          {/* Mobile */}
          <img
            src="/assets/intake-(mobile).png"
            alt="Intake map preview (mobile)"
            className="mx-auto block h-[clamp(380px,64vh,680px)] w-auto max-w-[96%] object-contain sm:hidden"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
