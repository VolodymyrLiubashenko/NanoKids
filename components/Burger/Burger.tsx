import {StyledBurger, StyledBurgerPropsInterface} from './Burger.styled';

export interface BurgerPropsInterface extends StyledBurgerPropsInterface {
  onCklick?: React.MouseEventHandler<HTMLDivElement>;
}

const Burger: React.FC<BurgerPropsInterface> = ({onCklick, isOpen}) => {
  return (
    <StyledBurger onClick={onCklick} isOpen={isOpen}>
      <span></span>
    </StyledBurger>
  );
};

export default Burger;
