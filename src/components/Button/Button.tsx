import type { ComponentProps } from 'react';
import { MouseEventHandler } from 'react';

import * as Styled from './Button.styles';

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: boolean;
  loading?: boolean;
};

export const Button = ({ children, onClick, icon, loading, ...rest }: ComponentProps<'button'> & Props) => (
  <Styled.Button $icon={icon} $loading={loading} onClick={onClick} {...rest}>
    {children}
  </Styled.Button>
);
