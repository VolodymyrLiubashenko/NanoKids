import {
  StyledMobileMenu,
  StyledMobileMenuHeader,
  StyledClosedButton,
  StyledMenuContainer,
  StyledMenuListContainer,
  StyledSubMenuListContainer,
  variants,
} from './MobileMenu.styled';
import {IoCloseOutline} from 'react-icons/io5';
import MobileMenuList from './MobileMenuList/MobileMenuList';
import {AnimatePresence} from 'framer-motion';

interface MobileMenuInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuInterface> = ({isOpen, setIsOpen}) => {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledMobileMenu
          animate={'openHoleMenu'}
          initial={'closeHoleMenu'}
          variants={variants}
          exit={'closeHoleMenu'}
        >
          <StyledMobileMenuHeader>
            <StyledClosedButton onClick={handleCloseMenu}>
              <IoCloseOutline size={30} color="#ffffff" />
            </StyledClosedButton>
          </StyledMobileMenuHeader>
          <StyledMenuContainer>
            <StyledMenuListContainer>
              <MobileMenuList setIsOpen={setIsOpen} />
            </StyledMenuListContainer>
            <StyledSubMenuListContainer></StyledSubMenuListContainer>
          </StyledMenuContainer>
        </StyledMobileMenu>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
