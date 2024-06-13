import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { QueryKey, TagsAPI } from '../api';
import { DeleteTagModel } from '../api/Tags';

export const useDeleteTag = () => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, isPending } = useMutation<DeleteTagModel, AxiosError, DeleteTagModel>({
    mutationFn: (data: DeleteTagModel) => TagsAPI.deleteTag(data),
    mutationKey: [QueryKey.deleteTag],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.getSavedTags] });
    },
    onError: (error: AxiosError) => {
      console.error('Error:', error.message);
    },
  });

  return { mutate, isSuccess, isError, isPending };
};
