import { Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-sm text-[#a6a6a6]">
      <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-[220px] flex-col items-stretch gap-2 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-2">
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-3 py-1.5 sm:w-auto sm:px-4 sm:py-2 text-[13px] sm:text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
            href="#booking"
          >
            SCHEDULE A CALL
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-pill border border-brand bg-[#f3f3f3] px-7 py-2.5 text-[14px] font-semibold text-brand transition hover:-translate-y-[1px] hover:bg-[#e9e9e9]"
            href="/sales"
          >
            <Info className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
            MORE INFO
          </a>
        </div>
        <a href="/" className="inline-flex items-center">
          <img
            src="/assets/logo-white.png"
            alt="Accident Payments"
            className="h-7 sm:h-8 md:h-9 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
