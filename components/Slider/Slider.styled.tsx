import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  padding: 50px 0 10px;
  .slick-track {
    @media screen and (min-width: 1000px) {
      display: flex;
      gap: 10px;
    }
  }
`;
