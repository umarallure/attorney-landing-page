import Head from 'next/head';
import { useMemo } from 'react';

type MethodItem = {
  title: string;
  body: string;
};

type StepItem = MethodItem;

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

const method: MethodItem[] = [
  {
    title: 'Selective Sourcing',
    body:
      "We don't use bait-and-switch ads. We target high-intent searchers looking for real legal help in your practice areas.",
  },
  {
    title: 'The 5-Point Vetting',
    body:
      'Every lead is screened for statute of limitations, liability, and injury severity before they reach your desk.',
  },
  {
    title: 'Real-Time Handoff',
    body:
      "We don't let leads sit in spreadsheets. They're delivered instantly so you can strike while the iron is hot.",
  },
];

const steps: StepItem[] = [
  {
    title: 'The Strategy Audit',
    body: 'We look at your current intake and identify where you’re losing money.',
  },
  {
    title: 'Custom Pipeline Build',
    body: 'We launch a localized campaign targeting your specific practice areas.',
  },
  {
    title: 'Scalable Growth',
    body: 'You receive high-intent inquiries and focus on what you do best—practicing law.',
  },
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
      'https://calendly.com/accidentpayments/mva?hide_event_type_details=1&hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=AE4010',
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
              <a href="#why" className="hover:text-bone transition-colors">Why this matters</a>
              <a href="#method" className="hover:text-bone transition-colors">Method</a>
              <a href="#booking" className="hover:text-bone transition-colors">Book a call</a>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-4 py-2 text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
              href="#booking"
            >
              Check availability
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
          <div className="relative z-10 mx-auto grid w-[min(1200px,94vw)] items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                High-Intent | Human-Vetted
              </div>
              <h1 className="mt-3 text-[clamp(34px,5vw,54px)] font-bold leading-[1.05] text-[#fdf7f4]">
                You don’t need more leads. You need more signed cases.
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-[#cfcfcf]">
                Most marketing agencies send you data points. We send you people who have already been vetted, qualified, and are waiting for your call. Stop chasing prospects and start growing your firm with a predictable case pipeline.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-pill border border-transparent bg-gradient-to-r from-brand via-[#c24e1a] to-brand px-5 py-3 text-[15px] font-semibold text-[#fef7f2] shadow-glow transition hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)]"
                  href="#booking"
                >
                  Check availability in my region
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-pill border border-white/15 bg-white/5 px-5 py-3 text-[15px] font-semibold text-bone transition hover:border-white/25"
                  href="#process"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    className="rounded-pill border border-white/10 bg-white/10 px-3 py-2 text-[13px] font-semibold text-[#f2f2f2]"
                    key={pill}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div>
                <h4 className="text-lg font-semibold text-[#f7f7f7]">The Partnership</h4>
                <p className="mt-1 text-sm text-[#cfcfcf]">
                  A qualification-first model designed to end junk leads. Built for firms that want a predictable pipeline.
                </p>
              </div>
              <div className="rounded-smooth border border-white/10 bg-gradient-to-br from-[rgba(174,64,16,0.08)] to-[rgba(255,255,255,0.02)] p-4" id="booking">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-[17px] font-bold text-[#f7f7f7]">Strategy Audit</div>
                    <div className="text-sm text-[#bfbfbf]">15 min | Exclusive per region</div>
                  </div>
                  <span className="rounded-pill border border-[rgba(174,64,16,0.4)] bg-[rgba(174,64,16,0.14)] px-3 py-1 text-sm font-semibold text-[#fdf7f4]">
                    Limited spots
                  </span>
                </div>
                <div className="overflow-hidden rounded-smooth border border-white/10 bg-black/40">
                  <iframe className="h-[650px] w-full" src={calendlyUrl} title="Calendly Scheduling" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="why">
          <div className="mx-auto grid w-[min(1200px,94vw)] gap-5 md:grid-cols-[1.3fr,1fr]">
            <div>
              <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#f6f6f6]">Why most legal lead generation feels like a gamble.</h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#bfbfbf]">
                You’ve been there—paying for leads that don't pick up the phone, or worse, don't even have a valid claim. It’s exhausting and expensive. We flipped the script with a Human-Vetting Protocol to ensure every person you speak with actually fits your ideal client profile.
              </p>
            </div>
            <div className="rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <h3 className="text-xl font-semibold text-[#f3f3f3]">Standard Lead Gen</h3>
              <p className="mt-1 text-[#c7c7c7]">Spray-and-pray ads, no exclusivity, cold outreach, no real vetting.</p>
              <div className="my-4 h-px w-full bg-white/10" />
              <h3 className="text-xl font-semibold text-[#f3f3f3]">High-Intent Case Acquisition</h3>
              <p className="mt-1 text-[#c7c7c7]">Selective sourcing, human screening, exclusive delivery, instant handoff.</p>
            </div>
          </div>
        </section>

        <section className="py-16" id="method">
          <div className="mx-auto w-[min(1200px,94vw)]">
            <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#f6f6f6]">A partnership, not a transaction.</h2>
            <p className="mt-2 max-w-3xl text-lg leading-relaxed text-[#bfbfbf]">The humanized approach that keeps your intake team talking to real cases.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {method.map((item) => (
                <div key={item.title} className="rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <h3 className="text-lg font-semibold text-[#f3f3f3]">{item.title}</h3>
                  <p className="mt-1 text-[#c7c7c7] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="proof">
          <div className="mx-auto grid w-[min(1200px,94vw)] gap-5 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-smooth border border-white/15 bg-gradient-to-br from-[rgba(174,64,16,0.25)] to-[rgba(255,255,255,0.04)] p-6 text-[#f8f8f8] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="pointer-events-none absolute -top-6 left-4 text-[60px] text-white/10">“</div>
              <p className="relative z-10 leading-relaxed">
                "Since switching to this model, our cost-per-signed-case dropped by 42%. We’re no longer wasting hours on the phone with people who don't have a case."
              </p>
              <p className="relative z-10 mt-3 font-bold text-[#f3cbb8]">— Managing Partner, Premier Injury Group</p>
            </div>
            <div className="rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <h3 className="text-xl font-semibold text-[#f3f3f3]">Outcomes that matter</h3>
              <p className="mt-1 text-[#c7c7c7]">Signed cases &gt; clicks. We optimize for retained clients, not vanity metrics.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-pill border border-white/10 bg-white/10 px-3 py-2 text-[13px] font-semibold text-[#f2f2f2]">42% lower cost per signed case</span>
                <span className="rounded-pill border border-white/10 bg-white/10 px-3 py-2 text-[13px] font-semibold text-[#f2f2f2]">Real-time human vetting</span>
                <span className="rounded-pill border border-white/10 bg-white/10 px-3 py-2 text-[13px] font-semibold text-[#f2f2f2]">Exclusive per region</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="process">
          <div className="mx-auto w-[min(1200px,94vw)]">
            <h2 className="text-[clamp(28px,4vw,36px)] font-bold text-[#f6f6f6]">How we work together</h2>
            <p className="mt-2 max-w-3xl text-lg leading-relaxed text-[#bfbfbf]">A simple 1-2-3 path from clicking to a signed retainer.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, idx) => (
                <div key={step.title} className="rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-[12px] border border-[rgba(174,64,16,0.4)] bg-[rgba(174,64,16,0.2)] text-[#fef7f2] font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#f3f3f3]">{step.title}</h3>
                  <p className="mt-1 text-[#c7c7c7] leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="cta">
          <div className="mx-auto grid w-[min(1200px,94vw)] gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-4">
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
             <div className="rounded-smooth border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
               <h3 className="text-xl font-semibold text-[#f3f3f3]">Booking</h3>
               <p className="mt-1 text-[#c7c7c7]">No pressure, just strategy. Human-first intake review.</p>
               <div className="mt-3 overflow-hidden rounded-smooth border border-white/10 bg-black/40">
                 <iframe className="h-[650px] w-full" src={calendlyUrl} title="Calendly Scheduling Secondary" allowFullScreen></iframe>
               </div>
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
