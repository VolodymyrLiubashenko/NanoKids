import {StyledPrevArrow, StyledNextArrow} from './ArrowStyled';

interface ArrowPropInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const PrevArrow: React.FC<ArrowPropInterface> = ({onClick}) => {
  return <StyledPrevArrow onClick={onClick} whileHover={{scale: 1.1}} />;
};

export const NextArrow: React.FC<ArrowPropInterface> = ({onClick}) => {
  return <StyledNextArrow onClick={onClick} whileHover={{scale: 1.1}} />;
};
