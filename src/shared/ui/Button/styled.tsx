import styled from '@emotion/styled';
import { TButtonStyledProps } from './type';
import { COLOR_ERROR, COLOR_ERROR_DARKENED } from 'shared/constants';

export const StyledButton = styled.button<TButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: ${({ isPressed }) =>
    isPressed ? COLOR_ERROR_DARKENED : COLOR_ERROR};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 16px;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s, transform 0.1s;
  gap: 10px;
  &:active {
    transform: scale(0.98);
  }

  /* &:disabled {
    background-color:  COLOR_ERROR_DARK;
    cursor: not-allowed;
  } */
`;

export const BtnIcon = styled.span`
  display: flex;
  align-items: center;
`;
