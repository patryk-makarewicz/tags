import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SearchInputTag } from '../../api/Tags';
import { Input, Label, SavedTagsList, TagsCard } from '../../components';
import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag, useDebounce } from '../../hooks';

export const TagsManager = () => {
  const { data: savedTags } = useGetSavedTags();

  const { mutate: saveTags } = useSaveTags();
  const { mutate: deleteTag } = useDeleteTag();

  const { register, handleSubmit, watch, reset } = useForm<SearchInputTag>();

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

  const searchWatch = useDebounce(watch('search'), 300);
  const { data: searchTags, refetch } = useGetSearchTags(searchWatch);

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
        <div>
          {searchWatch?.length > 0 && (
            <div>
              <h4>Tags list to select:</h4>
              {searchTags.map((tag) => {
                const selectedTag = savedTags.some((saved) => saved.fields.name === tag.fields.name);

                return (
                  <div key={tag.id}>
                    <Input type="checkbox" value={tag.fields.name} disabled={selectedTag} {...register('query')} />
                    <Label>{tag.fields.name}</Label>
                  </div>
                );
              })}

              <button type="submit">Zapisz</button>
            </div>
          )}
        </div>
      </form>

      <div>
        <SavedTagsList savedTags={savedTags} onDelete={deleteTag} />
      </div>
    </TagsCard>
  );
};
