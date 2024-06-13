import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SearchInputTag } from '../../api/Tags';
import { AvailableTags, Divider, SavedTagsList, SearchTags, TagsCard } from '../../components';
import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag, useDebounce } from '../../hooks';

export const TagsManager = () => {
  const { register, handleSubmit, watch, reset } = useForm<SearchInputTag>();
  const searchWatch = useDebounce(watch('search'), 300);

  const { data: savedTags } = useGetSavedTags();
  const { mutate: saveTags } = useSaveTags();
  const { mutate: deleteTag } = useDeleteTag();
  const { data: searchTags, refetch } = useGetSearchTags(searchWatch);

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
      refetch();
    }
  }, [searchWatch]);

  return (
    <TagsCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchTags register={register} onHandleResetForm={onHandleResetForm} />
        <Divider />
        <AvailableTags savedTags={savedTags} searchTags={searchTags} searchWatch={searchWatch} register={register} />
      </form>
      <SavedTagsList savedTags={savedTags} onDelete={deleteTag} />
    </TagsCard>
  );
};
