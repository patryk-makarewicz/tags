import { useQuery } from '@tanstack/react-query';

import { TagsAPI } from '../api';
import { QueryKey } from '../api/query';

export const useGetSearchTags = (query: string | null) => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKey],
    queryFn: () => TagsAPI.getSearchTags(query!),
    refetchOnWindowFocus: false,
    enabled: !!query && query.length >= 3,
  });

  return {
    data: data ? data.records : [],
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
