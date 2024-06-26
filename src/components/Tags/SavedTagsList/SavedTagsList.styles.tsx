import styled from 'styled-components';

import { fontSize } from '@/styles';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  height: 80px;
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${fontSize.s};
`;
