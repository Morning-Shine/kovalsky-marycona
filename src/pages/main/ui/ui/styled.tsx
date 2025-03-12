import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
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
`;

export const Interaction = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const NoticeCont = styled.div`
  width: 480px;
  height: 56px;
`;

export const ButtonCont = styled.div`
  width: 204px;
  height: 56px;
`;
