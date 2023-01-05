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
    setFilters: (state, action) => {
      const { name, value } = action.payload;
      // @ts-ignore
      state[name] = value;
    },
    resetCharacterFilters: (state) => {
      state.searchTerm = "";
      state.status = "";
      state.species = "";
      state.gender = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchTerm, resetCharacterFilters, setFilters } = filterSlice.actions;
