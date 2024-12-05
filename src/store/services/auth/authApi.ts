import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import apiPaths from 'src/common/constants/apiPaths';
import { config } from 'src/config/config';
import prepareHeaders from 'src/store/common/headers';

import { LoginDto } from './types';

const { apiUrl } = config;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl, prepareHeaders }),
  endpoints: (builder) => ({
    login: builder.mutation<{ accessToken: string }, LoginDto>({
      query: (body) => ({
        url: apiPaths.login,
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = authApi;
