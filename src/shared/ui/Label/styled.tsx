import styled from '@emotion/styled';
import { TLabelStyledProps } from './type';

export const LabelCont = styled.div<TLabelStyledProps>`
  border-radius: 4px;
  width: 100%;
  padding: 6px 8px;
  font-weight: 600;
  font-size: 12px;
  background-color: ${(props) => props.bgColor};
  text-align: center;
`;
