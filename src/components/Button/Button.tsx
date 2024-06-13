import type { ComponentProps } from 'react';
import { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, onClick, ...rest }: ComponentProps<'button'> & Props) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);
