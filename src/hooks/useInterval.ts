import { useEffect, useRef } from "react";

import { useIsomorphicLayoutEffect } from "./";

/**
 * Use setInterval in functional React component with the same API.
 * Set your callback function as a first parameter and a delay
 * `(in milliseconds)` for the second argument. You can also stop
 * the timer passing null instead the delay or even, execute it
 * right away passing 0.
 * 
 * Usage:
 * ```tsx
 * // The counter
 * const [count, setCount] = useState<number>(0)
 * // Dynamic delay
 * const [delay, setDelay] = useState<number>(1000)
 * // ON/OFF
 * const [isPlaying, setPlaying] = useState<boolean>(false)

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1)
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null,
  )
 * ```
 * @param callback 
 * @param delay 
 */
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
