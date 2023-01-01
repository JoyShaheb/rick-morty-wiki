// delete this later

import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    character: {
      currentPage: 1,
      totalPages: 0,
    },
    episode: {
      currentPage: 1,
      totalPages: 0,
    },
    location: {
      currentPage: 1,
      totalPages: 0,
    },
  },
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {},
});

export const { reset } = paginationSlice.actions;
