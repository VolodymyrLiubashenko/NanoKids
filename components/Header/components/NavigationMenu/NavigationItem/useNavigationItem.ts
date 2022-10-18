import {MenuItemInterface, SubmenuInterface} from 'constants/menuList';
import {useModalWindowContext} from 'context/ModalWindowProvider';
import {useState} from 'react';
import useRouters from 'routes/useRouters';

type subMenuHandleClickInterface = (
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  el: SubmenuInterface
) => void;

const useNavigationItem = (item: MenuItemInterface) => {
  const {addQueryParams, goToSelectedPage} = useRouters();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const {handleOpenModalWindow} = useModalWindowContext();

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const subMenuHandleClick: subMenuHandleClickInterface = (e, el) => {
    if (el.urlPath) {
      goToSelectedPage(el.urlPath);
      closeSubMenu();
      return;
    }
    if (el.query) {
      addQueryParams(el.query);
      closeSubMenu();
      return;
    }
  };

  const menuHandleClick = () => {
    if (item.query) {
      addQueryParams(item.query);
      handleOpenModalWindow();
    }
    if (item.urlPath) {
      goToSelectedPage(item.urlPath);
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
