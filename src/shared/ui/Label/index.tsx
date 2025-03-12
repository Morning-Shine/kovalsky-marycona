import React from 'react';
import { TLabelProps } from './type';
import { LabelCont } from './styled';
import { COLOR_ERROR, COLOR_SUCCESS, COLOR_WARNING } from 'shared/constants';

export const Label: React.FC<TLabelProps> = (props) => {
  const { name, mode } = props;
  let bgColor;
  switch (mode) {
    case 'success':
      bgColor = COLOR_SUCCESS;
      break;
    case 'error':
      bgColor = COLOR_ERROR;
      break;
    default:
      bgColor = COLOR_WARNING;
      break;
  }

  return <LabelCont bgColor={bgColor}>{name}</LabelCont>;
};
