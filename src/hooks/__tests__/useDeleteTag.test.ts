import { act, renderHook, waitFor } from '@testing-library/react';

import { Wrapper } from '../../setupTest';
import { useDeleteTag } from '../useDeleteTag';

describe('test useDeleteTag hook', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useDeleteTag(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual(
      expect.objectContaining({
        deleteTagIds: [],
        isPending: false,
        isError: false,
        isSuccess: false,
      })
    );
  });

  it('should call the mutation function and return the loading state with deleteTagIds', async () => {
    const { result } = renderHook(() => useDeleteTag(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.mutate({ id: 'recOOCGhyxR83tpnt' });
    });

    await waitFor(() =>
      expect(result.current).toEqual(
        expect.objectContaining({
          deleteTagIds: ['recOOCGhyxR83tpnt'],
          isPending: true,
          isError: false,
          isSuccess: false,
        })
      )
    );
  });
});
