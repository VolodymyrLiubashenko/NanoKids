import {StyledAppendDots} from './AppendDots.styled';

interface AppendDotsPropsInterface {
  dots: React.ReactNode;
}

const AppendDots: React.FC<AppendDotsPropsInterface> = ({dots}) => {
  return <StyledAppendDots>{dots}</StyledAppendDots>;
};

export default AppendDots;
