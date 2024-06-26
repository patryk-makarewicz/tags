import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { QueryKey, TagsAPI } from '@/api';
import { DeleteTagModel } from '@/api/Tags';

import { useUniqueArray } from './useUniqueArray';

export const useDeleteTag = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [deleteTagIds, addDeleteTagId, removeDeleteTagId] = useUniqueArray<string>();

  const { mutate, isSuccess, isError, isPending } = useMutation<DeleteTagModel, AxiosError, DeleteTagModel>({
    mutationFn: (data: DeleteTagModel) => TagsAPI.deleteTag(data),
    mutationKey: [QueryKey.deleteTag],
    onSuccess: () => {
      toast.success(t('messages.deleteTag'));
      queryClient.invalidateQueries({ queryKey: [QueryKey.getSavedTags] });
    },
    onError: (error: AxiosError) => {
      toast.error(t('messages.deleteTagFailed'));
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
