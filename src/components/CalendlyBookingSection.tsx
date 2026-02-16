import { useEffect, useMemo, useRef, useState } from 'react';
import { LazyMotion, domAnimation, m, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function CalendlyBookingSection() {
  const calendlyUrl = useMemo(
    () =>
      'https://calendly.com/accidentpayments/mva?hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=CC3F08',
    []
  );

  const [mobileIframeHeight, setMobileIframeHeight] = useState<number>(1189);
  const [isMobile, setIsMobile] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const mobileDashboardRef = useRef<HTMLDivElement>(null);
  const [dashboardLift, setDashboardLift] = useState(60);
  const [dashboardTilt, setDashboardTilt] = useState(12);
  const [cardLift, setCardLift] = useState(0);
  const [shouldLoadCalendly, setShouldLoadCalendly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileDashboardRef,
    offset: ['start 0.95', 'end 0.2'],
  });
  const mobileProgress = useSpring(mobileScrollProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.9,
  });
  const mobileDashboardY = useTransform(mobileProgress, [0, 1], [60, 0]);
  const mobileCardDown = useTransform(mobileProgress, [0, 1], [0, 350]);
  const mobileCardUp = useTransform(mobileProgress, [0, 1], [0, -350]);

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
    if (isMobile) return;
    const element = dashboardRef.current;
    if (!element) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;
      const start = viewportHeight * 0.9;
      const end = viewportHeight * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setDashboardLift(60 - progress * 60);
      setDashboardTilt(12 - progress * 12);
      setCardLift(-20 + progress * 60);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCalendly(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadCalendly) return;
    
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [shouldLoadCalendly]);

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
    <LazyMotion features={domAnimation}>
      <section 
        ref={sectionRef}
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
                  <Image
                    src="/assets/curved-arrow-png-9.png"
                    alt="Arrow pointing upward to Calendly"
                    width={150}
                    height={150}
                    className="w-full h-auto rotate-45"
                    priority
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

        {/* Content Section */}
        <div className="relative mt-12">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-12 pt-8 sm:pt-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold leading-[1.1] text-brand">
              Cases Qualified, Signed, and Delivered.
            </h2>
            <p className="mt-3 text-xl lg:text-2xl leading-relaxed text-white/85">
              We qualify, follow up, and sign accident cases before sending them to your firm.
            </p>
          </div>

          <div ref={mobileDashboardRef} className="mx-auto mt-8 w-full max-w-[520px] px-6 sm:hidden">
            <div className="relative">
              <m.div style={{ y: mobileDashboardY }}>
                <Image
                  src="/assets/Dashboard-Mobile.png"
                  alt="Accident Payments dashboard preview"
                  width={520}
                  height={400}
                  className="block w-full"
                  priority
                  fetchPriority="high"
                />
              </m.div>
              <m.div 
                className="pointer-events-none absolute right-[-6%] top-[8%] w-[200px] max-w-[58%] drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
                style={{ y: mobileCardDown }}
              >
                <Image
                  src="/assets/invoice-card-mobile.png"
                  alt="Intake map card"
                  width={200}
                  height={150}
                  loading="lazy"
                />
              </m.div>
              <m.div
                className="pointer-events-none absolute bottom-[-1%] left-[-4%] w-[220px] max-w-[58%] drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)]"
                style={{ y: mobileCardUp }}
              >
                <Image
                  src="/assets/map-card-mobile.png"
                  alt="Invoice summary card"
                  width={220}
                  height={150}
                  loading="lazy"
                />
              </m.div>
            </div>
          </div>

          <div
            ref={dashboardRef}
            className="mx-auto mt-8 hidden w-full max-w-[1500px] sm:block md:px-12"
          >
            <div className="relative">
              <div
                style={{
                  transform: `perspective(1000px) translateY(${dashboardLift}px) rotateX(${dashboardTilt}deg)`,
                  transition: 'transform 0.2s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src="/assets/Dashboard-Desktop.png"
                  alt="Accident Payments dashboard preview"
                  width={1500}
                  height={900}
                  className="block w-full"
                  priority
                  fetchPriority="high"
                />
              </div>
              <div
                className="pointer-events-none absolute right-[-20%] top-[-15%] w-[960px] max-w-[100%] drop-shadow-[0_20px_34px_rgba(0,0,0,0.35)]"
                style={{
                  transform: `translateY(${cardLift}px)`,
                  transition: 'transform 0.2s ease-out',
                }}
              >
                <Image
                  src="/assets/invoice-card-desktop.png"
                  alt="Intake map card"
                  width={960}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute bottom-[15%] left-[0%] w-[960px] max-w-[33%] drop-shadow-[0_20px_34px_rgba(0,0,0,0.35)]">
                <Image
                  src="/assets/map-card-desktop.png"
                  alt="Invoice summary card"
                  width={960}
                  height={600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1100px] px-4 sm:px-12 pt-8 pb-8 sm:pb-12 text-center">
            <a
              className="inline-flex items-center justify-center rounded-pill bg-gradient-to-r from-brand via-[#cc3f08] to-brand hover:shadow-[0_14px_30px_rgba(204,63,8,0.30)] px-10 py-4 text-[16px] sm:text-[18px] font-bold text-[#fef7f2] transition-all shadow-glow"
              href="#booking"
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  </LazyMotion>
  );
}