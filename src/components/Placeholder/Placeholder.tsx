import * as Styled from './Placeholder.styles';

type PlaceholderProps = {
  $hide: boolean;
};

export const Placeholder = ({ $hide }: PlaceholderProps) => <Styled.Placeholder $hide={$hide} />;
