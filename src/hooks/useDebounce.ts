import { useEffect, useState } from "react";

/**
 * This React hook helps to limit that the component is re-rendered
 * too many times. Imagine that you want to execute a function
 * on an event that executes several hundred times per second such
 * as moving the mouse or scrolling. This may cause the application
 * to lag. To prevent this, the debounce uses an internal timer to
 * execute the callback function every xx seconds `(2nd parameter)`.
 *
 * Consider the example below. Each time the user enters the field,
 * the onChange event is triggered. On the other hand, the unfolded
 * variable is updated at most every 500ms. If you have to make an
 * API call to find the elements that match the search term, you can
 * do so by monitoring the unpacked variable, which will be
 * more economical.
 *
 * Usage:
 * 
 * ```js
 * const [value, setValue] = useState<string>('')
 * const debouncedValue = useDebounce<string>(value, 500)
 *
 * const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
 *  setValue(event.target.value)
 * }
 *
 * // Fetch API (optional)
 * useEffect(() => {
 *  // Do fetch here...
 *  // Triggers when "debouncedValue" changes
 * }, [debouncedValue]);
 * ```
 *
 * @param value `GENERIC` => T
 * @param delay `NUMBER` => 0
 * @returns {Object} `GENERIC` => T
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
