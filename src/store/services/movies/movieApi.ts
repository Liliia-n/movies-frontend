import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import apiPaths from 'src/common/constants/apiPaths';
import { config } from 'src/config/config';
import prepareHeaders from 'src/store/common/headers';

import { userApi } from '../user/userApi';
import { IMovie } from './types';

const { apiUrl } = config;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl, prepareHeaders }),
  tagTypes: ['Movie'],
  endpoints: (builder) => ({
    getMovieById: builder.query<IMovie, string>({
      query: (id) => `${apiPaths.movies}/${id}`,
      providesTags: ['Movie']
    }),
    createMovie: builder.mutation<IMovie, FormData>({
      query: (body) => ({
        url: apiPaths.movies,
        method: 'POST',
        body
      }),
      onQueryStarted: (_arg, api) => {
        api.queryFulfilled.then(() => {
          api.dispatch(userApi.util.invalidateTags(['UserMovies']));
        });
      }
    }),
    updateMovie: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${apiPaths.movies}/${id}`,
        method: 'PATCH',
        body: formData
      }),
      onQueryStarted: (_arg, api) => {
        api.queryFulfilled.then(() => {
          api.dispatch(userApi.util.invalidateTags(['UserMovies']));
        });
      },
      invalidatesTags: ['Movie']
    })
  })
});

export const { useGetMovieByIdQuery, useCreateMovieMutation, useUpdateMovieMutation } = movieApi;
