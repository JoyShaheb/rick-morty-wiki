import { configureStore } from "@reduxjs/toolkit";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filterSlice, reset, setSearchTerm } from "./slices/filterSlice";
import {
  charactersAPI,
  useGetAllCharactersQuery,
  useGetOneCharacterQuery,
} from "./API/charactersAPI";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
    filter: filterSlice.reducer,
    [charactersAPI.reducerPath]: charactersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(charactersAPI.middleware);
  },
});

setupListeners(store.dispatch);

export {
  themeSwitch,
  reset,
  setSearchTerm,
  useGetAllCharactersQuery,
  useGetOneCharacterQuery,
};
