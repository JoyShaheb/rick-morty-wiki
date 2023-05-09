import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchTerm: string;
  pageNumber: number;
  postsPerPage: number;
}

const initialState: FilterState = {
  searchTerm: "",
  pageNumber: 1,
  postsPerPage: 10,
  // will add more stuffs later
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
    setPostPerPage: (state: FilterState, action: PayloadAction<number>) => {
      state.postsPerPage = action.payload;
    },
    resetFilter: () => initialState,
  },
});

export const { setPostPerPage, resetFilter, setSearchTerm, setPageNumber } =
  filterSlice.actions;
