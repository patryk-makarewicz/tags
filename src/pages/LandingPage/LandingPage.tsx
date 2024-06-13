import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag, useDebounce } from '../../hooks';
import { PageLayout } from '../../layout';

type SearchInput = {
  query: string[];
  search: string;
};

export const LandingPage = () => {
  const { t } = useTranslation();

  const { data: savedTags } = useGetSavedTags();

  const { mutate: saveTags } = useSaveTags();
  const { mutate: deleteTag } = useDeleteTag();

  const { register, handleSubmit, watch, setValue } = useForm<SearchInput>();
  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    saveTags({
      records: data.query.map((tag) => ({
        fields: {
          name: tag,
        },
      })),
    });

    setValue('search', '');
  };

  const searchWatch = useDebounce(watch('search'), 300);
  const { data: searchTags, refetch } = useGetSearchTags(searchWatch);

  useEffect(() => {
    if (searchWatch?.length > 0) {
      refetch();
    }
  }, [searchWatch]);

  return (
    <PageLayout>
      <h2>{t('hello')}</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Tags list to select:</h3>
            <input type="text" defaultValue="" placeholder="Search" autoComplete="off" {...register('search')} />
          </div>
          <div>
            {searchWatch?.length > 0 && (
              <div>
                <h4>Tags list to select:</h4>
                {searchTags.map((tag) => {
                  const selectedTag = savedTags.some((saved) => saved.fields.name === tag.fields.name);

                  return (
                    <div key={tag.id}>
                      <input type="checkbox" value={tag.fields.name} disabled={selectedTag} {...register('query')} />
                      <label>{tag.fields.name}</label>
                    </div>
                  );
                })}

                <button type="submit">Zapisz</button>
              </div>
            )}
          </div>
        </form>
      </div>
      <div>
        <h4>Saved Your tags</h4>
        <ul>
          {savedTags?.map((tag) => (
            <li key={tag.id}>
              {tag.fields.name} <button onClick={() => deleteTag({ id: tag.id })}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};
