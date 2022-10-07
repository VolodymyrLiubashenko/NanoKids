import {useState} from 'react';
import {StyledMobileMenuList, StyledMenuTitle} from './MobileMenuList.styled';
import {menuList, socialMedia} from 'constants/menuList';

import MobileMenuListItem from './MobileMenuListItem/MobileMenuListItem';

interface MobileMenuListInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuList: React.FC<MobileMenuListInterface> = ({setIsOpen}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleSetActive = (i: number) => {
    setActiveIndex(i);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <StyledMobileMenuList>
      <StyledMenuTitle
        $isActive={0 === activeIndex}
        onClick={() => {
          setActiveIndex(0);
        }}
      >
        NanoKids
      </StyledMenuTitle>
      {menuList.map((el, i) => (
        <MobileMenuListItem
          index={i}
          key={el.name}
          item={el}
          setActiveIndex={() => setActiveIndex(i + 1)}
          handleCloseMenu={handleCloseMenu}
          $isActive={activeIndex === i + 1}
        />
      ))}
      <MobileMenuListItem
        index={10}
        item={socialMedia}
        setActiveIndex={() => handleSetActive(10)}
        handleCloseMenu={handleCloseMenu}
        $isActive={activeIndex === 10}
      />
    </StyledMobileMenuList>
  );
};

export default MobileMenuList;
