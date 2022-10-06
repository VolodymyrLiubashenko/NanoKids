import Burger from 'components/Burger/Burger';
import {StyledContainer, StyledLogo} from './MobileHeader.styled';
import MobileMenu from './MobileMenu/MobileMenu';
import {useState} from 'react';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Burger onCklick={handleOpenMenu} />
      <StyledLogo>FC NanoKids</StyledLogo>
    </StyledContainer>
  );
};

export default MobileHeader;
