import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  postsPerPage: number;
}

const initialState: FilterState = {
  postsPerPage: 10,
  // will add more stuffs later
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPostPerPage: (state: FilterState, action: PayloadAction<number>) => {
      state.postsPerPage = action.payload;
    },
    resetFilter: () => initialState,
  },
});

export const { setPostPerPage, resetFilter } = filterSlice.actions;
