import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SearchInputTag } from '../../api/Tags';
import { AvailableTags, Divider, MockContent, SavedTagsList, SearchTags, Spinner, TagsCard } from '../../components';
import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag, useDebounce } from '../../hooks';

export const TagsManager = () => {
  const { register, handleSubmit, watch, reset } = useForm<SearchInputTag>({
    defaultValues: {
      search: '',
      query: [],
    },
  });
  const searchWatch = useDebounce(watch('search'), 300);

  const { data: savedTags, isError: isSavedTagsError } = useGetSavedTags();
  const { mutate: saveTags, isPending: isSaveTagsLoading } = useSaveTags();
  const { mutate: deleteTag, isPending: isDeleteTagLoading, deleteTagIds } = useDeleteTag();
  const {
    data: searchTags,
    refetch: refetchSearchTags,
    isLoading: isSearchTagsLoading,
  } = useGetSearchTags(searchWatch);

  const onHandleResetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<SearchInputTag> = (data) => {
    saveTags({
      records: data.query.map((tag) => ({
        fields: {
          name: tag,
        },
      })),
    });

    onHandleResetForm();
  };

  useEffect(() => {
    if (searchWatch?.length > 0) {
      refetchSearchTags();
    }
  }, [searchWatch]);

  return (
    <TagsCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchTags register={register} searchWatch={searchWatch} onHandleResetForm={onHandleResetForm} />
        <Divider />
        <AvailableTags
          savedTags={savedTags}
          searchTags={searchTags}
          searchWatch={searchWatch}
          register={register}
          isSearchTagsLoading={isSearchTagsLoading}
          isSaveTagsLoading={isSaveTagsLoading}
        />
      </form>
      {searchWatch === undefined && <Spinner width="24px" height="24px" />}
      {searchWatch?.length === 0 && (
        <>
          <SavedTagsList
            savedTags={savedTags}
            isSavedTagsError={isSavedTagsError}
            onDelete={deleteTag}
            isDeleteTagLoading={isDeleteTagLoading}
            deleteTagIds={deleteTagIds}
          />
          <Divider />
          <MockContent />
        </>
      )}
    </TagsCard>
  );
};
