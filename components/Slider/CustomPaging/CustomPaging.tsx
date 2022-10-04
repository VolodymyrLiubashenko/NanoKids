import {StyledDot} from './CustomPaging.styled';

interface CustomPaddingPropsInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const CustomPadding: React.FC<CustomPaddingPropsInterface> = ({onClick}) => {
  return <StyledDot onClick={onClick}></StyledDot>;
};

export default CustomPadding;
