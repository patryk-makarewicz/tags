import { useTranslation } from 'react-i18next';

import makaDevLogo from '../../assets/makaDev.png';
import * as Styled from './Header.styles';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Styled.Header>
      <Styled.InnerWrapper>
        <Styled.Logo src={makaDevLogo} alt="makaDev logo" />
        <Styled.Title>{t('header')}</Styled.Title>
      </Styled.InnerWrapper>
    </Styled.Header>
  );
};
