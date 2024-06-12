import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { QueryKey, TagsAPI } from '../api';
import { SaveTagModel } from '../api/Tags';

export const useSaveTags = () => {
  const { mutate, isSuccess, isError, isPending } = useMutation<SaveTagModel, AxiosError, SaveTagModel>({
    mutationFn: (data: SaveTagModel) => TagsAPI.saveTags(data),
    mutationKey: [QueryKey.saveTags],
    onError: (error: AxiosError) => {
      console.error('Error:', error.message);
    },
  });

  return { mutate, isSuccess, isError, isPending };
};
