import { renderHook } from '@testing-library/react';

import { Wrapper } from '../../setupTest';
import { useGetSearchTags } from '../useGetSearchTags';

describe('test useGetSearchTags hook', () => {
  it('should return initial values with loading state', () => {
    const { result } = renderHook(() => useGetSearchTags('test'), {
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
