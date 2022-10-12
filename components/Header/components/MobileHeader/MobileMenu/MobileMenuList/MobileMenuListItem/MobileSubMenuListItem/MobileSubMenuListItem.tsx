import {SubmenuInterface} from 'constants/menuList';
import {StyledSubMenuListItem, variants} from './MobileSubMenuListItem.styled';
import useSubMenuListItem from './useSubMenuListItem';

interface MobileSubMenuListItemInterface {
  item: SubmenuInterface;
  index: number;
  handleCloseMenu: () => void;
}

const MobileSubMenuListItem: React.FC<MobileSubMenuListItemInterface> = ({
  item,
  index,
  handleCloseMenu,
}) => {
  const {handleClick} = useSubMenuListItem(item, handleCloseMenu);
  return (
    <StyledSubMenuListItem
      custom={index + 1}
      animate={'openSubMenu'}
      initial={'closeSubMenu'}
      exit={'closeSubMenu'}
      variants={variants}
      onClick={handleClick}
    >
      {item.title}
    </StyledSubMenuListItem>
  );
};

export default MobileSubMenuListItem;
