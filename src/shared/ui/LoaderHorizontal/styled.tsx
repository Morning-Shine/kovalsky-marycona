import styled from '@emotion/styled';
import { COLOR_SUCCESS } from 'shared';

export const LoaderHorizontalCont = styled.div`
  background-color: ${COLOR_SUCCESS};
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 40px;
  left: 0;
  border-radius: 4px;
  h4 {
    color: black;
    text-align: left;
    font-size: 20px;
    line-height: 40px;
    margin-left: 8px;
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  left: 0;
  animation: moveAndRotate 2s linear infinite;

  @keyframes moveAndRotate {
    0% {
      left: 100px;
      top: 10px;
      transform: rotate(0deg);
    }
    25% {
      left: 300px;
      top: 0;
      transform: rotate(90deg);
    }
    50% {
      left: 325px;
      top: 15px;
      transform: rotate(180deg);
    }
    75% {
      left: 100px;
      top: 15px;
      transform: rotate(270deg);
    }
    100% {
      left: 100px;
      top: 10px;
      transform: rotate(360deg);
    }
  }
`;
