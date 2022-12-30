import { createSlice } from "@reduxjs/toolkit";

// @ts-ignore
const localStoreData = JSON.parse(localStorage.getItem("uiSettings")) || {};

export const uiSettings = createSlice({
  name: "uiSettings",
  initialState: {
    theme: localStoreData.theme || "dark",
  },
  reducers: {
    themeSwitch: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(
        "uiSettings",
        JSON.stringify({
          theme: action.payload
        })
      );
    },
  },
  extraReducers: (builder) => {},
});

export const uiSettingsReducer = uiSettings.reducer;
export const { themeSwitch } = uiSettings.actions;