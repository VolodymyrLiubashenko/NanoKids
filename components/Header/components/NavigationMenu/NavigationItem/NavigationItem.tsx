import {
  StyledNavigationItem,
  StyledSubMenu,
  StyledSubMenuItem,
  StyledTriangle,
  variants,
} from './NavigationItem.styled';
import {AnimatePresence} from 'framer-motion';
import {MenuItemInterface, SubmenuInterface} from 'constants/menuList';
import {useState} from 'react';
import useRouters from 'routes/useRouters';

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
  const {addQueryParams} = useRouters();
  const [isOpen, setIsOpen] = useState(false);

  type subMenuHandleClickInterface = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    el: SubmenuInterface
  ) => void;

  const subMenuHandleClick: subMenuHandleClickInterface = (e, el) => {
    e.stopPropagation();
    addQueryParams({team: el.query});
    setIsOpen(false);
  };
  return (
    <StyledNavigationItem
      onClick={() => {
        setIsOpen(true);
      }}
      onHoverStart={() => {
        setActive(true);
        setIsOpen(true);
      }}
      onHoverEnd={() => {
        setActive(false);
        setIsOpen(false);
      }}
      variants={variants}
      whileHover={isActive ? 'onHover' : 'passiveItem'}
      animate={isActive ? 'passiveItem' : 'onHover'}
      key={item.name}
    >
      {item.name}
      <AnimatePresence>
        {isOpen && item.subMenu && (
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
