import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const VIDEO_COUNT = 3;
const GAP_PX = 20;
const MARQUEE_DURATION = 28; // seconds

export default function VideoCarouselSection() {
  const videoPublicIds = useMemo(
    () => [
      'Video-1-For-GetSignedCases_lkcay6',
      'Video-2-For-GetSignedCases_wdjydq',
      'Video-3-for-GetSignedCases_yyokiy',
    ],
    []
  );

  const [videoUrls, setVideoUrls] = useState<(string | null)[]>(() =>
    Array(VIDEO_COUNT).fill(null)
  );
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [activeBaseIndex, setActiveBaseIndex] = useState<number | null>(null);

  // 6 refs: 0-2 = originals, 3-5 = clones
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(VIDEO_COUNT * 2).fill(null));
  const stripRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const isLoadingRemainingRef = useRef(false);
  const isResumingRef = useRef(false);
  // The translateX the strip was at when a video was clicked (to resume from there)
  const frozenTranslateXRef = useRef(0);

  // Items: [0,1,2, 0(clone),1(clone),2(clone)]
  const items = useMemo(
    () => [
      ...Array.from({ length: VIDEO_COUNT }, (_, i) => ({ baseIndex: i, refIndex: i })),
      ...Array.from({ length: VIDEO_COUNT }, (_, i) => ({
        baseIndex: i,
        refIndex: i + VIDEO_COUNT,
      })),
    ],
    []
  );

  // ── URL fetching ─────────────────────────────────────────────────────────────
  const setVideoUrlAtIndex = useCallback((index: number, url: string | null) => {
    setVideoUrls((prev) => {
      const next = [...prev];
      next[index] = url;
      return next;
    });
  }, []);

  const fetchVideoUrl = useCallback(async (publicId: string) => {
    const cacheKey = `cloudinary_video_v2_${publicId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return cached;
    const res = await fetch(
      `/api/cloudinary/video-url?publicId=${encodeURIComponent(publicId)}`
    );
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Failed to fetch video ${publicId}. Status: ${res.status}. ${text}`);
    }
    const data = (await res.json()) as { url?: string };
    const url = data.url ?? null;
    if (url) sessionStorage.setItem(cacheKey, url);
    return url;
  }, []);

  const loadRemainingVideos = useCallback(async () => {
    if (isLoadingRemainingRef.current) return;
    isLoadingRemainingRef.current = true;
    try {
      for (let i = 1; i < VIDEO_COUNT; i++) {
        if (videoUrls[i]) continue;
        try {
          const url = await fetchVideoUrl(videoPublicIds[i]);
          setVideoUrlAtIndex(i, url);
        } catch (err) {
          console.error(`Failed to load video ${i}`, err);
        }
      }
    } finally {
      isLoadingRemainingRef.current = false;
    }
  }, [fetchVideoUrl, setVideoUrlAtIndex, videoPublicIds, videoUrls]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setIsLoadingVideos(true);
        // 1) Load the first video ASAP (so there's something to render immediately).
        const firstUrl = await fetchVideoUrl(videoPublicIds[0]);
        if (!isMounted) return;
        setVideoUrlAtIndex(0, firstUrl);

        // 2) Prefetch the remaining video URLs right away so the other tiles don't look empty.
        // This only fetches a tiny JSON response per video (the actual video bytes are controlled by <video preload>).
        const results = await Promise.allSettled(
          videoPublicIds.slice(1).map((id) => fetchVideoUrl(id))
        );
        if (!isMounted) return;
        results.forEach((res, idx) => {
          const i = idx + 1;
          if (res.status === 'fulfilled') setVideoUrlAtIndex(i, res.value);
          else console.error(`Failed to load video ${i}`, res.reason);
        });

        setIsLoadingVideos(false);
      } catch (err) {
        console.error('Failed to load first video', err);
        if (isMounted) setIsLoadingVideos(false);
      }
    })();
    return () => { isMounted = false; };
  }, [fetchVideoUrl, setVideoUrlAtIndex, videoPublicIds]);

  // ── Strip animation helpers (all imperative — no React state involved) ────────

  /** Read the current translateX from the strip's computed transform matrix. */
  const getStripTranslateX = useCallback((): number => {
    const strip = stripRef.current;
    if (!strip) return 0;
    const matrix = window.getComputedStyle(strip).transform;
    if (!matrix || matrix === 'none') return 0;
    const parts = matrix.match(/matrix\((.+)\)/)?.[1].split(',');
    return parts ? parseFloat(parts[4]) : 0;
  }, []);

  /** Freeze the strip at its current animated position (overrides CSS animation). */
  const freezeStrip = useCallback((): number => {
    const strip = stripRef.current;
    if (!strip) return 0;
    const tx = getStripTranslateX();
    strip.style.transition = '';
    strip.style.animation = 'none';
    strip.style.transform = `translateX(${tx}px)`;
    return tx;
  }, [getStripTranslateX]);

  /** Animate the strip to a target translateX, calls onDone when complete. */
  const animateStripTo = useCallback(
    (targetX: number, durationMs: number, onDone?: () => void) => {
      const strip = stripRef.current;
      if (!strip) { onDone?.(); return; }
      strip.style.transition = `transform ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      strip.style.transform = `translateX(${targetX}px)`;
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        strip.style.transition = '';
        onDone?.();
      };
      strip.addEventListener('transitionend', finish, { once: true });
      setTimeout(finish, durationMs + 80); // safety fallback
    },
    []
  );

  /** Resume the CSS marquee animation from a specific translateX value. */
  const resumeAnimationFrom = useCallback((fromX: number) => {
    const strip = stripRef.current;
    if (!strip) return;
    const halfWidth = strip.scrollWidth / 2;
    // Normalize fromX into the animation range [−halfWidth, 0]
    let normalized = fromX;
    if (halfWidth > 0) {
      normalized = ((fromX % -halfWidth) - halfWidth) % -halfWidth;
      if (normalized > 0) normalized -= halfWidth;
    }
    const progress = halfWidth > 0 ? Math.abs(normalized) / halfWidth : 0;
    const delay = -(progress * MARQUEE_DURATION);
    strip.style.transform = '';
    strip.style.animation = `marquee-scroll ${MARQUEE_DURATION}s linear ${delay}s infinite`;
  }, []);

  // ── Video playback helpers ────────────────────────────────────────────────────

  const playAllMuted = useCallback(() => {
    const strip = stripRef.current;
    if (strip) strip.style.animation = `marquee-scroll ${MARQUEE_DURATION}s linear infinite`;
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.loop = true;
      v.play().catch(() => {});
    });
  }, []);

  // Start when section comes into view AND first URL is ready
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStartedRef.current || !videoUrls[0]) return;

    const tryStart = () => {
      if (hasStartedRef.current) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        hasStartedRef.current = true;
        playAllMuted();
        loadRemainingVideos();
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) tryStart(); },
      { threshold: 0.2 }
    );
    observer.observe(section);
    tryStart(); // also check immediately if already visible

    return () => observer.disconnect();
  }, [playAllMuted, loadRemainingVideos, videoUrls]);

  // Auto-start newly loaded videos while marquee is running
  useEffect(() => {
    if (!hasStartedRef.current || activeBaseIndex !== null) return;
    videoRefs.current.forEach((v) => {
      if (v && v.paused) {
        v.muted = true;
        v.loop = true;
        v.play().catch(() => {});
      }
    });
  }, [videoUrls, activeBaseIndex]);

  const resumeMarquee = useCallback(() => {
    if (isResumingRef.current) return;
    isResumingRef.current = true;
    setActiveBaseIndex(null);

    // Resume from wherever the strip currently is (centered position) — no slide-back
    const currentX = getStripTranslateX();
    resumeAnimationFrom(currentX);
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.loop = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    });
    setTimeout(() => { isResumingRef.current = false; }, 200);
  }, [getStripTranslateX, resumeAnimationFrom]);

  const handleVideoClick = useCallback(
    (refIndex: number, cardEl: HTMLDivElement) => {
      const baseIndex = refIndex % VIDEO_COUNT;

      // Tapping the already-active video resumes the marquee
      if (activeBaseIndex === baseIndex) {
        resumeMarquee();
        return;
      }

      // 1. Freeze strip at its current animated position
      const frozenX = freezeStrip();
      frozenTranslateXRef.current = frozenX;

      // 2. Calculate how far to shift so this card lands in the viewport center
      const cardRect = cardEl.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const viewportCenterX = window.innerWidth / 2;
      const shift = viewportCenterX - cardCenterX;
      const targetX = frozenX + shift;

      // 3. Update active state + mute/pause other videos immediately
      setActiveBaseIndex(baseIndex);
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i % VIDEO_COUNT !== baseIndex) {
          v.muted = true;
          v.pause();
        }
      });

      // 4. Slide strip to center, then play the clicked video unmuted
      animateStripTo(targetX, 450, () => {
        videoRefs.current.forEach((v, i) => {
          if (!v || i % VIDEO_COUNT !== baseIndex) return;
          v.loop = false;
          v.muted = false;
          v.currentTime = 0;
          v.play().catch(() => {
            v.muted = true;
            v.play().catch(() => {});
          });
        });
      });
    },
    [activeBaseIndex, resumeMarquee, freezeStrip, animateStripTo]
  );

  const handleVideoEnded = useCallback(
    (refIndex: number) => {
      if (activeBaseIndex !== refIndex % VIDEO_COUNT) return;
      resumeMarquee();
    },
    [activeBaseIndex, resumeMarquee]
  );

  const getThumbnailUrl = useCallback((videoUrl: string | null) => {
    if (!videoUrl) return null;
    try {
      const url = new URL(videoUrl);
      if (!url.pathname.includes('/video/upload/')) return videoUrl;
      const base = url.pathname.replace('/video/upload/', '/video/upload/so_auto/');
      const withExt = base.match(/\.(jpg|png|webp|avif)$/) ? base : `${base}.jpg`;
      return `${url.origin}${withExt}`;
    } catch {
      return videoUrl;
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden pb-2">
      {/* ── Marquee strip — animation is set imperatively via stripRef ─────────── */}
      <div
        ref={stripRef}
        className="flex"
        style={{
          gap: `${GAP_PX}px`,
          paddingRight: `${GAP_PX}px`,
          width: 'max-content',
          willChange: 'transform',
          // animation is NOT set here — playAllMuted() sets it imperatively
          // so React re-renders never conflict with direct DOM animation control
        }}
      >
        {items.map(({ baseIndex, refIndex }) => {
          const src = videoUrls[baseIndex];
          const posterUrl = getThumbnailUrl(src);
          const isActive = activeBaseIndex === baseIndex;
          const isDimmed = activeBaseIndex !== null && !isActive;

	          return (
	            <div
	              key={refIndex}
	              onClick={(e) => handleVideoClick(refIndex, e.currentTarget as HTMLDivElement)}
	              className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-300 ${
	                isDimmed ? 'opacity-30' : 'opacity-100'
	              }`}
	              style={{
	                width: 'clamp(260px, 42vw, 720px)',
	                aspectRatio: '16/9',
	              }}
	            >
	              {src ? (
	                <video
	                  ref={(el) => { videoRefs.current[refIndex] = el; }}
	                  src={src}
	                  className="h-full w-full object-cover"
	                  playsInline
	                  muted
	                  loop
	                  // Preload metadata for the 3 originals so all thumbnails look "ready" immediately.
	                  // Clones (refIndex >= VIDEO_COUNT) use preload="none" to avoid redundant work.
	                  preload={refIndex < VIDEO_COUNT ? 'metadata' : 'none'}
	                  poster={posterUrl ?? undefined}
	                  onEnded={() => handleVideoEnded(refIndex)}
	                  {...(baseIndex === 0 && refIndex === 0
	                    ? ({ fetchpriority: 'high' } as Record<string, string>)
	                    : {})}
	                />
	              ) : (
	                <div className="flex h-full w-full items-center justify-center bg-black/10">
	                  {isLoadingVideos && (
	                    <span className="text-xs uppercase tracking-[0.2em] text-[#111]/30">
	                      Loading…
	                    </span>
	                  )}
	                </div>
	              )}

              {/* Hover play hint */}
              {src && activeBaseIndex === null && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <div className="rounded-full bg-black/40 p-4 backdrop-blur-sm">
                    <Play className="h-7 w-7 fill-white text-white" />
                  </div>
                </div>
              )}

              {/* Active: brand ring + badge */}
              {isActive && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-[3px] ring-inset ring-brand" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <Volume2 className="h-3.5 w-3.5" />
                    <span>Playing · tap to resume</span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Hint text ────────────────────────────────────────────────────────── */}
      <p className="mt-3 select-none text-center text-[11px] uppercase tracking-[0.15em] text-[#111]/25">
        {activeBaseIndex !== null ? 'Tap video to resume scroll' : 'Tap any video to watch'}
      </p>
    </div>
  );
}
