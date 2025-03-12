import React from 'react';
import { useGetMatchesQuery } from 'shared/api/matches';
import { ListCont, MainPageCont } from './styled';
import { MatchStringCard } from 'entities/index';
import { Header } from './ui/Header';

export const MainPage: React.FC = () => {
  const { data, isFetching, error, refetch } = useGetMatchesQuery();

  const handleRefreshData = () => refetch();

  return (
    <MainPageCont>
      <Header
        handleRefreshData={handleRefreshData}
        isFetching={isFetching}
        error={error}
      />
      {data && data.length && (
        <ListCont>
          {data.map((item) => (
            <MatchStringCard
              key={item.time}
              {...item}
            />
          ))}
        </ListCont>
      )}
    </MainPageCont>
  );
};
