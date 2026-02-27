import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

export default function VideoCarouselSection() {
  const SLIDE_DURATION = 1;
  const videoPublicIds = useMemo(
    () => [
      'Video-1-For-GetSignedCases_lkcay6',
      'Video-2-For-GetSignedCases_wdjydq',
      'Video-3-for-GetSignedCases_yyokiy',
    ],
    []
  );

  const [videoUrls, setVideoUrls] = useState<(string | null)[]>(() =>
    videoPublicIds.map(() => null)
  );
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const hasQueuedRemainingRef = useRef(false);
  const shouldAutoplayRef = useRef(false);

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
    if (!videoUrls[nextIndex]) return;
    setSlideDirection(direction);
    setPendingIndex(nextIndex);

    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSliding(true);
        setTimeout(() => {
          setActiveIndex(nextIndex);
          setPendingIndex(null);
          setIsSliding(false);
        }, SLIDE_DURATION);
      });
    });
  }, [isSliding, activeIndex, videoUrls, SLIDE_DURATION]);

  const goNext = useCallback(() => {
    if (videoUrls.length === 0) return;
    const next = (activeIndex + 1) % videoUrls.length;
    slideTo(next, 'left');
  }, [activeIndex, videoUrls.length, slideTo]);

  const goPrev = useCallback(() => {
    if (videoUrls.length === 0) return;
    const prev = (activeIndex - 1 + videoUrls.length) % videoUrls.length;
    slideTo(prev, 'right');
  }, [activeIndex, videoUrls.length, slideTo]);

  const playActiveVideo = useCallback(
    (overrideMuted?: boolean) => {
      const video = videoRefs.current[activeIndex];
      if (!video) return;

      video.currentTime = 0;
      video.muted = overrideMuted ?? isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    },
    [activeIndex, isMuted]
  );

  useEffect(() => {
    if (!hasStartedRef.current) return;
    if (!videoUrls[activeIndex]) return;
    playActiveVideo();
  }, [activeIndex, playActiveVideo, videoUrls]);

  useEffect(() => {
    const section = videoSectionRef.current;
    if (!section || videoUrls.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          if (!videoUrls[0]) {
            shouldAutoplayRef.current = true;
            setIsMuted(false);
            return;
          }

          hasStartedRef.current = true;
          setIsMuted(false);
          playActiveVideo(false);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [playActiveVideo, videoUrls]);

  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const handleEnded = () => goNext();
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [activeIndex, goNext]);

  const setVideoUrlAtIndex = useCallback((index: number, url: string | null) => {
    setVideoUrls((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  }, []);

  const fetchVideoUrl = useCallback(async (publicId: string) => {
    const CACHE_VERSION = 'v2';
    const cacheKey = `cloudinary_video_${CACHE_VERSION}_${publicId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await fetch(
      `/api/cloudinary/video-url?publicId=${encodeURIComponent(publicId)}`
    );
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(
        `Failed to fetch video URL for ${publicId}. Status: ${response.status}. Body: ${text}`
      );
    }

    const data = (await response.json()) as { url?: string };
    const url = data.url ?? null;
    
    if (url) {
      sessionStorage.setItem(cacheKey, url);
    }
    
    return url;
  }, []);

  const getThumbnailUrl = useCallback((videoUrl: string | null) => {
    if (!videoUrl) return null;
    try {
      const url = new URL(videoUrl);
      if (!url.pathname.includes('/video/upload/')) return videoUrl;
      const basePath = url.pathname.replace('/video/upload/', '/video/upload/so_auto/');
      const withExtension = basePath.match(/\.(jpg|png|webp|avif)$/)
        ? basePath
        : `${basePath}.jpg`;
      return `${url.origin}${withExtension}`;
    } catch {
      return videoUrl;
    }
  }, []);

  const loadRemainingVideos = useCallback(async () => {
    if (hasQueuedRemainingRef.current) return;
    hasQueuedRemainingRef.current = true;

    for (let i = 1; i < videoPublicIds.length; i += 1) {
      const url = await fetchVideoUrl(videoPublicIds[i]);
      setVideoUrlAtIndex(i, url);
    }
  }, [fetchVideoUrl, setVideoUrlAtIndex, videoPublicIds]);

  useEffect(() => {
    let isMounted = true;

    const fetchFirstUrl = async () => {
      try {
        setIsLoadingVideos(true);
        const url = await fetchVideoUrl(videoPublicIds[0]);
        if (isMounted) {
          setVideoUrlAtIndex(0, url);
          setIsLoadingVideos(false);
          if (shouldAutoplayRef.current && url) {
            hasStartedRef.current = true;
            shouldAutoplayRef.current = false;
            playActiveVideo(false);
          }
        }
      } catch (error) {
        console.error('Failed to load Cloudinary videos', error);
        if (isMounted) {
          setIsLoadingVideos(false);
        }
      }
    };

    fetchFirstUrl();
    return () => {
      isMounted = false;
    };
  }, [fetchVideoUrl, playActiveVideo, setVideoUrlAtIndex, videoPublicIds]);

  const toggleMute = useCallback(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, [activeIndex]);

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

    if (swipeDirection.current === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
      swipeDirection.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
    }

    if (swipeDirection.current === 'vertical') {
      isDragging.current = false;
      setDragOffset(0);
      return;
    }

    if (swipeDirection.current === 'horizontal') {
      e.preventDefault();
      const containerWidth = videoSectionRef.current?.offsetWidth ?? 400;
      const maxDrag = containerWidth * 1;
      const clampedDx = Math.max(-maxDrag, Math.min(maxDrag, dx));
      setDragOffset(clampedDx);
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
    const containerWidth = videoSectionRef.current?.offsetWidth ?? 400;
    const snapThreshold = containerWidth * 0.25;

    if (offset < -snapThreshold) {
      setDragOffset(offset);
      goNext();
      setTimeout(() => setDragOffset(0), SLIDE_DURATION);
    } else if (offset > snapThreshold) {
      setDragOffset(offset);
      goPrev();
      setTimeout(() => setDragOffset(0), SLIDE_DURATION);
    } else {
      setDragOffset(0);
    }
  }, [dragOffset, goNext, goPrev, SLIDE_DURATION]);

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

  return (
    <div
      ref={videoSectionRef}
      className="relative mx-auto w-full max-w-[1400px]"
    >
      {/* Navigation Arrows */}
      <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={goPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-brand hover:border-brand hover:scale-110 shadow-xl"
          aria-label="Previous video"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>
      <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={goNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-brand hover:border-brand hover:scale-110 shadow-xl"
          aria-label="Next video"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden md:overflow-visible min-h-[320px] md:min-h-[520px]"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative w-full flex items-center justify-center min-h-[320px] md:min-h-[520px]"
          style={{ perspective: '1500px' }}
        >
          {videoPublicIds.map((_, i) => {
            const isActive = i === activeIndex;
            const nextIdx = (activeIndex + 1) % videoPublicIds.length;
            const prevIdx = (activeIndex - 1 + videoPublicIds.length) % videoPublicIds.length;
            const isNext = i === nextIdx;
            const isPrev = i === prevIdx;
            const isVisible = isActive || isNext || isPrev;
            const src = videoUrls[i];
            const posterUrl = getThumbnailUrl(src);

            const sideOffset = 'clamp(140px, 32vw, 280px)';
            let transform = 'translateX(-50%) translateY(-50%) scale(1)';
            let left = '50%';
            let zIndex = 10;
            let opacity = 1;
            
            if (isActive) {
              transform = 'translateX(-50%) translateY(-50%) scale(1)';
              left = '50%';
              zIndex = 30;
              opacity = 1;
            } else if (isNext) {
              transform = 'translateX(0) translateY(-50%) scale(0.8)';
              left = `calc(50% + ${sideOffset})`;
              zIndex = 20;
              opacity = 0.5;
            } else if (isPrev) {
              transform = 'translateX(-100%) translateY(-50%) scale(0.8)';
              left = `calc(50% - ${sideOffset})`;
              zIndex = 20;
              opacity = 0.5;
            }

            const useTransition = !isDragging.current;
            const dragTranslate = dragOffset ? ` translateX(${dragOffset}px)` : '';
            const finalTransform = `${transform}${dragTranslate}`;

            return (
              <div
                key={i}
                onClick={() => !isActive && slideTo(i, i > activeIndex ? 'left' : 'right')}
                className={`absolute ${useTransition ? 'transition-all duration-500 ease-out' : ''} ${
                  !isActive ? 'cursor-pointer hover:opacity-90' : ''
                }`}
                style={{
                  transform: finalTransform,
                  left,
                  top: '50%',
                  zIndex,
                  opacity,
                  width: isActive ? '95%' : '80%',
                  maxWidth: isActive ? '850px' : '680px',
                  display: isVisible ? 'block' : 'none',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div 
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: '16/9' }}
                >
                  {src ? (
                    <>
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        className="w-full h-full object-cover"
                        preload={i === 0 ? "metadata" : "none"}
                        playsInline
                        muted={!isActive || isMuted}
                        poster={posterUrl ?? undefined}
                        onEnded={isActive ? goNext : undefined}
                        onCanPlayThrough={i === 0 ? () => loadRemainingVideos() : undefined}
                        {...(i === 0 ? { fetchpriority: 'high' } as Record<string, string> : {})}
                      >
                        <source src={src} type="video/mp4" />
                      </video>

                      {!isActive && posterUrl && (
                        <img
                          src={posterUrl}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                      
                      {/* Overlay for non-active videos */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/40" />
                      )}

                      {/* Mute button - only on active video */}
                      {isActive && (
                        <button
                          onClick={toggleMute}
                          className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/40">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                        {isLoadingVideos && i === 0 ? 'Loading...' : 'Loading'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

        {showSwipeHint && (
          <div className="sm:hidden mt-3 flex items-center justify-center gap-1.5 text-white/40 text-xs animate-pulse">
            <ChevronLeft className="h-3.5 w-3.5" />
            <span>Swipe to navigate</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </div>
        )}
      </div>
  );
}
