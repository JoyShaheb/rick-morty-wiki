import { configureStore } from "@reduxjs/toolkit";
import { uiSettingsReducer, themeSwitch } from "./slices/uiSettings";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    uiSettings: uiSettingsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
});

setupListeners(store.dispatch);

export { themeSwitch };
