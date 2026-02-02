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
          <div className="mb-0 sm:mb-20">
            <div className="mx-auto max-w-[1100px] text-center">
              <p className="text-[24px] sm:text-[32px] lg:text-[48px] font-extrabold leading-[1.05] text-brand">
                You Get Signed Cases.
              </p>
              <p className="mt-2 text-[24px] sm:text-[32px] lg:text-[48px] font-extrabold leading-[1.05] text-white">
                We Do the Selling.
              </p>

              <div className="mt-8 flex justify-center sm:justify-end relative">
                <div className="hidden lg:block absolute right-[850px] top-[-120px] w-[100px] xl:w-[150px] z-20 pointer-events-none">
                  <img
                    src="/assets/curved-arrow-png-9.png"
                    alt="Arrow pointing upward to Calendly"
                    className="w-full h-auto rotate-45"
                  />
                </div>
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
            <div className="px-4 sm:px-12 pt-8 sm:pt-12 text-center">
              <h2 className="text-2xl lg:4xl font-bold leading-[1.1] text-brand">
                Cases Qualified, Signed, and Delivered.
              </h2>
              <p className="mt-3 text-xl lg:4xl leading-relaxed text-white/85">
                We qualify, follow up, and sign accident cases before sending them to your firm.
              </p>
            </div>

            <div className="mt-8 px-2 sm:px-20">
              <div className="relative w-full overflow-hidden rounded-[10px] bg-[#000000]">
                <video
                  className="w-full h-auto object-cover"
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

            <div className="mt-8 px-4 sm:px-12 pb-8 sm:pb-12 text-center">
              <a
                className="inline-flex items-center justify-center rounded-pill bg-gradient-to-r from-brand via-[#cc3f08] to-brand hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)] px-10 py-4 text-[16px] sm:text-[18px] font-bold text-[#fef7f2] transition-all shadow-glow"
                href="#booking"
              >
                SCHEDULE A CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}