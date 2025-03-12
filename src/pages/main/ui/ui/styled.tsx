import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const HeaderName = styled.h1`
  @font-face {
    font-family: 'Tactic Sans';
    src: local('Tactic Sans'),
      url('/shared/assets/fonts/TacticSans/TacticSans-BlkIt.woff2')
        format('woff2');
    font-weight: 900;
    font-style: italic;
  }
  font-family: 'Tactic Sans', sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 32px;
  white-space: nowrap;
`;

export const Interaction = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    align-items: end;
  }
  @media (max-width: 830px) {
    flex-direction: row;
  }
`;

export const NoticeCont = styled.div`
  width: 480px;
  height: 56px;
`;

export const ButtonCont = styled.div`
  width: 204px;
  height: 56px;
`;
