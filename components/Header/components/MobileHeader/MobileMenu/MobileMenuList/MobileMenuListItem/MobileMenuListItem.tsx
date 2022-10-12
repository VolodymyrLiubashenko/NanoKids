import {MenuItemInterface} from 'constants/menuList';
import {AnimatePresence} from 'framer-motion';
import {
  StyledSubMenu,
  StyledMenuListItem,
  StyledSubMenuTitle,
  variants,
} from './MobileMenuListItem.styled';
import MobileSubMenuListItem from './MobileSubMenuListItem/MobileSubMenuListItem';
import useMobileMenuItem from './useMobileMenuItem';

interface MobileMenuListItemInterface {
  index: number;
  item: MenuItemInterface;
  $isActive: boolean;
  setActiveIndex: (value: React.SetStateAction<number>) => void;
  handleCloseMenu: () => void;
}

const MobileMenuListItem: React.FC<MobileMenuListItemInterface> = ({
  index,
  item,
  $isActive,
  setActiveIndex,
  handleCloseMenu,
}) => {
  const {menuItemHandleClick} = useMobileMenuItem({
    index,
    handleCloseMenu,
    item,
    setActiveIndex,
  });
  return (
    <StyledMenuListItem
      $isActive={$isActive}
      onClick={menuItemHandleClick}
      key={item.name}
    >
      {item.name}
      {item.subMenu && (
        <StyledSubMenu>
          <AnimatePresence>
            {$isActive && (
              <>
                <StyledSubMenuTitle
                  custom={0}
                  animate={'openSubMenu'}
                  initial={'closeSubMenu'}
                  exit={'closeSubMenu'}
                  variants={variants}
                >
                  {item.name}
                </StyledSubMenuTitle>
                {item.subMenu.map((elem, index) => (
                  <MobileSubMenuListItem
                    key={elem.title}
                    handleCloseMenu={handleCloseMenu}
                    item={elem}
                    index={index}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </StyledSubMenu>
      )}
    </StyledMenuListItem>
  );
};
export default MobileMenuListItem;
