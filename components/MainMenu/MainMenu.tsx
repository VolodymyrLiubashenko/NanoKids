import {LinkButton} from 'components/Button/Button';
import {AnimatePresence} from 'framer-motion';
import {
  StyledNavigation,
  listItemsVarints,
  menuVariants,
} from './MainMenu.styled';
import {motion} from 'framer-motion';

interface MainMenuPropsInterface {
  list: string[];
  isOpen: Boolean;
}

const MainMenu: React.FC<MainMenuPropsInterface> = ({list, isOpen}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledNavigation
          initial={'close'}
          animate={'open'}
          exit={'close'}
          variants={menuVariants}
        >
          <ul>
            {list.map((el, i) => (
              <motion.li
                custom={i}
                variants={listItemsVarints}
                animate={'open'}
                initial={'close'}
                exit={'close'}
                key={el}
              >
                <LinkButton title={el} />
              </motion.li>
            ))}
          </ul>
        </StyledNavigation>
      )}
    </AnimatePresence>
  );
};

export default MainMenu;
