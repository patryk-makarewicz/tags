import { colors } from '@/styles';

import * as Styled from './Spinner.styles';

type SpinnerProps = {
  width?: string;
  height?: string;
};

export const Spinner = ({ width = '50px', height = '50px' }: SpinnerProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Svg
        data-testid="spinner"
        width={width}
        height={height}
        version="1.1"
        className="spinner"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 80 80"
        xmlSpace="preserve">
        <path
          id="spinner"
          fill={colors.primary}
          d="M40,72C22.4,72,8,57.6,8,40C8,22.4,
		22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2
		s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,
		28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z"></path>
      </Styled.Svg>
    </Styled.Wrapper>
  );
};
