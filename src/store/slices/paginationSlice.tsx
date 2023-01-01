import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    character: {},
    episode: {},
    location: {},
  },
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {},
});

export const { reset } = paginationSlice.actions;
