import { useTranslation } from 'react-i18next';

import { useGetSearchTags, useGetTagsList } from '../../hooks';
import { PageLayout } from '../../layout';

export const LandingPage = () => {
  const { t } = useTranslation();

  const { data } = useGetSearchTags('React');

  console.log(data);

  return (
    <PageLayout>
      <h1>{t('hello')}</h1>
    </PageLayout>
  );
};
