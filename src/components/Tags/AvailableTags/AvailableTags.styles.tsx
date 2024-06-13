import styled from 'styled-components';

import { fontSize } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: ${fontSize.m};
  border-radius: 8px;
`;
