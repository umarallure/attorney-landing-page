import { FaArrowCircleDown } from 'react-icons/fa';

export default function SectionArrow() {
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
