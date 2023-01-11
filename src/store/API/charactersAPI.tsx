import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: ({ name, page, status, species, gender }) => ({
        url: `/character?name=${name}&page=${page}&status=${status}&species=${species}&gender=${gender}`,
        method: "GET",
      }),
    }),
    getOneCharacter: builder.query({
      query: (id) => ({
        url: `/character/${id}`,
        method: "GET",
      }),
    }),
    getMultipleCharacters: builder.query({
      query: (ids) => ({
        url: `/character/${ids}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterQuery, useGetMultipleCharactersQuery } =
  charactersAPI;
