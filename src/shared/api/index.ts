import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ftoyd.com/fronttemp-service',
  }),
  tagTypes: ['matches'],
  endpoints: () => ({}),
});
