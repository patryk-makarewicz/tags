import { type ComponentProps } from 'react';

type Props = ComponentProps<'label'> & {
  children: string;
};

export const Label = ({ children }: Props) => <label>{children}</label>;
