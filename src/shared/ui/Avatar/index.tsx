import React from 'react';
import { AvatarCont } from './styled';
import { TAvatar } from './type';

export const Avatar: React.FC<TAvatar> = ({imgPath}) => {
  return (
    <AvatarCont>
      <img
        src={imgPath}
        alt="team icon"
      />
    </AvatarCont>
  );
};
