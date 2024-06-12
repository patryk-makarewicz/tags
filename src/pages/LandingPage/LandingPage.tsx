import { useTranslation } from 'react-i18next';

import { useGetSearchTags, useGetTagsList } from '../../hooks';
import { PageLayout } from '../../layout';

export const LandingPage = () => {
  const { t } = useTranslation();

  const { data: tagsList } = useGetTagsList();
  const { data: searchTags } = useGetSearchTags('React');

  console.log(tagsList);
  console.log(searchTags);

  return (
    <PageLayout>
      <h1>{t('hello')}</h1>
    </PageLayout>
  );
};
