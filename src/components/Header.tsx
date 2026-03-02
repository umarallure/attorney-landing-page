import { Home, Info } from 'lucide-react';

type HeaderProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryIcon?: 'info' | 'home';
  primaryHref?: string;
  position?: 'sticky' | 'fixed';
};

export default function Header({
  secondaryHref = '/sales',
  secondaryLabel = 'MORE INFO',
  secondaryIcon = 'info',
  primaryHref = '#booking',
  position = 'sticky',
}: HeaderProps) {
  const SecondaryIcon = secondaryIcon === 'home' ? Home : Info;

  return (
    <nav className={`${position} left-0 top-0 z-20 w-full border-b border-white/10 bg-[#202020] backdrop-blur-md`}>
      <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between py-3">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <img
            src="/assets/logo-white.png"
            alt="Accident Payments"
            className="h-7 w-auto sm:h-8 md:h-9"
          />
        </div>
        <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border border-brand bg-white px-3 py-1.5 text-[13px] sm:px-4 sm:py-2 sm:text-[15px] font-semibold text-brand transition hover:-translate-y-[1px] hover:bg-white/90"
            href={secondaryHref}
          >
            <SecondaryIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
            {secondaryLabel}
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-3 py-1.5 text-[13px] sm:px-4 sm:py-2 sm:text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
            href={primaryHref}
          >
            SCHEDULE A CALL
          </a>
        </div>
      </div>
    </nav>
  );
}
