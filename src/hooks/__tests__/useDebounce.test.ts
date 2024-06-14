import { renderHook } from '@testing-library/react';

import { useDebounce } from '../useDebounce';

describe('test useDebounce hook', () => {
  test('should return the initial value without delay', () => {
    const { result } = renderHook(() => useDebounce('test'));
    expect(result.current).toBe('test');
  });

  test('should return the initial value with delay', () => {
    const { result } = renderHook(() => useDebounce('test', 500));
    expect(result.current).toBe('test');
  });
});
