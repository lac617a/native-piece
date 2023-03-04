import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * This React Hook detects visibility of a component on the viewport
 * using the IntersectionObserver API natively present in the browser.
 * 
 * It can be very useful to lazy-loading of images, implementing
 * `infinite scrolling` or starting animations for example.
 * 
 * Your must pass the ref element (from useRef()).
 * 
 * It takes optionally root, rootMargin and threshold arguments from
 * the native IntersectionObserver API and freezeOnceVisible to
 * only catch the first appearance too.
 * 
 * It returns the full IntersectionObserver's entry object.
 * 
 * Usage:
 * ```tsx
 * const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
 * ```
 * @param elementRef 
 * @param param1 
 * @returns {Object}
 */
function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}

export default useIntersectionObserver;
