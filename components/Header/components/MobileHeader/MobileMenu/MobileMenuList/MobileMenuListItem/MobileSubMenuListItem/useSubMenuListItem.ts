import {SubmenuInterface} from 'constants/menuList';
import useRouters from 'routes/useRouters';

const useSubMenuListItem = (
  item: SubmenuInterface,
  handleCloseMenu: () => void
) => {
  const {addQueryParams, goToSelectedPage} = useRouters();

  const handleClick = () => {
    if (item.query) {
      addQueryParams(item.query);
    }
    if (item.urlPath) {
      goToSelectedPage(item.urlPath);
    }
    handleCloseMenu();
  };

  return {handleClick};
};

export default useSubMenuListItem;
