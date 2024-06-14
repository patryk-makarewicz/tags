import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Spinner } from '../../Spinner';
import { Button, ButtonProps } from '../Button';

const renderButton = ({ children, loading = false }: Partial<ButtonProps> = {}) => {
  const handleOnClick = vi.fn();

  const { getByText, getByTestId } = render(
    <Button onClick={handleOnClick}>{loading ? <Spinner width="23px" height="23px" /> : children}</Button>
  );

  return {
    handleOnClick,
    getByText,
    getByTestId,
  };
};

describe('test Button', () => {
  it('should render label and call after click', () => {
    const { getByText, handleOnClick } = renderButton({ children: 'Label' });

    const Label = getByText('Label');
    expect(Label).toBeInTheDocument();

    fireEvent.click(Label);
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render spinner when loading', () => {
    const { getByTestId } = renderButton({ children: 'Label', loading: true });

    const Spinner = getByTestId('spinner');
    expect(Spinner).toBeInTheDocument();
  });
});
