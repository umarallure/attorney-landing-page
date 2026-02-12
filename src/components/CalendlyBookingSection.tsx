import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

export default function CalendlyBookingSection() {
  const calendlyUrl = useMemo(
    () =>
      'https://calendly.com/accidentpayments/mva?hide_gdpr_banner=1&background_color=202020&text_color=DADADA&primary_color=CC3F08',
    []
  );

  const [mobileIframeHeight, setMobileIframeHeight] = useState<number>(1189);
  const [isMobile, setIsMobile] = useState(false);

  const videos = useMemo(() => [
    '/assets/videos/Video-For-GetSignedCases.mp4',
    '/assets/videos/Intro-for-Landing-Page.mp4',
  ], []);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const swipeDirection = useRef<'horizontal' | 'vertical' | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  const slideTo = useCallback((nextIndex: number, direction: 'left' | 'right') => {
    if (isSliding || nextIndex === activeIndex) return;
    setSlideDirection(direction);
    setPendingIndex(nextIndex);

    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    // Allow one frame for the incoming slide to be placed off-screen, then trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSliding(true);
        setTimeout(() => {
          setActiveIndex(nextIndex);
          setPendingIndex(null);
          setIsSliding(false);
        }, 420);
      });
    });
  }, [isSliding, activeIndex]);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % videos.length;
    slideTo(next, 'left');
  }, [activeIndex, videos.length, slideTo]);

  const goPrev = useCallback(() => {
    const prev = (activeIndex - 1 + videos.length) % videos.length;
    slideTo(prev, 'right');
  }, [activeIndex, videos.length, slideTo]);

  // When activeIndex changes (via arrows or auto-advance), play the new video
  useEffect(() => {
    if (!hasStartedRef.current) return;
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    video.currentTime = 0;
    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, [activeIndex]);

  // Only start playing when the video section scrolls into view
  useEffect(() => {
    const section = videoSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          const video = videoRefs.current[0];
          if (!video) return;

          video.currentTime = 0;
          video.muted = false;
          setIsMuted(false);
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const handleEnded = () => goNext();
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [activeIndex, goNext]);

  const toggleMute = useCallback(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, [activeIndex]);

  // Drag-responsive touch swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isSliding) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    swipeDirection.current = null;
    isDragging.current = true;
    setShowSwipeHint(false);
  }, [isSliding]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Lock direction after 10px of movement
    if (swipeDirection.current === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
      swipeDirection.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
    }

    // If vertical, let the page scroll normally
    if (swipeDirection.current === 'vertical') {
      isDragging.current = false;
      setDragOffset(0);
      return;
    }

    // If horizontal, prevent page scroll and track drag
    if (swipeDirection.current === 'horizontal') {
      e.preventDefault();
      setDragOffset(dx);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current || swipeDirection.current !== 'horizontal') {
      isDragging.current = false;
      swipeDirection.current = null;
      setDragOffset(0);
      return;
    }

    const offset = dragOffset;
    isDragging.current = false;
    swipeDirection.current = null;
    setDragOffset(0);

    // Snap threshold: 25% of container width
    const containerWidth = videoSectionRef.current?.offsetWidth ?? 400;
    const snapThreshold = containerWidth * 0.25;

    if (offset < -snapThreshold) {
      goNext();
    } else if (offset > snapThreshold) {
      goPrev();
    }
  }, [dragOffset, goNext, goPrev]);

  // Show swipe hint on mobile when video section comes into view
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(max-width: 639px)').matches;
    if (!isTouchDevice) return;

    const section = videoSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSwipeHint(true);
          setTimeout(() => setShowSwipeHint(false), 3000);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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

        {/* Content Section - Seamless Video */}
        <div ref={videoSectionRef} className="relative mt-12">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-12 pt-8 sm:pt-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold leading-[1.1] text-brand">
              Cases Qualified, Signed, and Delivered.
            </h2>
            <p className="mt-3 text-xl lg:text-2xl leading-relaxed text-white/85">
              We qualify, follow up, and sign accident cases before sending them to your firm.
            </p>
          </div>

          <div className="relative mt-8 mx-auto w-[min(1100px,94vw)]">
            <div className="grid grid-cols-1 sm:grid-cols-[5%_90%_5%] items-center">
              {/* Left arrow - hidden on mobile */}
              <div className="hidden sm:flex items-center justify-center">
                <button
                  onClick={goPrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-brand hover:border-brand hover:scale-110 shadow-lg"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>

              {/* Carousel container */}
              <div
                className="relative w-full overflow-hidden rounded-[16px]"
                style={{ aspectRatio: '16/9', maxHeight: '70vh', touchAction: 'pan-y' }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#1a1a1a] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

                {/* Sliding track */}
                {videos.map((src, i) => {
                  const isActive = i === activeIndex;
                  const isPending = i === pendingIndex;
                  const isDragActive = dragOffset !== 0 && !isSliding;
                  const nextIdx = (activeIndex + 1) % videos.length;
                  const prevIdx = (activeIndex - 1 + videos.length) % videos.length;
                  const isDragPeek = isDragActive && (i === nextIdx || i === prevIdx);
                  const isVisible = isActive || isPending || isDragPeek;

                  let transform = 'translateX(100%)';
                  if (isActive && !isSliding) {
                    transform = `translateX(${dragOffset}px)`;
                  } else if (isActive && isSliding) {
                    transform = slideDirection === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
                  } else if (isPending && !isSliding) {
                    transform = slideDirection === 'left' ? 'translateX(100%)' : 'translateX(-100%)';
                  } else if (isPending && isSliding) {
                    transform = 'translateX(0)';
                  } else if (isDragActive && i === nextIdx) {
                    transform = `translateX(calc(100% + ${dragOffset}px))`;
                  } else if (isDragActive && i === prevIdx) {
                    transform = `translateX(calc(-100% + ${dragOffset}px))`;
                  }

                  const useTransition = isSliding && !isDragActive;

                  return (
                    <div
                      key={src}
                      className={`absolute inset-0 ${
                        useTransition ? 'transition-transform duration-[400ms] ease-in-out' : ''
                      }`}
                      style={{
                        transform,
                        visibility: isVisible ? 'visible' : 'hidden',
                      }}
                    >
                      <video
                        ref={(el) => { videoRefs.current[i] = el; }}
                        className="absolute inset-0 h-full w-full object-cover"
                        preload={i === 0 ? 'auto' : 'metadata'}
                        playsInline
                        {...(i === 0 ? { fetchpriority: 'high' } as Record<string, string> : {})}
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                    </div>
                  );
                })}

                {/* Mute / Unmute button */}
                {isMuted ? (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                    aria-label="Unmute video"
                  >
                    <VolumeX className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 opacity-0 hover:opacity-100"
                    aria-label="Mute video"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Right arrow - hidden on mobile */}
              <div className="hidden sm:flex items-center justify-center">
                <button
                  onClick={goNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-brand hover:border-brand hover:scale-110 shadow-lg"
                  aria-label="Next video"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="mt-5 flex items-center justify-center gap-2.5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => slideTo(i, i > activeIndex ? 'left' : 'right')}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-8 bg-brand'
                      : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            {/* Swipe hint - mobile only */}
            {showSwipeHint && (
              <div className="sm:hidden mt-3 flex items-center justify-center gap-1.5 text-white/40 text-xs animate-pulse">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>Swipe to navigate</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            )}
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
  );
}