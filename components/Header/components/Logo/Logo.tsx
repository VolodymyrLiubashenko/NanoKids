import {Ribbon, StyledLogo, variants} from './Logo.styled';
import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const Logo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AnimatePresence>
      <StyledLogo
        key="logo"
        variants={variants}
        whileHover={'onHoverStartLogo'}
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
