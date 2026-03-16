import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const VIDEO_COUNT = 3;
const GAP_PX = 20;

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
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [activeBaseIndex, setActiveBaseIndex] = useState<number | null>(null);

  // 6 refs: 0-2 = originals, 3-5 = clones
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(VIDEO_COUNT * 2).fill(null));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const hasQueuedRemainingRef = useRef(false);
  const isResumingRef = useRef(false);

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
    if (hasQueuedRemainingRef.current) return;
    hasQueuedRemainingRef.current = true;
    for (let i = 1; i < VIDEO_COUNT; i++) {
      try {
        const url = await fetchVideoUrl(videoPublicIds[i]);
        setVideoUrlAtIndex(i, url);
      } catch (err) {
        console.error(`Failed to load video ${i}`, err);
      }
    }
  }, [fetchVideoUrl, setVideoUrlAtIndex, videoPublicIds]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setIsLoadingVideos(true);
        const url = await fetchVideoUrl(videoPublicIds[0]);
        if (isMounted) {
          setVideoUrlAtIndex(0, url);
          setIsLoadingVideos(false);
        }
      } catch (err) {
        console.error('Failed to load first video', err);
        if (isMounted) setIsLoadingVideos(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [fetchVideoUrl, setVideoUrlAtIndex, videoPublicIds]);

  // ── Playback helpers ─────────────────────────────────────────────────────────
  // NOTE: We use src={url} directly on <video> (not <source> children) so that
  // video.src is always populated and we can reliably call play().
  const playAllMuted = useCallback(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.loop = true;
      v.play().catch(() => {});
    });
  }, []);

  // Start videos: fires when URL is ready OR when section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStartedRef.current || !videoUrls[0]) return;

    const tryStart = () => {
      if (hasStartedRef.current) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (inView) {
        hasStartedRef.current = true;
        playAllMuted();
        loadRemainingVideos();
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryStart();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    // Also check immediately in case section is already visible
    tryStart();

    return () => observer.disconnect();
  }, [playAllMuted, loadRemainingVideos, videoUrls]);

  // Auto-play newly loaded videos while marquee is running
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
    setIsMarqueePaused(false);
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.loop = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    });
    setTimeout(() => {
      isResumingRef.current = false;
    }, 300);
  }, []);

  const handleVideoClick = useCallback(
    (refIndex: number) => {
      const baseIndex = refIndex % VIDEO_COUNT;

      // Tapping an already-active video resumes the marquee
      if (activeBaseIndex === baseIndex) {
        resumeMarquee();
        return;
      }

      setIsMarqueePaused(true);
      setActiveBaseIndex(baseIndex);

      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i % VIDEO_COUNT === baseIndex) {
          v.loop = false;
          v.muted = false;
          v.currentTime = 0;
          v.play().catch(() => {
            // Autoplay policy blocked unmuted — fall back to muted
            v.muted = true;
            v.play().catch(() => {});
          });
        } else {
          v.muted = true;
          v.pause();
        }
      });
    },
    [activeBaseIndex, resumeMarquee]
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
      {/* ── Marquee strip ────────────────────────────────────────────────────── */}
      <div
        className="flex"
        style={{
          gap: `${GAP_PX}px`,
          // paddingRight equals one gap, so translateX(-50%) lands at the exact
          // start of the clone set — giving a perfectly seamless loop.
          paddingRight: `${GAP_PX}px`,
          width: 'max-content',
          animation: 'marquee-scroll 28s linear infinite',
          animationPlayState: isMarqueePaused ? 'paused' : 'running',
          willChange: 'transform',
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
              onClick={() => handleVideoClick(refIndex)}
              className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-300 ${
                isDimmed ? 'opacity-30' : 'opacity-100'
              }`}
              style={{
                width: 'clamp(260px, 36vw, 560px)',
                aspectRatio: '16/9',
              }}
            >
              {src ? (
                /* src directly on <video> keeps video.src populated for play() guards */
                <video
                  ref={(el) => {
                    videoRefs.current[refIndex] = el;
                  }}
                  src={src}
                  className="h-full w-full object-cover"
                  playsInline
                  muted
                  loop
                  preload={baseIndex === 0 && refIndex === 0 ? 'metadata' : 'none'}
                  poster={posterUrl ?? undefined}
                  onEnded={() => handleVideoEnded(refIndex)}
                  {...(baseIndex === 0 && refIndex === 0
                    ? ({ fetchpriority: 'high' } as Record<string, string>)
                    : {})}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black/10">
                  {isLoadingVideos && baseIndex === 0 && (
                    <span className="text-xs uppercase tracking-[0.2em] text-[#111]/30">
                      Loading…
                    </span>
                  )}
                </div>
              )}

              {/* Hover play hint — shown when marquee is running */}
              {src && activeBaseIndex === null && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <div className="rounded-full bg-black/40 p-4 backdrop-blur-sm">
                    <Play className="h-7 w-7 fill-white text-white" />
                  </div>
                </div>
              )}

              {/* Active: brand ring + playing badge */}
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
