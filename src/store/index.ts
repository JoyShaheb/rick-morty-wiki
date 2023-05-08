import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import { filterSlice, setPostPerPage, resetFilter } from "./Slices/FilterSlice";
import {
  charactersAPI,
  useGetAllCharactersQuery,
  useGetOneCharacterByIDQuery,
} from "./API/CharactersAPI";

export const store = configureStore({
  reducer: {
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    system: sysmtemSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  // system actions
  resetSystem,
  themeSwitch,

  // filter actions
  setPostPerPage,
  resetFilter,

  // Characters API
  useGetAllCharactersQuery,
  useGetOneCharacterByIDQuery,
};
