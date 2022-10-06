import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import {
  StyledMobileMenuList,
  StyledSubMenu,
  StyledMenuListItem,
  StyledSubMenuListItem,
  StyledSubMenuTitle,
  StyledMenuTitle,
  variants,
} from './MobileMenuList.styled';
import {menuList} from 'constants/menuList';
import socialMedia from 'constants/socialMediaList';
import useRouters from 'routes/useRouters';

interface MobileMenuListInterface {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuList: React.FC<MobileMenuListInterface> = ({setIsOpen}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const {addQueryParams} = useRouters();
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
        <StyledMenuListItem
          $isActive={i + 1 === activeIndex}
          onClick={() => handleSetActive(i + 1)}
          key={el.name}
        >
          {el.name}
          {el.subMenu && (
            <StyledSubMenu>
              <AnimatePresence>
                {activeIndex === i + 1 && (
                  <>
                    <StyledSubMenuTitle
                      custom={0}
                      animate={'openSubMenu'}
                      initial={'closeSubMenu'}
                      exit={'closeSubMenu'}
                      variants={variants}
                    >
                      {el.name}
                    </StyledSubMenuTitle>
                    {el.subMenu.map((elem, index) => (
                      <StyledSubMenuListItem
                        key={elem.title}
                        custom={index + 1}
                        animate={'openSubMenu'}
                        initial={'closeSubMenu'}
                        exit={'closeSubMenu'}
                        variants={variants}
                        onClick={() => {
                          addQueryParams({team: elem.query});
                          handleCloseMenu();
                        }}
                      >
                        {elem.title}
                      </StyledSubMenuListItem>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </StyledSubMenu>
          )}
        </StyledMenuListItem>
      ))}
      <StyledMenuListItem
        $isActive={10 === activeIndex}
        onClick={() => handleSetActive(10)}
      >
        NanoKids in socials
        <AnimatePresence>
          <StyledSubMenu>
            {activeIndex === 10 && (
              <>
                <StyledSubMenuTitle
                  custom={0}
                  animate={'openSubMenu'}
                  initial={'closeSubMenu'}
                  exit={'closeSubMenu'}
                  variants={variants}
                >
                  NanoKids in socials
                </StyledSubMenuTitle>
                {socialMedia.map((el, i) => (
                  <StyledSubMenuListItem
                    key={el.title}
                    custom={i + 1}
                    animate={'openSubMenu'}
                    initial={'closeSubMenu'}
                    exit={'closeSubMenu'}
                    variants={variants}
                    onClick={() => {
                      handleCloseMenu();
                    }}
                  >
                    {el.src}
                  </StyledSubMenuListItem>
                ))}
              </>
            )}
          </StyledSubMenu>{' '}
        </AnimatePresence>
      </StyledMenuListItem>
    </StyledMobileMenuList>
  );
};

export default MobileMenuList;
