import {MENU_ITEMS} from 'constants/menuList';
import {MenuItemInterface} from 'constants/menuList';
import {useModalWindowContext} from 'context/ModalWindowProvider';
import useRouters, {QueryObjectInterface} from 'routes/useRouters';

interface useMobileMenuItemParamsI {
  index: number;
  handleCloseMenu: () => void;
  item: MenuItemInterface;
  setActiveIndex: (value: React.SetStateAction<number>) => void;
}

type UseMobileMenuItem = (obj: useMobileMenuItemParamsI) => {
  menuItemHandleClick: () => void;
  addQueryParams: (newQueryParams: QueryObjectInterface) => void;
};

const {signUp} = MENU_ITEMS;

const useMobileMenuItem: UseMobileMenuItem = ({
  index,
  item,
  handleCloseMenu,
  setActiveIndex,
}) => {
  const {addQueryParams, goToSelectedPage} = useRouters();
  const {handleOpenModalWindow} = useModalWindowContext();

  const menuItemHandleClick = () => {
    if (item.query) {
      addQueryParams(item.query);
      handleCloseMenu();
      handleOpenModalWindow();
    }
    if (item.subMenu) {
      setActiveIndex(index);
    }
    if (item.urlPath) {
      handleCloseMenu();
      goToSelectedPage(item.urlPath);
    }
  };

  return {menuItemHandleClick, addQueryParams};
};

export default useMobileMenuItem;
