import Logo from './components/Logo/Logo';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import SocialMedia from './components/SocialMedia/SocialMedia';
import {
  StyledHeader,
  StyledFlexHeaderContainer,
  NavigationContainer,
} from './Header.styled';
import deviceDetector from 'deviceDetector/deviceDetector';
import React, {useEffect, useState} from 'react';
import MobileHeader from './components/MobileHeader/MobileHeader';

const Header: React.FC = () => {
  const {isMobileDevice} = deviceDetector;
  const [isMobile, setDevice] = useState(false);
  useEffect(() => {
    setDevice(isMobileDevice);
  }, [isMobileDevice]);
  return (
    <StyledHeader>
      {isMobile && <MobileHeader />}
      {!isMobile && (
        <StyledFlexHeaderContainer>
          <Logo />
          <NavigationContainer>
            <SocialMedia />
            <NavigationMenu />
          </NavigationContainer>
        </StyledFlexHeaderContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
