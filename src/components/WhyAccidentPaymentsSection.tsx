import Image from 'next/image';
import VideoCarouselSection from './VideoCarouselSection';
import { Info } from 'lucide-react';

export default function WhyAccidentPaymentsSection() {
  return (
    <section className="bg-[#f3f3f3] py-12 sm:py-16" id="why-accident-payments">
      <VideoCarouselSection />
      <div className="mx-auto w-[min(1200px,94vw)] px-4 text-center">
        <div className="flex items-baseline justify-center gap-2 mt-4 lg:mt-16">
          <h3 className="text-2xl lg:text-4xl font-medium text-brand">Why</h3>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#111]">
            <span className="text-brand">Accident Payments?</span>
          </h2>
        </div>
        <p className="mx-auto mt-2 max-w-4xl text-sm sm:text-lg font-medium leading-relaxed text-[#444]">
          We don't generate leads. We qualify, follow up, and deliver signed cases ready for your law firm.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <Image src="/assets/1.png" alt="Exclusive lead delivery" width={112} height={112} className="h-24 w-auto sm:h-28" loading="lazy" />
            <p className="mt-2 text-lg font-bold tracking-wide text-brand">EXCLUSIVE</p>
            <p className="text-2xl sm:text-3xl font-bold text-brand">SALES TEAM</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/assets/2.png" alt="Fast follow-up system" width={112} height={112} className="h-24 w-auto sm:h-28" loading="lazy" />
            <p className="mt-2 text-lg font-extrabold tracking-wide text-brand">CUSTOMIZED</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand">CASE DELIVERY</p>
          </div>

          <div className="flex flex-col items-center">
            <Image src="/assets/3.png" alt="Premium case quality" width={112} height={112} className="h-24 w-auto sm:h-28" loading="lazy" />
            <p className="mt-2 text-lg font-extrabold tracking-wide text-brand">EXCLUSIVE PREMIUM</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-brand">CASE QUALITY</p>
          </div>
        </div>

        <p className="mt-8 text-sm sm:text-sm font-semibold text-[#666]">
          Trusted by personal injury law firms to close more cases without expanding their in-house sales and marketing team.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-col items-center justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-pill bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-12 py-5 text-[18px] sm:text-[20px] font-extrabold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
            >
              SCHEDULE A CALL
            </a>

            <a
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-pill border border-brand bg-transparent px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-brand transition hover:-translate-y-[1px] hover:bg-white/5"
              href="/sales"
            >
              <Info className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
              MORE INFO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
