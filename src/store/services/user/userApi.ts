import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import apiPaths from 'src/common/constants/apiPaths';
import { config } from 'src/config/config';
import prepareHeaders from 'src/store/common/headers';

import { IMovie } from '../movies/types';

const { apiUrl } = config;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl, prepareHeaders }),
  tagTypes: ['UserMovies'],
  endpoints: (builder) => ({
    getUserMovies: builder.query<IMovie[], void>({
      query: () => ({
        url: apiPaths.userMovies,
        method: 'GET'
      }),
      providesTags: ['UserMovies']
    })
  })
});

export const { useGetUserMoviesQuery } = userApi;
