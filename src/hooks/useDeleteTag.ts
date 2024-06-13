import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { QueryKey, TagsAPI } from '../api';
import { DeleteTagModel } from '../api/Tags';
import { useUniqueArray } from './useUniqueArray';

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  const [deleteTagIds, addDeleteTagId, removeDeleteTagId] = useUniqueArray<string>();

  const { mutate, isSuccess, isError, isPending } = useMutation<DeleteTagModel, AxiosError, DeleteTagModel>({
    mutationFn: (data: DeleteTagModel) => TagsAPI.deleteTag(data),
    mutationKey: [QueryKey.deleteTag],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.getSavedTags] });
      //TODO: add success notification
    },
    onError: (error: AxiosError) => {
      //TODO: add error notification
      console.error('Error:', error.message);
    },
    onMutate: (deleteTag) => {
      addDeleteTagId(deleteTag.id);
    },
    onSettled: (_, __, deleteTag) => {
      removeDeleteTagId(deleteTag.id);
    },
  });

  return { mutate, isSuccess, isError, isPending, deleteTagIds };
};
