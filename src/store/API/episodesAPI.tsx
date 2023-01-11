import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const episodesAPI = createApi({
  reducerPath: "episodesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllEpisodes: builder.query({
      query: () => ({
        url: `/episode`,
        method: "GET",
      }),
    }),
    getOneEpisode: builder.query({
      query: (episodeNumber) => ({
        url: `/episode/${episodeNumber}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllEpisodesQuery, useGetOneEpisodeQuery } = episodesAPI;
