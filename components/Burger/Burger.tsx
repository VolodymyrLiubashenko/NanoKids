import {StyledBurger} from './Burger.styled';

export interface BurgerPropsInterface {
  onCklick?: React.MouseEventHandler<HTMLDivElement>;
}

const Burger: React.FC<BurgerPropsInterface> = ({onCklick}) => {
  return (
    <StyledBurger onClick={onCklick}>
      <span></span>
    </StyledBurger>
  );
};

export default Burger;
