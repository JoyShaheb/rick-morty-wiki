import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: ({ name, page }) => ({
        url: `/character?name=${name}&page=${page}`,
        method: "GET",
      }),
    }),
    getOneCharacter: builder.query({
      query: (id) => ({
        url: `/character/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterQuery } =
  charactersAPI;
