import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  mode: "light" | "dark";
}

const initialState: SystemState = {
  mode: "light",
};

export const sysmtemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setMode: (state: SystemState, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
    },
    resetSystem: () => initialState,
  },
});

export const { setMode, resetSystem } = sysmtemSlice.actions;
