import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/layout';
import { LandingPage } from '@/pages/LandingPage';
import GlobalStyles from '@/styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <main data-theme={'light'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};
