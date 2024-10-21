import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../API';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  tagTypes: ['vehicles'],
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: (builder) => ({
    getVehiclesList: builder.query<any, any>({
      query() {
        return {
          url: `/`,
          method: 'GET',
        };
      },
      providesTags: ['vehicles'],
    }),
  }),
});

export const {} = vehiclesApi;
