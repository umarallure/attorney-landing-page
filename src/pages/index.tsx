import Head from 'next/head';
import { useMemo } from 'react';

type FaqItem = {
  q: string;
  a: string;
};

const pills: string[] = [
  'Human-Vetting Protocol',
  'Exclusive per region',
  'High-intent inquiries',
  'Real-time handoff',
  'PI / MVA / Premises',
];

const faqs: FaqItem[] = [
  {
    q: 'Are these leads exclusive?',
    a: 'Yes. We never double-sell a lead. When you get a notification, that client belongs to you.',
  },
  {
    q: 'Do you handle MVA and Personal Injury?',
    a: 'Yes, we specialize in high-value torts including MVA, Premises Liability, and Workers\' Comp.',
  },
  {
    q: 'What if a lead is unqualified?',
    a: "We have a transparent credit policy for any lead that doesn't meet the pre-agreed vetting criteria.",
  },
];

export default function Home() {
  const calendlyUrl = useMemo(
    () =>
      'https://calendly.com/accidentpayments/mva?hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=AE4010',
    []
  );

  return (
    <>
      <Head>
        <title>Accident Payments | High-Intent Case Pipeline</title>
        <meta
          name="description"
          content="You don’t need more leads. You need more signed cases. Human-vetted, exclusive, high-intent case acquisition for attorneys."
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main>
        <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#202020] border-b border-white/10">
          <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between py-3">
            <div className="flex items-center gap-2 font-bold tracking-tight">
              <img src="/assets/logo-white.png" alt="Accident Payments" className="h-9 w-auto" />
            </div>
            <div className="hidden items-center gap-4 text-muted font-semibold md:flex">
              <a href="#booking" className="hover:text-bone transition-colors">Book a call</a>
              <a href="#faq" className="hover:text-bone transition-colors">FAQs</a>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-4 py-2 text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
              href="#booking"
            >
              BOOK A CALL
            </a>
          </div>
        </nav>

        <section
          className="relative overflow-hidden py-16 md:py-20"
          id="top"
          style={{
            backgroundImage: 'url(/assets/background-bg-black.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 mx-auto flex w-[min(1200px,94vw)] flex-col gap-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                High-Intent | Human-Vetted
              </div>
              <h1 className="mt-3 text-[clamp(34px,5vw,54px)] font-bold leading-[1.05] text-[#fdf7f4]">
                You don’t need more leads. You need more signed cases.
              </h1>
            </div>

            <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4" id="booking">
              <img src="/assets/arrows.png" alt="" className="h-auto w-[560px] opacity-90" />
              <div className="w-full overflow-hidden rounded-smooth bg-[#202020] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                <iframe className="h-[650px] w-full" src={calendlyUrl} title="Calendly Scheduling" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="cta">
          <div className="mx-auto flex w-[min(1200px,94vw)] flex-col items-center gap-6 text-center">
            <div className="flex max-w-3xl flex-col items-center gap-4">
              <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#f6f6f6]">Let’s talk about your firm’s growth.</h2>
              <p className="text-lg leading-relaxed text-[#bfbfbf]">
                We only work with a limited number of firms per region to ensure lead exclusivity. Pick a time below for a 15-minute Reality Check on your current marketing.
              </p>
              <a
                className="inline-flex max-w-[260px] items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-5 py-3 text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
                href="#booking"
              >
                Book my Case Growth Audit
              </a>
            </div>
            <div className="w-full max-w-[1000px] overflow-hidden rounded-smooth bg-[#202020] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <iframe className="h-[650px] w-full" src={calendlyUrl} title="Calendly Scheduling Secondary" allowFullScreen></iframe>
            </div>
          </div>
        </section>

         <section className="py-16" id="faq">
           <div className="mx-auto w-[min(1200px,94vw)]">
             <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#f6f6f6]">FAQs — risk reversal</h2>
             <p className="mt-2 max-w-3xl text-lg leading-relaxed text-[#bfbfbf]">Still thinking it through? Here are straight answers.</p>
             <div className="mt-5 grid gap-3">
               {faqs.map((item) => (
                 <details key={item.q} className="rounded-smooth border border-white/10 bg-white/5 px-4 py-3 text-[#f0f0f0]">
                   <summary className="cursor-pointer text-base font-semibold">{item.q}</summary>
                   <p className="mt-2 text-sm leading-relaxed text-[#cfcfcf]">{item.a}</p>
                 </details>
               ))}
             </div>
           </div>
         </section>

         <footer className="border-t border-white/10 py-7 text-sm text-[#a6a6a6]">
          <div className="mx-auto flex w-[min(1200px,94vw)] flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
             <img src="/assets/logo-white.png" alt="Accident Payments" className="h-9 w-auto" />
            </div>
             <div className="flex flex-wrap gap-3 text-muted">
               <span>Exclusivity-first</span>
               <span>Human vetted</span>
               <span>Case pipelines</span>
             </div>
             <a
               className="inline-flex items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-4 py-2 text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
               href="#booking"
             >
               Book a call
             </a>
           </div>
         </footer>
       </main>
     </>
   );
 }
