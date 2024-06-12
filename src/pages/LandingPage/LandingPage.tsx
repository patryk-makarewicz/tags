import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useGetSearchTags, useSaveTags, useGetSavedTags, useDeleteTag } from '../../hooks';
import { PageLayout } from '../../layout';

type SearchInput = {
  query: string[];
};

export const LandingPage = () => {
  const { t } = useTranslation();

  const searchRef = useRef<HTMLInputElement>(null);

  const { data: savedTags } = useGetSavedTags();
  const { data: searchTags, refetch } = useGetSearchTags(searchRef.current?.value);
  const { mutate: saveTags } = useSaveTags();
  const { mutate: deleteTag } = useDeleteTag();

  const { register, handleSubmit } = useForm<SearchInput>();
  const onSubmit: SubmitHandler<SearchInput> = (data) =>
    saveTags({
      records: data.query.map((tag) => ({
        fields: {
          name: tag,
        },
      })),
    });

  return (
    <PageLayout>
      <h2>{t('hello')}</h2>
      <div>
        <h3>Tags list to select:</h3>
        <input
          type="text"
          ref={searchRef}
          defaultValue=""
          placeholder="Search"
          autoComplete="off"
          onChange={() => refetch()}
        />
      </div>
      <div>
        <h4>Tags list to select:</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {searchTags.map((tag) => (
            <div key={tag.id}>
              <input type="checkbox" value={tag.fields.name} {...register('query')} />
              <label>{tag.fields.name}</label>
            </div>
          ))}
          <button type="submit">Zapisz</button>
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
