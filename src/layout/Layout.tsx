import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';
import * as Styled from './Layout.styles';

export const Layout = () => {
  return (
    <>
      <Styled.Main>
        <Header />
        <Outlet />
        <Footer />
      </Styled.Main>
    </>
  );
};
