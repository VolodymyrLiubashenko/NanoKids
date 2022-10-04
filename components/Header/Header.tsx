import Logo from './components/Logo/Logo';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import SocialMedia from './components/SocialMedia/SocialMedia';
import {
  StyledHeader,
  StyledFlexHeaderContainer,
  NavigationContainer,
} from './Header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledFlexHeaderContainer>
        <Logo />
        <NavigationContainer>
          <SocialMedia />
          <NavigationMenu />
        </NavigationContainer>
      </StyledFlexHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
