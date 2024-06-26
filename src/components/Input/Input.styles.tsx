import styled from 'styled-components';

import { fontSize } from '@/styles';

export const Input = styled.input`
  width: 100%;
  font-size: ${fontSize.m};
  border: none;

  &:focus {
    outline-style: inherit;
  }
`;
