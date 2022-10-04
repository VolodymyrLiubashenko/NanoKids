import {motion} from 'framer-motion';
import React from 'react';
import {
  StyledButton,
  StyledLinkButton,
  StyledButtonPropsInterface,
} from './Button.styled';

export interface ButtonPropsInterface extends StyledButtonPropsInterface {
  title: string | React.ReactNode;
  type?: 'submit' | 'button';
  ref?: React.Ref<HTMLButtonElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonPropsInterface> = React.forwardRef(
  function createButton({title, main, type, onClick, disabled}, ref) {
    return (
      <StyledButton
        onClick={onClick}
        type={type}
        main={main}
        ref={ref}
        disabled={disabled}
      >
        {title}
      </StyledButton>
    );
  }
);

export const MotionButton = motion(Button);

export const LinkButton: React.FC<ButtonPropsInterface> = ({
  title,
  onClick,
}) => {
  return <StyledLinkButton onClick={onClick}>{title}</StyledLinkButton>;
};

export default Button;
