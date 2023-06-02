import { EffectCallback, useEffect } from "react";

/**
 * Just modified version of useEffect that's executed only one time,
 * at the mounting time.
 * 
 * Usage:
 * ```tsx
 * const [data, setData] = useState<number>(0);
 * useEffect(() => {
 *  console.log('Normal useEffect', { data });
 * }, [data]);
 * 
 * useEffectOnce(() => {
 *  console.log('Triggered only once, on mount', { data });
 * });
 * ```
 * @param effect 
 */
function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, []);
}

export default useEffectOnce;
