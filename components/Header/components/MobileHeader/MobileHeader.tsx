import Burger from 'components/Burger/Burger';
import {StyledContainer, StyledLogo} from './MobileHeader.styled';
import MobileMenu from './MobileMenu/MobileMenu';
import {useState} from 'react';
import {AnimatePresence} from 'framer-motion';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <Burger onCklick={handleOpenMenu} />
      <StyledLogo>FC NanoKids</StyledLogo>
    </StyledContainer>
  );
};

export default MobileHeader;
