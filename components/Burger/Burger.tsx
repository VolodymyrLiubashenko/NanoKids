import {StyledBurger} from './Burger.styled';

interface BurgerPropsInterface {
  onCklick: React.MouseEventHandler<HTMLDivElement>;
  isOpen: Boolean;
}

const Burger: React.FC<BurgerPropsInterface> = ({onCklick, isOpen}) => {
  return (
    <StyledBurger onClick={onCklick} isOpen={isOpen}>
      <span></span>
    </StyledBurger>
  );
};

export default Burger;
