import { useQuery } from '@tanstack/react-query';

import { TagsAPI } from '../api';
import { QueryKey } from '../api/query';

export const useGetSavedTags = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [QueryKey.getSavedTags],
    queryFn: TagsAPI.getSavedTags,
    refetchOnWindowFocus: false,
  });

  return {
    data: data ? data.records : [],
    isLoading: isLoading || isFetching,
    isError,
  };
};
