import { useMemo } from 'react';

export default function CalendlyBookingSection() {
  const calendlyUrl = useMemo(
    () =>
      'https://calendly.com/accidentpayments/mva?hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=AE4010',
    []
  );

  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20" 
      id="booking"
      style={{
        backgroundImage: 'url(/assets/background-bg-black.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto w-[min(1400px,94vw)]">
        {/* Calendly Embed */}
        <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4">
          <div className="w-full overflow-hidden rounded-smooth bg-[#202020] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <iframe 
              className="h-[900px] sm:h-[950px] md:h-[700px] lg:h-[680px] w-full block" 
              src={calendlyUrl} 
              title="Calendly Scheduling" 
              allowFullScreen
            />
          </div>
        </div>

        {/* Content Section - Centered */}
        <div className="relative mt-12 px-4">
          {/* Curved Arrow - Positioned Absolutely to Overlap */}
          <div className="hidden lg:block absolute left-[2%] top-[-160px] w-[200px] xl:w-[250px] z-20">
            <img 
              src="/assets/curved-arrow-png-9.png" 
              alt="Arrow pointing upward to Calendly" 
              className="w-full h-auto scale-y-[-1] -rotate-45"
            />
          </div>

          {/* Content Card - Single Centered Div with Grid Layout */}
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[24px] ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* LEFT: Text Content */}
              <div 
                className="relative z-10 flex flex-col justify-center p-4 sm:p-8 bg-transparent"
              >
                <h2 className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] text-white mb-6">
                  Unlock High-Value Signed Cases
                </h2>
                <p className="text-[clamp(16px,2vw,20px)] leading-relaxed text-brand mb-8">
                  Get real accident victims, pre-qualified and ready to consult without wasting time or budget.
                </p>
                <div className="hidden lg:block">
                  <div>
                    <a
                      className="inline-flex items-center justify-center rounded-[8px] bg-gradient-to-r from-brand via-[#c24e1a] to-brand hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)] px-8 py-4 text-[16px] sm:text-[18px] font-bold text-[#fef7f2] transition-all hover:scale-105 shadow-glow mb-6"
                      href="#booking"
                    >
                      SCHEDULE A CALL
                    </a>
                  </div>
                  <p className="text-[14px] sm:text-[16px] text-white/80 font-medium">
                    No long contracts • Exclusive territories • Transparent ROI
                  </p>
                </div>
              </div>

              {/* RIGHT: Video Section */}
              <div className="relative h-full min-h-[400px] lg:min-h-full bg-[#000000]">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/videos/Intro-for-Landing-Page.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>

            <div className="lg:hidden mt-8 px-8 sm:px-12 pb-8 sm:pb-12 text-center">
              <a
                className="inline-flex w-full items-center justify-center rounded-[8px] bg-gradient-to-r from-brand via-[#c24e1a] to-brand hover:shadow-[0_14px_30px_rgba(174,64,16,0.30)] px-6 py-4 text-[16px] font-bold text-[#fef7f2] transition-all shadow-glow"
                href="#booking"
              >
                SCHEDULE A CALL
              </a>
              <p className="mt-6 text-[14px] text-white/80 font-medium">
                No long contracts • Exclusive territories • Transparent ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}