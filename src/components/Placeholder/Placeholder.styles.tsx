import styled, { css } from 'styled-components';

import { colors } from '@/styles';

type PlaceholderProps = {
  $hide: boolean;
};

export const Placeholder = styled.div<PlaceholderProps>`
  @keyframes backgroundWave {
    0% {
      background-color: ${colors.light};
    }
    50% {
      background-color: ${colors.gray2};
    }
    100% {
      background-color: ${colors.light};
    }
  }
  animation: backgroundWave 1.5s ease-in-out infinite;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: ease 1s all;
  ${({ $hide }) =>
    $hide
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
