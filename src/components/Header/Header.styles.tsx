import styled from 'styled-components';

import { fontSize, padding, zIndex } from '../../styles';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 60px;
  margin: auto;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: sticky;
  top: 0px;
  padding: ${padding.s};
  z-index: ${zIndex.header};
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: ${fontSize.xl};
  letter-spacing: 1px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
