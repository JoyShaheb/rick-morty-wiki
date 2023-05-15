import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter } from "../../types/characters.interface";
import { IPaginationInfo } from "../../types/pagination.interface";
import {
  CharacterGenderEnums,
  CharacterSpeciesEnums,
  CharacterStatusEnums,
} from "../../types/enums";

interface IGetCharactersResponse {
  info: IPaginationInfo;
  results: ICharacter[];
}

interface characterQueryParams {
  name: string;
  page: number;
  status: CharacterStatusEnums | "";
  species: CharacterSpeciesEnums | "";
  gender: CharacterGenderEnums | "";
}

export const charactersAPI = createApi({
  reducerPath: "charactersAPI",
  tagTypes: ["Characters"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/character",
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<
      IGetCharactersResponse,
      characterQueryParams
    >({
      query: ({ name, page, status, species, gender }) =>
        `?name=${name}&page=${page}&status=${status}&species=${species}&gender=${gender}`,
      providesTags: ["Characters"],
    }),
    getOneCharacterByID: builder.query<ICharacter, string | number>({
      query: (id) => `/${id}`,
      providesTags: ["Characters"],
    }),
    getMultipleCharacters: builder.query<ICharacter[], string>({
      query: (ids) => `/${ids}`,
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterByIDQuery, useGetMultipleCharactersQuery } =
  charactersAPI;
