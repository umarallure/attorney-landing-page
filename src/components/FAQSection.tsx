type FaqItem = {
  q: string;
  a: string;
};

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

export default function FAQSection() {
  return (
    <section
      className="relative py-12 sm:py-16"
      id="faq"
      style={{
        backgroundImage: 'url(/assets/background-bg-black.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto w-[min(1200px,94vw)] px-4">
        <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[#f6f6f6]">
          FAQs
        </h2>
        <p className="mt-2 max-w-3xl text-base sm:text-lg leading-relaxed text-[#bfbfbf]">
          Still thinking it through? Here are straight answers.
        </p>
        <div className="mt-6 grid gap-5">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-smooth border border-white/10 bg-black/35 px-5 py-5 text-[#f0f0f0] shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
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
