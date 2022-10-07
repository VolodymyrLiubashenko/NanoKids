import {
  StyledNavigationItem,
  StyledSubMenu,
  StyledSubMenuItem,
  StyledTriangle,
  variants,
} from './NavigationItem.styled';
import {AnimatePresence} from 'framer-motion';
import {MenuItemInterface} from 'constants/menuList';
import useNavigationItem from './useNavigationItem';

interface NavigationItemPropsInterface {
  item: MenuItemInterface;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

const NavigationItem: React.FC<NavigationItemPropsInterface> = ({
  item,
  isActive,
  setActive,
}) => {
  const {
    isSubMenuOpen,
    closeSubMenu,
    menuHandleClick,
    subMenuHandleClick,
    openSubMenu,
  } = useNavigationItem(item);

  return (
    <StyledNavigationItem
      onClick={menuHandleClick}
      onHoverStart={() => {
        setActive(true);
        openSubMenu();
      }}
      onHoverEnd={() => {
        setActive(false);
        closeSubMenu();
      }}
      variants={variants}
      whileHover={isActive ? 'onHover' : 'passiveItem'}
      animate={isActive ? 'passiveItem' : 'onHover'}
      key={item.name}
    >
      {item.name}
      <AnimatePresence>
        {isSubMenuOpen && item.subMenu && (
          <StyledSubMenu
            variants={variants}
            initial={'subMenuInitial'}
            animate={'subMenuAnimate'}
            exit={'subMenuInitial'}
          >
            <StyledTriangle />
            {item.subMenu.map((el) => (
              <StyledSubMenuItem
                key={el.title}
                variants={variants}
                onClick={(e) => subMenuHandleClick(e, el)}
              >
                {el.title}
              </StyledSubMenuItem>
            ))}
          </StyledSubMenu>
        )}
      </AnimatePresence>
    </StyledNavigationItem>
  );
};

export default NavigationItem;
