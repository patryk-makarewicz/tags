import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { QueryKey, TagsAPI } from '@/api';
import { SaveTagModel } from '@/api/Tags';

export const useSaveTags = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, isPending } = useMutation<SaveTagModel, AxiosError, SaveTagModel>({
    mutationFn: (data: SaveTagModel) => TagsAPI.saveTags(data),
    mutationKey: [QueryKey.saveTags],
    onSuccess: () => {
      toast.success(t('messages.saveTag'));
      queryClient.invalidateQueries({ queryKey: [QueryKey.getSavedTags] });
    },
    onError: (error: AxiosError) => {
      toast.error(t('messages.SaveTagFailed'));
      console.error('Error:', error.message);
    },
  });

  return { mutate, isSuccess, isError, isPending };
};
