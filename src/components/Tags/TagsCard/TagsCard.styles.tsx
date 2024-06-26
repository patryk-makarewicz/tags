import styled from 'styled-components';

import { colors, fontSize, fontWeight, padding } from '@/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: ${padding.m};
  border: 1px solid ${colors.light};
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.p`
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.bold};
`;
