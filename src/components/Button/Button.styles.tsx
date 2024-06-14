import styled, { css } from 'styled-components';

import { colors, fontSize, fontWeight } from '../../styles';

type ButtonProps = {
  $icon?: boolean;
  $loading?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-family: 'Archivo', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;

  ${({ $icon }) =>
    $icon
      ? css`
          background-color: inherit;
          color: var(--text-color);
          font-weight: ${fontWeight.regular};
          font-size: ${fontSize.s};
          padding: 3px;
          border-radius: 50%;

          &:hover {
            opacity: 0.7;
            background-color: ${colors.light};
          }
        `
      : css`
          background-color: ${colors.primary};
          color: ${colors.white};
          font-weight: ${fontWeight.semiBold};
          font-size: ${fontSize.m};
          padding: 4px 16px;

          &:hover {
            opacity: 0.8;
          }
        `}

  ${({ $loading }) =>
    $loading &&
    css`
      background-color: ${colors.white};
      padding: 4px 30px;
      border: 1px solid ${colors.primary};
    `}
`;
