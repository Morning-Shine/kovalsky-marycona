import styled from '@emotion/styled';
import { COLOR_CARD_BG_MAIN } from 'shared/constants';

export const NoticeStyled = styled.div`
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  background-color: ${COLOR_CARD_BG_MAIN};
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NtcIcon = styled.span`
  color: ${({ color }) => (color ? color : 'white')};
  display: flex;
  align-items: center;
`;
