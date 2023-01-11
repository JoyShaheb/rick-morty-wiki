import { configureStore } from "@reduxjs/toolkit";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  filterSlice,
  resetCharacterFilters,
  setSearchTerm,
  setFilters,
  changeEpisode,
  changeLocation,
} from "./slices/filterSlice";
import {
  charactersAPI,
  useGetAllCharactersQuery,
  useGetOneCharacterQuery,
  useGetMultipleCharactersQuery
} from "./API/charactersAPI";
import {
  episodesAPI,
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
} from "./API/episodesAPI";
import {
  locationsAPI,
  useGetAllLocationsQuery,
  useGetOneLocationQuery,
} from "./API/locationAPI";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    filter: filterSlice.reducer,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    [episodesAPI.reducerPath]: episodesAPI.reducer,
    [locationsAPI.reducerPath]: locationsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      charactersAPI.middleware,
      episodesAPI.middleware,
      locationsAPI.middleware
    );
  },
});

setupListeners(store.dispatch);

export {
  themeSwitch,
  resetCharacterFilters,
  setSearchTerm,
  useGetAllCharactersQuery,
  useGetOneCharacterQuery,
  setFilters,
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
  changeEpisode,
  changeLocation,
  useGetAllLocationsQuery,
  useGetOneLocationQuery,
  useGetMultipleCharactersQuery
};
