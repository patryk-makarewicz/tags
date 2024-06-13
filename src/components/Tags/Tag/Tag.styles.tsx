import styled from 'styled-components';

import { colors, fontSize, fontWeight } from '../../../styles';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.medium};
  border-radius: 8px;
  border: 1px solid ${colors.gray2};
`;
