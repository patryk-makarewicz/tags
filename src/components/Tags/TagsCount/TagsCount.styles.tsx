import styled from 'styled-components';

import { fontSize } from '../../../styles';

type TextProps = {
  $color?: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p<TextProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${fontSize.s};
  color: ${({ $color }) => $color};
`;
