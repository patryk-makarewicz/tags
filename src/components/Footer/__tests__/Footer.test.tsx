import { render } from '@testing-library/react';

import { Footer } from '../Footer';

const renderFooter = () => {
  const { getByText } = render(<Footer />);

  return {
    getByText,
  };
};

describe('test footer component', () => {
  it('should render copyright text', () => {
    const { getByText } = renderFooter();

    const copyrightText = getByText('footer.copyright');
    expect(copyrightText).toBeInTheDocument();
  });
});
