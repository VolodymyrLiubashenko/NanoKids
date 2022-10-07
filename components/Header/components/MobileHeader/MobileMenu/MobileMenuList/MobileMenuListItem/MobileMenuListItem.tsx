import {MenuItemInterface} from 'constants/menuList';
import {AnimatePresence} from 'framer-motion';
import {
  StyledSubMenu,
  StyledMenuListItem,
  StyledSubMenuListItem,
  StyledSubMenuTitle,
  variants,
} from './MobileMenuListItem.styled';
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
  const {menuItemHandleClick, addQueryParams} = useMobileMenuItem({
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
                  <StyledSubMenuListItem
                    key={elem.title}
                    custom={index + 1}
                    animate={'openSubMenu'}
                    initial={'closeSubMenu'}
                    exit={'closeSubMenu'}
                    variants={variants}
                    onClick={() => {
                      addQueryParams({team: elem.query});
                      handleCloseMenu();
                    }}
                  >
                    {elem.title}
                  </StyledSubMenuListItem>
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
