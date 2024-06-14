import type { ComponentProps } from 'react';
import { MouseEventHandler } from 'react';

import { Spinner } from '../Spinner';
import * as Styled from './Button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: boolean;
  loading?: boolean;
};

export const Button = ({ children, onClick, icon, loading, ...rest }: ComponentProps<'button'> & ButtonProps) => (
  <Styled.Button $icon={icon} $loading={loading} onClick={onClick} {...rest}>
    {loading ? <Spinner width="23px" height="23px" /> : children}
  </Styled.Button>
);
