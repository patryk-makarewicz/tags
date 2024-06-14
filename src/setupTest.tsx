import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render as rtlRender, RenderOptions } from '@testing-library/react';

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const render = (ui: React.ReactElement, options?: RenderOptions) =>
  rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  });

export { render, Wrapper };
