import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    searchTerm: "",
    status: "",
    species: "",
    gender: "",
    episode: 1,
    location: 1,
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
    changeEpisode: (state, action) => {
      state.episode = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    resetCharacterFilters: (state) => {
      state.searchTerm = "";
      state.status = "";
      state.species = "";
      state.gender = "";
      state.episode = 1;
      state.location = 1;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSearchTerm, resetCharacterFilters, setFilters, changeEpisode, changeLocation } =
  filterSlice.actions;
