import { useEffect, useRef, useState } from 'react';

export function useLazyBackground(imageUrl: string) {
  const [loaded, setLoaded] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = imageUrl;
          img.onload = () => {
            setLoaded(true);
          };
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [imageUrl]);

  return { elementRef, loaded };
}
