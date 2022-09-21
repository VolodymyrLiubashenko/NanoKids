import {useState} from 'react';
import Burger from 'components/Burger/Burger';
import MainMenu from 'components/MainMenu/MainMenu';
import {StyledHeader, StyledFlexHeaderContainer} from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBurger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader>
      <StyledFlexHeaderContainer>
        <Burger onCklick={handleToggleBurger} isOpen={isOpen} />
      </StyledFlexHeaderContainer>
      <MainMenu
        isOpen={isOpen}
        list={[
          'Футбольна Школа "Nanokids"',
          'Тренування для дітей від 1.8років',
          'Команди 2018-2013 років народження',
          'Інфраструктура',
          'Світилни',
          'Досягнення',
          'Тренери',
          'Контакти',
        ]}
      />
    </StyledHeader>
  );
};

export default Header;
