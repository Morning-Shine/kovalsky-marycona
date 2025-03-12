import { SerializedError } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { IMatch } from 'shared';

export type THeaderProps = {
  handleRefreshData: () => QueryActionCreatorResult<
    QueryDefinition<
      void,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      'matches',
      IMatch[],
      'api'
    >
  >;
  isFetching: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};
