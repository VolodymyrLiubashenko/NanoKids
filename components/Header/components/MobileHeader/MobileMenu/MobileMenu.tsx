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

interface MobileMenuInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuInterface> = ({setIsOpen}) => {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
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
  );
};
export default MobileMenu;
