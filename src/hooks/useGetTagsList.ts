import { useQuery } from '@tanstack/react-query';

import { TagsAPI } from '../api';
import { QueryKey } from '../api/query';

export const useGetTagsList = () => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [QueryKey.getTagsList],
    queryFn: TagsAPI.getTagsList,
    refetchOnWindowFocus: false,
  });

  return {
    data: data ? data.records : [],
    isLoading: isLoading || isFetching,
    isError,
    refetch,
  };
};
