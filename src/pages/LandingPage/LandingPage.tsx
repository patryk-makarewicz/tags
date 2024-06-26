import { Toaster } from 'react-hot-toast';

import { TagsManager } from '@/components';
import { PageLayout } from '@/layout';

export const LandingPage = () => (
  <PageLayout>
    <TagsManager />
    <Toaster />
  </PageLayout>
);
