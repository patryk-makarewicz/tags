import { renderHook } from '@testing-library/react';

import { Wrapper } from '../../setupTest';
import { useGetSavedTags } from '../useGetSavedTags';

describe('test useGetSavedTags hook', () => {
  it('should return initial values with loading state', () => {
    const { result } = renderHook(() => useGetSavedTags(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: true,
        isError: false,
        data: [],
      })
    );
  });
});
