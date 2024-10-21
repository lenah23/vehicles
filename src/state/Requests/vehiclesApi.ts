import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../API';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  tagTypes: ['vehicles'],
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
  endpoints: builder => ({
    getVehiclesList: builder.query<any, void>({
      query() {
        return {
          url: `/vehicles/GetMakesForVehicleType/car?format=json`,
          method: 'GET',
        };
      },
      providesTags: ['vehicles'],
    }),
  }),
});

export const { useGetVehiclesListQuery } = vehiclesApi;
