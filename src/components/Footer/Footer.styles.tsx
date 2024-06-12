import styled from 'styled-components';

import { breakpoint, fontSize, zIndex } from '../../styles';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin: auto;
  border-top: 1px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: relative;
  top: 0;
  z-index: ${zIndex.footer};

  @media screen and (min-width: ${breakpoint.l}) {
    height: 60px;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: ${fontSize.s};
  margin: 0;
  text-align: center;
`;
