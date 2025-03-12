import React, { useState } from 'react';
import {
  HeaderStyled,
  HeaderName,
  Interaction,
  ButtonCont,
  NoticeCont,
} from './styled';
import { Button, COLOR_ERROR, LoaderHorizontal, Notice } from 'shared';
import { THeaderProps } from '../type';
import { RefreshIcon, NoticeIcon } from 'shared';

export const Header: React.FC<THeaderProps> = ({
  handleRefreshData,
  error,
  isFetching,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <HeaderStyled key="MainPageHeader">
      <HeaderName>Match Tracker</HeaderName>
      <Interaction>
        {isFetching && <LoaderHorizontal />}
        {error && !isFetching && (
          <NoticeCont>
            <Notice
              name={'Ошибка: не удалось загрузить информацию'}
              icon={<NoticeIcon />}
              color={COLOR_ERROR}
            />
          </NoticeCont>
        )}
        <ButtonCont>
          <Button
            icon={<RefreshIcon />}
            onClick={handleRefreshData}
            isPressed={isPressed}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
          >
            Обновить
          </Button>
        </ButtonCont>
      </Interaction>
    </HeaderStyled>
  );
};
