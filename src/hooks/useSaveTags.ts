import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { QueryKey, TagsAPI } from '../api';
import { SaveTagModel } from '../api/Tags';

export const useSaveTags = () => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, isPending } = useMutation<SaveTagModel, AxiosError, SaveTagModel>({
    mutationFn: (data: SaveTagModel) => TagsAPI.saveTags(data),
    mutationKey: [QueryKey.saveTags],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.getSavedTags] });
      //TODO: add success notification
    },
    onError: (error: AxiosError) => {
      //TODO: add error notification
      console.error('Error:', error.message);
    },
  });

  return { mutate, isSuccess, isError, isPending };
};
