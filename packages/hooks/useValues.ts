import { useCallback, useMemo, useState } from "react";

export function useValues<T>(value: T) {
  const [values, set_values] = useState(value);

  const setValues = useCallback(
    (key: string | number, set_value: string | number | boolean | T) =>
      set_values({ ...values, [key]: set_value }),
    []
  );

  const options = useMemo(() => {
    const newSet = (find: string | number) =>
      set_values((current) => {
        if (Array.isArray(current)) {
          const findItem = current.some((item) => item === find);
          findItem
            ? current.filter((item) => item !== find)
            : current.push(find);
        }
        return current;
      });

    return {
      newSet,
    };
  }, []);

  return [values, setValues, options];
}
