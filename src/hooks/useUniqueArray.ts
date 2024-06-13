import { useCallback, useMemo, useState } from 'react';

/**
 * Shallow compares elements to ensure the array is unique
 */
export const useUniqueArray = <T>() => {
  const [set, setSet] = useState<Set<T>>(new Set());

  const add = useCallback((element: T) => setSet((prev) => new Set(prev).add(element)), []);
  const remove = useCallback(
    (element: T) =>
      setSet((prev) => {
        const next = new Set(prev);
        next.delete(element);

        return next;
      }),
    []
  );

  const array = useMemo(() => [...Array.from(set)], [set]) as readonly T[];

  return [array, add, remove] as const;
};
