import {SubmenuInterface} from 'constants/menuList';
import useRouters from 'routes/useRouters';

const useSubMenuListItem = (
  item: SubmenuInterface,
  handleCloseMenu: () => void
) => {
  const {addQueryParams, goToSelectedPage} = useRouters();

  const handleClick = () => {
    if (item.urlPath) {
      handleCloseMenu();
      goToSelectedPage(item.urlPath);
      return;
    }
    if (item.query) {
      handleCloseMenu();
      addQueryParams(item.query);
      return;
    }
  };

  return {handleClick};
};

export default useSubMenuListItem;
