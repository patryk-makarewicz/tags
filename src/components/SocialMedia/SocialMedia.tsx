import GithubLogo from '@/assets/github.svg';
import LinkedInLogo from '@/assets/linkedin.svg';

import * as Styled from './SocialMedia.styles';

export const SocialMedia = () => (
  <Styled.Wrapper>
    <Styled.ButtonIcon href="https://www.linkedin.com/in/patryk-makarewicz/" target="_blank" title="Go to LinkedIn">
      <img src={LinkedInLogo} alt="LinkedIn logo" width={36} height={36} />
    </Styled.ButtonIcon>
    <Styled.ButtonIcon href="https://github.com/patryk-makarewicz" target="_blank" title="Go to Github">
      <img src={GithubLogo} alt="Github logo" width={36} height={36} />
    </Styled.ButtonIcon>
  </Styled.Wrapper>
);
