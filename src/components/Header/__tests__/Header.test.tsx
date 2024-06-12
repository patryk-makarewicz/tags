import { render } from '@testing-library/react';

import { Header } from '../Header';

const renderHeader = () => {
  const { getByText } = render(<Header />);

  return {
    getByText,
  };
};

describe('test header component', () => {
  it('should render header text', () => {
    const { getByText } = renderHeader();

    const headerText = getByText('header');
    expect(headerText).toBeInTheDocument();
  });
});
