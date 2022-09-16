import {motion} from 'framer-motion';
import React from 'react';
import {StyledButton, StyledLinkButton} from './Button.styled';

interface ButtonPropsInterface {
  title: string;
  ref?: React.Ref<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonPropsInterface> = React.forwardRef(
  function createButton({title}, ref) {
    return <StyledButton ref={ref}>{title}</StyledButton>;
  }
);

export const MotionButton = motion(Button);

export const LinkButton: React.FC<ButtonPropsInterface> = ({title}) => {
  return <StyledLinkButton>{title}</StyledLinkButton>;
};

export default Button;
