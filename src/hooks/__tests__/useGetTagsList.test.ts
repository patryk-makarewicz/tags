import { renderHook } from '@testing-library/react';

import { Wrapper } from '../../setupTest';
import { useGetTagsList } from '../useGetTagsList';

describe('test useGetTagsList hook', () => {
  it('should return initial values with loading state', () => {
    const { result } = renderHook(() => useGetTagsList(), {
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
