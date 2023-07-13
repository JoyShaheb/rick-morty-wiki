import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBookMark {
  savedCharacters: number[];
}

const initialState: IBookMark = {
  savedCharacters: [],
};

export const BookMarkSlice = createSlice({
  name: "BookMarks",
  initialState,
  reducers: {
    saveCharacter: (state: IBookMark, action: PayloadAction<number>) => ({
      ...state,
      savedCharacters: [...state.savedCharacters, action.payload],
    }),
    removeCharacter: (state: IBookMark, action: PayloadAction<number>) => {
      const index = state.savedCharacters.findIndex(
        (id) => id === action.payload,
      );
      if (index !== -1) {
        state.savedCharacters.splice(index, 1);
      }
    },
    resetBookMark: () => initialState,
  },
});

export const { resetBookMark, saveCharacter, removeCharacter } =
  BookMarkSlice.actions;
