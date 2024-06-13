import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SearchInputTag } from '../../api/Tags';
import { AvailableTags, Input, SavedTagsList, TagsCard } from '../../components';
import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag, useDebounce } from '../../hooks';

export const TagsManager = () => {
  const { register, handleSubmit, watch, reset } = useForm<SearchInputTag>();
  const searchWatch = useDebounce(watch('search'), 300);

  const { data: savedTags } = useGetSavedTags();
  const { mutate: saveTags } = useSaveTags();
  const { mutate: deleteTag } = useDeleteTag();
  const { data: searchTags, refetch } = useGetSearchTags(searchWatch);

  const onSubmit: SubmitHandler<SearchInputTag> = (data) => {
    saveTags({
      records: data.query.map((tag) => ({
        fields: {
          name: tag,
        },
      })),
    });

    reset();
  };

  useEffect(() => {
    if (searchWatch?.length > 0) {
      refetch();
    }
  }, [searchWatch]);

  return (
    <TagsCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Tags list to select:</h3>
          <Input defaultValue="" placeholder="Search" autoComplete="off" {...register('search')} />
        </div>
        <AvailableTags savedTags={savedTags} searchTags={searchTags} searchWatch={searchWatch} register={register} />
      </form>
      <SavedTagsList savedTags={savedTags} onDelete={deleteTag} />
    </TagsCard>
  );
};
