import { useTranslation } from 'react-i18next';

import makaDevLogo from '@/assets/makaDev.png';
import { Placeholder, SocialMedia } from '@/components';
import { usePhotoLoading } from '@/hooks';

import * as Styled from './Header.styles';

export const Header = () => {
  const { t } = useTranslation();
  const { onLoad, loaded, refPhoto } = usePhotoLoading();

  return (
    <Styled.Header>
      <Styled.InnerWrapper>
        <Styled.LogoWrapper>
          <Placeholder $hide={loaded} />
          <Styled.Logo src={makaDevLogo} alt="makaDev logo" ref={refPhoto} onLoad={onLoad} $hide={!loaded} />
        </Styled.LogoWrapper>
        <Styled.Title>{t('header')}</Styled.Title>
      </Styled.InnerWrapper>
      <SocialMedia />
    </Styled.Header>
  );
};
