import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sysmtemSlice, resetSystem, themeSwitch } from "./Slices/systemSlice";
import { filterSlice, setPostPerPage, resetFilter } from "./Slices/FilterSlice";

export const store = configureStore({
  reducer: {
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    system: sysmtemSlice.reducer,
    filter: filterSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    // pokemonApi.middleware
    getDefaultMiddleware().concat(),
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
};
