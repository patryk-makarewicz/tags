import { Ref, forwardRef, type ComponentProps } from 'react';

import * as Styled from './Input.styles';

type InputProps = ComponentProps<'input'> & {
  width?: string;
};

export const Input = forwardRef(
  ({ type = 'text', width = '100%', ...props }: InputProps, ref: Ref<HTMLInputElement>) => (
    <Styled.Input
      ref={ref}
      type={type}
      style={{
        width,
      }}
      {...props}
    />
  )
);
