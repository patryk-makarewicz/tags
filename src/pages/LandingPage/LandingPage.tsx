import { useTranslation } from 'react-i18next';

import { useGetTagsList } from '../../hooks/useGetTagsList';
import { PageLayout } from '../../layout/PageLayout';

export const LandingPage = () => {
  const { t } = useTranslation();

  const { data } = useGetTagsList();

  console.log(data);

  return (
    <PageLayout>
      <h1>{t('hello')}</h1>
    </PageLayout>
  );
};
