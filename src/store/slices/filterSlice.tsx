import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    searchTerm: "",
    status: "",
    species: "",
    gender: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    reset: (state) => {
      state.searchTerm = "";
      state.status = "";
      state.species = "";
      state.gender = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchTerm, reset } = filterSlice.actions;
