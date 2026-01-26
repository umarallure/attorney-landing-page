export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-sm text-[#a6a6a6]">
      <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/assets/logo-white.png" 
            alt="Accident Payments" 
            className="h-7 sm:h-8 md:h-9 w-auto" 
          />
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-3 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
          href="#booking"
        >
          SCHEDULE A CALL
        </a>
      </div>
    </footer>
  );
}
