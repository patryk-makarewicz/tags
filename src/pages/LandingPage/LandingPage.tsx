import { useTranslation } from 'react-i18next';

import { TagsManager } from '../../components';
import { PageLayout } from '../../layout';

export const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h2>{t('hello')}</h2>
      <TagsManager />
    </PageLayout>
  );
};
