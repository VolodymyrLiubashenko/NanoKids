import {Ribbon, StyledLogo, variants} from './Logo.styled';
import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import useRouters from 'routes/useRouters';

const Logo: React.FC = () => {
  const {goToSelectedPage} = useRouters();
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    goToSelectedPage('/');
  };
  return (
    <AnimatePresence>
      <StyledLogo
        key="logo"
        variants={variants}
        whileHover={'onHoverStartLogo'}
        onClick={handleClick}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
      >
        <Ribbon
          custom={50}
          variants={variants}
          animate={isHovered ? 'onHoverStartRibbon' : 'onHowerEndRibbon'}
        ></Ribbon>
        <Ribbon
          custom={40}
          variants={variants}
          animate={isHovered ? 'onHoverStartRibbon' : 'onHowerEndRibbon'}
        />
        <h3>NanoKids</h3>
      </StyledLogo>
    </AnimatePresence>
  );
};

export default Logo;
