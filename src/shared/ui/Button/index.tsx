import React from 'react';
import { IButtonProps } from './type';
import { BtnIcon, StyledButton } from './styled';

export const Button: React.FC<IButtonProps> = ({
  children,
  icon,
  isDisabled,
  isPressed,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      isPressed={isPressed}
      isDisabled={isDisabled}
      {...props}
    >
      {children}
      {icon && <BtnIcon>{icon}</BtnIcon>}
    </StyledButton>
  );
};
