import {StyledSlider} from './Slider.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {NextArrow, PrevArrow} from './arrows/Arrows';
import CustomPadding from './CustomPaging/CustomPaging';
import AppendDots from './AppendDots/AppendDots';
import {Settings} from 'react-slick';
import CustomSlide from './CustomSlide/CustomSlide';

const CustomSlider: React.FC<Settings> = ({
  infinite = true,
  dots = true,
  speed = 500,
  slidesToShow = 3,
  centerMode = false,
  children = <CustomSlide />,
  nextArrow = <NextArrow />,
  prevArrow = <PrevArrow />,
  appendDots = (dots) => <AppendDots dots={dots} />,
  customPaging = (i) => <CustomPadding />,
}) => {
  return (
    <StyledSlider
      dots={dots}
      speed={speed}
      infinite={infinite}
      slidesToShow={slidesToShow}
      centerMode={centerMode}
      appendDots={appendDots}
      customPaging={customPaging}
      slidesPerRow={1}
      nextArrow={nextArrow}
      prevArrow={prevArrow}
    >
      {children}
    </StyledSlider>
  );
};

export default CustomSlider;
