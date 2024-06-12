import styled from 'styled-components';

import { zIndex } from '../../styles';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  height: 60px;
  margin: auto;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: sticky;
  top: 0px;
  z-index: ${zIndex.header};
`;
