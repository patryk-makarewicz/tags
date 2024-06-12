import { useTranslation } from 'react-i18next';

import { PageLayout } from '../../layout/PageLayout';

export const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1>{t('hello')}</h1>
    </PageLayout>
  );
};
