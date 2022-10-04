import {useState} from 'react';
import {menuList} from 'constants/menuList';
import {StyledNavigationList, StyledNavigation} from './NavigationMenu.styled';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationMenu: React.FC = () => {
  const [isActive, setActive] = useState(false);

  return (
    <StyledNavigation>
      <StyledNavigationList>
        {menuList.map((el) => (
          <NavigationItem
            item={el}
            key={el.name}
            setActive={setActive}
            isActive={isActive}
          />
        ))}
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default NavigationMenu;
