import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationsAPI = createApi({
  reducerPath: "locationsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllLocations: builder.query({
      query: () => ({
        url: `/location`,
        method: "GET",
      }),
    }),
    getOneLocation: builder.query({
      query: (locationNumber) => ({
        url: `/location/${locationNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllLocationsQuery, useGetOneLocationQuery } = locationsAPI;
