import {MENU_ITEMS} from 'constants/menuList';
import {MenuItemInterface, SubmenuInterface} from 'constants/menuList';
import {useModalWindowContext} from 'context/ModalWindowProvider';
import {useState} from 'react';
import useRouters from 'routes/useRouters';

type subMenuHandleClickInterface = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  el: SubmenuInterface
) => void;

const {signUp} = MENU_ITEMS;

const useNavigationItem = (item: MenuItemInterface) => {
  const {addQueryParams} = useRouters();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const {handleOpen} = useModalWindowContext();

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const subMenuHandleClick: subMenuHandleClickInterface = (e, el) => {
    e.stopPropagation();
    addQueryParams({team: el.query});
    closeSubMenu();
  };

  const menuHandleClick = () => {
    if (item.name === signUp) {
      addQueryParams({contactForm: true});
      handleOpen();
    }
  };
  return {
    menuHandleClick,
    subMenuHandleClick,
    isSubMenuOpen,
    openSubMenu,
    closeSubMenu,
  };
};

export default useNavigationItem;
