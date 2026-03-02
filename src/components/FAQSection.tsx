import { useLazyBackground } from '@/hooks/useLazyBackground';
import { Info } from 'lucide-react';

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: 'Are These Signed Cases Exclusive?',
    a: "Yes. We never double-sell any cases. Once we sign your law firm’s retainer for a customer, it exclusively belongs to you.",
  },
  {
    q: 'Do You Handle MVA And Personal Injury?',
    a: 'We specialize in high-value torts, with a primary focus on motor vehicle accident',
  },
  {
    q: 'What If A Signed Case Is Unqualified?',
    a: "We have a transparent credit policy for any signed case that doesn’t meet the pre-agreed vetting criteria. With us, you approve before you pay.",
  },
  {
    q: 'How are cases sourced?',
    a: 'Targeted digital campaigns for high-intent victims, followed by a rigorous intake and qualification process.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'We structure partnerships based on mutual growth and performance alignment.',
  },
];

export default function FAQSection() {
  const { elementRef, loaded } = useLazyBackground('/assets/background-bg-black.png');

  return (
    <section
      ref={elementRef}
      className="relative py-12 sm:py-16"
      id="faq"
      style={{
        backgroundImage: loaded ? 'url(/assets/background-bg-black.png)' : 'none',
        backgroundColor: loaded ? 'transparent' : '#202020',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <div className="mx-auto w-[min(1200px,94vw)] px-4">
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[clamp(18px,2.8vw,28px)] font-extrabold text-[#f6f6f6]">Limited Firm Partnerships</p>
          <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[#bfbfbf]">
            To maintain case quality and exclusivity, we limit the number of firms we partner with per state.
          </p>

          <div className="mt-6 space-y-2 text-[clamp(18px,3.2vw,30px)] font-medium uppercase leading-tight tracking-[0.02em] text-[#f6f6f6]">
            <p>
              WE DO <span className="font-extrabold text-brand">NOT OVERSATURATE</span> MARKETS.
            </p>
            <p>
              WE DO <span className="font-extrabold text-brand">NOT COMPETE</span> WITH OUR OWN PARTNERS.
            </p>
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-[#bfbfbf]">
            If you’re ready to scale signed case volume, schedule your strategy call now.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-pill bg-brand px-12 py-4 text-[16px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-[1px]"
              >
                SCHEDULE A CALL
              </a>

              <a
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-pill border border-white/25 bg-[#f3f3f3] px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#111] transition hover:-translate-y-[1px] hover:bg-[#e9e9e9]"
                href="/sales"
              >
                <Info className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                MORE INFO
              </a>
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-center text-[clamp(24px,4vw,36px)] font-bold text-[#f6f6f6]">
          FAQs
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-base sm:text-lg leading-relaxed text-[#bfbfbf]">
          Still thinking it through? Here are straight answers.
        </p>
        <div className="mx-auto mt-8 grid max-w-[980px] gap-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-smooth border border-white/10 bg-white/10 px-6 py-6 text-[#f0f0f0] shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <p className="text-sm sm:text-base font-extrabold">{item.q}</p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#cfcfcf]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
