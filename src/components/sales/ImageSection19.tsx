export default function ImageSection19() {
  return (
    <section
      className="relative snap-start sales-slide sales-slide-no-surface flex w-full items-center justify-center px-4 py-6 sm:px-10 sm:py-10"
      style={{ height: 'calc(100dvh - var(--sales-header))' }}
    >
      <div className="flex h-full w-full max-w-[1400px] min-h-0 flex-col items-center text-center text-[#111]">
        <p className="mx-auto max-w-[980px] text-[clamp(22px,5.2vw,44px)] font-extrabold uppercase leading-none tracking-[0.04em] text-brand">
          Real-Time Revenue<br />Zero Effort
        </p>
        <p className="mx-auto mt-1 max-w-[980px] text-[clamp(14px,3.2vw,20px)] font-semibold leading-snug text-[#111]/80 sm:mt-2">
          Track every signed case and firm growth in your private portal.
        </p>

        <div className="mt-3 flex w-full flex-1 min-h-0 items-center justify-center sm:mt-6">
          {/* Desktop/tablet */}
          <img
            src="/assets/19.png"
            alt="Lawyer portal preview"
            className="hidden h-full w-full max-w-[1320px] object-contain sm:block"
            loading="lazy"
          />
          {/* Mobile */}
          <img
            src="/assets/dashboard-(mobile).png"
            alt="Lawyer portal preview (mobile)"
            className="mx-auto block h-full w-auto max-w-[92%] object-contain sm:hidden"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
