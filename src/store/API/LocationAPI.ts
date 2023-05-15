import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILocation, LocationResponse } from "../../types/location.interface";

export const locationAPI = createApi({
  reducerPath: "locationAPI",
  tagTypes: ["Locations"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/location",
  }),
  endpoints: (builder) => ({
    getAllLocations: builder.query<LocationResponse, undefined>({
      query: () => `/`,
      providesTags: ["Locations"],
    }),
    getOneLocation: builder.query<ILocation, string | number>({
      query: (locationNumber) => `/${locationNumber}`,
      providesTags: ["Locations"],
    }),
  }),
});

export const { useGetAllLocationsQuery, useGetOneLocationQuery } = locationAPI;
