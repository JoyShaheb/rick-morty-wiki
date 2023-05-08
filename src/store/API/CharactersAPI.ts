import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter } from "../../types/characters.interface";
import { IPaginationInfo } from "../../types/pagination.interface";
import { CharacterStatusEnums } from "../../types/enums";

interface IGetCharactersResponse {
  info: IPaginationInfo;
  results: ICharacter[];
}

interface characterQueryParams {
  name: string;
  page: number;
  status: CharacterStatusEnums | "";
  species: string;
  gender: string;
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
    getOneCharacterByID: builder.query<ICharacter, number>({
      query: (id) => `/${id}`,
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetOneCharacterByIDQuery } =
  charactersAPI;
