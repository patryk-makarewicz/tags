import styled from 'styled-components';

import { colors, padding } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  padding: ${padding.m};
  border: 1px solid ${colors.light};
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
