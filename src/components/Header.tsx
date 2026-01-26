export default function Header() {
  return (
    <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#202020] border-b border-white/10">
      <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between py-3">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <img src="/assets/logo-white.png" alt="Accident Payments" className="h-7 w-auto sm:h-8 md:h-9" />
        </div>
        <div className="hidden items-center gap-4 text-muted font-semibold md:flex">
          <a href="#booking" className="hover:text-bone transition-colors">Book a call</a>
          <a href="#faq" className="hover:text-bone transition-colors">FAQs</a>
        </div>
        <a
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-3 py-1.5 text-[13px] sm:px-4 sm:py-2 sm:text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
          href="#booking"
        >
          BOOK A CALL
        </a>
      </div>
    </nav>
  );
}
