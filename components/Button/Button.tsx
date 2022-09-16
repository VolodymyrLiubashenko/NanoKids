import {motion} from 'framer-motion';
import React from 'react';
import {
  StyledButton,
  StyledLinkButton,
  StyledButtonPropsInterface,
} from './Button.styled';

export interface ButtonPropsInterface extends StyledButtonPropsInterface {
  title: string;
  type?: 'submit' | 'button';
  ref?: React.Ref<HTMLButtonElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonPropsInterface> = React.forwardRef(
  function createButton({title, main, type, onClick}, ref) {
    return (
      <StyledButton onClick={onClick} type={type} main={main} ref={ref}>
        {title}
      </StyledButton>
    );
  }
);

export const MotionButton = motion(Button);

export const LinkButton: React.FC<ButtonPropsInterface> = ({title}) => {
  return <StyledLinkButton>{title}</StyledLinkButton>;
};

export default Button;
