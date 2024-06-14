import { act, renderHook, waitFor } from '@testing-library/react';

import { Wrapper } from '../../setupTest';
import { useSaveTags } from '../useSaveTags';

describe('test useSaveTags hook', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useSaveTags(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual(
      expect.objectContaining({
        isPending: false,
        isError: false,
        isSuccess: false,
      })
    );
  });

  it('should call the mutation function and return the loading state', async () => {
    const { result } = renderHook(() => useSaveTags(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.mutate({ records: [{ fields: { name: 'test' } }] });
    });

    await waitFor(() =>
      expect(result.current).toEqual(
        expect.objectContaining({
          isPending: true,
          isError: false,
          isSuccess: false,
        })
      )
    );
  });
});
