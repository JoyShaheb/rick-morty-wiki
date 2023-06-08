import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
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
  useGetMultipleCharactersQuery,
} from "./API/CharactersAPI";
import {
  episodesAPI,
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
} from "./API/EpisodesAPI";
import {
  locationAPI,
  useGetAllLocationsQuery,
  useGetOneLocationQuery,
} from "./API/LocationAPI";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  sysmtemSlice.reducer
);

export const store = configureStore({
  reducer: {
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    [episodesAPI.reducerPath]: episodesAPI.reducer,
    [locationAPI.reducerPath]: locationAPI.reducer,
    system: persistedSystemReducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      charactersAPI.middleware,
      episodesAPI.middleware,
      locationAPI.middleware
    ),
});

export const persistedStore = persistStore(store);

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

  // Location API
  locationAPI,
  useGetAllLocationsQuery,
  useGetOneLocationQuery,
};
