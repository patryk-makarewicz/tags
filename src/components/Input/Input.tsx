import { Ref, forwardRef, type ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  width?: string;
};

export const Input = forwardRef(
  ({ type = 'text', width = '100%', ...props }: InputProps, ref: Ref<HTMLInputElement>) => (
    <input
      ref={ref}
      type={type}
      style={{
        width,
      }}
      {...props}
    />
  )
);
