import React from 'react';
import { TNoticeProps } from './type';
import { NoticeStyled, NtcIcon } from './styled';

export const Notice: React.FC<TNoticeProps> = (props) => {
  const { name, icon, color } = props;

  return (
    <NoticeStyled>
      {icon && <NtcIcon color={color}>{icon}</NtcIcon>}
      {name}
    </NoticeStyled>
  );
};
