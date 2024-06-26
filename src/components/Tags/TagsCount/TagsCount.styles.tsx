import styled from 'styled-components';

import { colors, fontSize, fontWeight } from '@/styles';

type RectangleProps = {
  $backgroundColor: string;
};

type RectangleTextProps = {
  $color: string;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${fontSize.s};
  color: ${colors.gray};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Rectangle = styled.div<RectangleProps>`
  width: 15px;
  height: 5px;
  margin: 0 2px;
  display: inline-block;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const RectangleText = styled.p<RectangleTextProps>`
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
  color: ${({ $color }) => $color};
  margin-right: 8px;
`;
