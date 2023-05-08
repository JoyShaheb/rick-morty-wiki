import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter } from "../../types/characters.interface";
import { IPaginationInfo } from "../../types/pagination.interface";

interface IGetCharactersResponse {
  info: IPaginationInfo;
  results: ICharacter[];
}

export const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  tagTypes: ["Characters"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<IGetCharactersResponse, string>({
      query: () => `/`,
      providesTags: ["Characters"],
    }),
    getOneCharacterByID: builder.query<ICharacter, number>({
      query: (id) => `/${id}`,
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterByIDQuery } =
  charactersAPI;
