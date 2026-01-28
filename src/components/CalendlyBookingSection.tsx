import { useEffect, useMemo, useState } from 'react';

export default function CalendlyBookingSection() {
  const calendlyUrl = useMemo(
    () =>
      'https://calendly.com/accidentpayments/mva?hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=CC3F08',
    []
  );

  const [mobileIframeHeight, setMobileIframeHeight] = useState<number>(1189);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handler = (e: MessageEvent) => {
      if (typeof e.origin === 'string' && !/\.calendly\.com$/i.test(new URL(e.origin).hostname)) return;

      let data: unknown = e.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      if (typeof data !== 'object' || data == null) return;

      const d = data as {
        event?: string;
        payload?: { height?: number };
        height?: number;
      };

      if (d.event !== 'calendly.page_height') return;

      const height = typeof d.payload?.height === 'number' ? d.payload.height : d.height;
      if (typeof height !== 'number') return;

      setMobileIframeHeight(height > 1189 ? 1521 : 1189);
    };

    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [isMobile]);

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
          <div className="mb-20">
            <div className="mx-auto max-w-[1100px] text-center">
              <p className="text-[clamp(40px,10vw,72px)] sm:text-[clamp(56px,7vw,88px)] lg:text-8xl font-medium leading-[1.05] text-brand">
                Hire The Best Quality
              </p>
              <p className="mt-2 text-[clamp(60px,12vw,104px)] sm:text-[clamp(84px,10vw,132px)] lg:text-[clamp(120px,11vw,168px)] font-black leading-[0.95] text-white">
                Sales Team
              </p>

              <div className="mt-8 flex justify-center sm:justify-end relative">
                <div className="hidden lg:block absolute right-[330px] top-[-120px] w-[200px] xl:w-[250px] z-20 pointer-events-none">
                  <img
                    src="/assets/curved-arrow-png-9.png"
                    alt="Arrow pointing upward to Calendly"
                    className="w-full h-auto -rotate-40"
                  />
                </div>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand via-[#cc3f08] to-brand px-12 py-4 sm:px-16 sm:py-6 text-[18px] sm:text-[20px] font-extrabold text-[#fef7f2] shadow-glow transition translate-y-4 hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)]"
                >
                  SCHEDULE A CALL
                </a>
              </div>
            </div>
          </div>

        {/* Calendly Embed */}
        <div className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4">
          <div className="w-full overflow-hidden rounded-smooth bg-[#202020] shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div
              className="calendly-inline-widget w-full h-[1189px] sm:h-[1050px] md:h-[700px] lg:h-[680px]"
              data-url={calendlyUrl}
              data-resize={isMobile ? 'true' : undefined}
              style={{ height: isMobile ? `${mobileIframeHeight}px` : undefined }}
            />
          </div>
        </div>

        {/* Content Section - Centered */}
        <div className="relative mt-12 px-4">
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
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand via-[#cc3f08] to-brand hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)] px-8 py-4 text-[16px] sm:text-[18px] font-bold text-[#fef7f2] transition-all hover:scale-105 shadow-glow mb-6"
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
                className="inline-flex w-full items-center justify-center rounded-[8px] bg-gradient-to-r from-brand via-[#cc3f08] to-brand hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)] px-6 py-4 text-[16px] font-bold text-[#fef7f2] transition-all shadow-glow"
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