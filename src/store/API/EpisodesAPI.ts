import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEpisodeDataResponse, IEpisode } from "../../types/episodes.interface";

export const episodesAPI = createApi({
  reducerPath: "episodesAPI",
  tagTypes: ["Episodes"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/episode",
  }),
  endpoints: (builder) => ({
    getAllEpisodes: builder.query<IEpisodeDataResponse, undefined>({
      query: () => `/`,
      providesTags: ["Episodes"],
    }),
    getOneEpisode: builder.query<IEpisode, string | number>({
      query: (id) => `/${id}`,
      providesTags: ["Episodes"],
    }),
  }),
});

export const { useGetAllEpisodesQuery, useGetOneEpisodeQuery } =
  episodesAPI;
