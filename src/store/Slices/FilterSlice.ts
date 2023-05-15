import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  CharacterStatusEnums,
  CharacterGenderEnums,
  CharacterSpeciesEnums,
} from "../../types/enums";

interface FilterState {
  searchTerm: string;
  pageNumber: number;
  status: CharacterStatusEnums | "";
  species: CharacterSpeciesEnums | "";
  gender: CharacterGenderEnums | "";
  episode: number;
  location: number;
}

const initialState: FilterState = {
  searchTerm: "",
  pageNumber: 1,
  status: "",
  species: "",
  gender: "",
  episode: 1,
  location: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state: FilterState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPageNumber: (state: FilterState, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setFilters: (
      state: FilterState,
      action: PayloadAction<{
        name: keyof FilterState;
        value: string | number;
      }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value as never;
    },
    resetFilter: () => initialState,
  },
});

export const { resetFilter, setSearchTerm, setPageNumber, setFilters } =
  filterSlice.actions;
