import { useTranslation } from 'react-i18next';

import * as Styled from './Header.styles';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Styled.Header>
      <h1>{t('header')}</h1>
    </Styled.Header>
  );
};
