import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { queryClient } from '../../../api';
import { TagsManager } from '../TagsManager';

const renderTagsManager = () => {
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <TagsManager />
    </QueryClientProvider>
  );

  return {
    getByText,
  };
};

describe('test TagsManager component', () => {
  it('should render elements', () => {
    const { getByText } = renderTagsManager();

    const elementsToCheck = ['tags.header', 'tags.noTags', 'mock.cms'];

    elementsToCheck.forEach((text) => {
      const element = getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
