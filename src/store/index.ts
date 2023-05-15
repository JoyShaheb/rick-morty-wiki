import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import {
  filterSlice,
  setSearchTerm,
  resetFilter,
  setPageNumber,
  setFilters,
} from "./Slices/FilterSlice";
import {
  charactersAPI,
  useGetAllCharactersQuery,
  useGetOneCharacterByIDQuery,
  useGetMultipleCharactersQuery
} from "./API/CharactersAPI";
import {
  episodesAPI,
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
} from "./API/EpisodesAPI";

export const store = configureStore({
  reducer: {
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    [episodesAPI.reducerPath]: episodesAPI.reducer,
    system: sysmtemSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersAPI.middleware,
      episodesAPI.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  // system actions
  resetSystem,
  themeSwitch,

  // filter actions
  resetFilter,
  setSearchTerm,
  setPageNumber,
  setFilters,

  // Characters API
  useGetAllCharactersQuery,
  useGetOneCharacterByIDQuery,
  useGetMultipleCharactersQuery,

  // Episodes API
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
};
