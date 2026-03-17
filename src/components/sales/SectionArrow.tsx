import { useEffect, useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

type SectionArrowProps = {
  hideAtTop?: boolean;
};

export default function SectionArrow({ hideAtTop = false }: SectionArrowProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>('.sales-scroll');
    const lastSlide = scroller?.querySelector<HTMLElement>('[data-sales-last-slide]');

    if (!scroller || !lastSlide) return;

    const updateHidden = () => {
      const atTop = hideAtTop && scroller.scrollTop <= 12;
      const rootRect = scroller.getBoundingClientRect();
      const slideRect = lastSlide.getBoundingClientRect();
      const visibleTop = Math.max(rootRect.top, slideRect.top);
      const visibleBottom = Math.min(rootRect.bottom, slideRect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const ratio = slideRect.height > 0 ? visibleHeight / slideRect.height : 0;
      const atEnd = ratio >= 0.85;
      setHidden(atTop || atEnd);
    };

    const updateHiddenWithAtEnd = (atEnd: boolean) => {
      const atTop = hideAtTop && scroller.scrollTop <= 12;
      setHidden(atTop || atEnd);
    };

    updateHidden();

    const IntersectionObserverCtor = (window as any).IntersectionObserver as
      | (new (
          callback: IntersectionObserverCallback,
          options?: IntersectionObserverInit,
        ) => IntersectionObserver)
      | undefined;

    if (IntersectionObserverCtor) {
      const observer = new IntersectionObserverCtor(
        ([entry]) => {
          const mostlyVisible = entry.isIntersecting && entry.intersectionRatio >= 0.85;
          updateHiddenWithAtEnd(mostlyVisible);
        },
        {
          root: scroller,
          threshold: [0, 0.5, 0.85, 1],
        },
      );

      observer.observe(lastSlide);
      scroller.addEventListener('scroll', updateHidden, { passive: true });
      window.addEventListener('resize', updateHidden);

      return () => {
        observer.disconnect();
        scroller.removeEventListener('scroll', updateHidden);
        window.removeEventListener('resize', updateHidden);
      };
    }

    scroller.addEventListener('scroll', updateHidden, { passive: true });
    window.addEventListener('resize', updateHidden);
    return () => {
      scroller.removeEventListener('scroll', updateHidden);
      window.removeEventListener('resize', updateHidden);
    };
  }, [hideAtTop]);

  if (hidden) return null;

  return (
    <div
      className="pointer-events-none fixed left-1/2 z-30 -translate-x-1/2 text-brand opacity-90"
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
      aria-hidden="true"
    >
      <FaArrowCircleDown className="h-9 w-9 sm:h-11 sm:w-11 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
