import styled from '@emotion/styled';
import { COLOR_CARD_BG_MAIN } from 'shared';

export const MatchStringCardCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: linear-gradient(90deg, ${COLOR_CARD_BG_MAIN} 0%, #0a0e12 100%);
  padding: 16px 36px;
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const ScoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 5px 1fr;
  column-gap: 5px;
  min-width: 92px;
  h6 {
    font-size: 20px;
    &:first-of-type {
      justify-self: end;
    }
  }
`;
