import { api } from 'shared';
import { IMatch } from 'shared';
import { TApiResponse } from './type';

const matchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMatches: build.query<IMatch[], void>({
      query: () => ({
        url: 'fronttemp',
        method: 'GET',
      }),
      providesTags: [{ type: 'matches', id: 'LIST' }],
      transformResponse: (response: TApiResponse) => response.data.matches,
    }),
  }),
});

export const { useGetMatchesQuery } = matchesApi;
