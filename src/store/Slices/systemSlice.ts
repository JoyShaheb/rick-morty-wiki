import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ThemeTypes, MuiThemeEnums } from "../../types.d";

interface SystemState {
  mode: ThemeTypes;
}

const initialState: SystemState = {
  mode: MuiThemeEnums.DARK,
};

export const sysmtemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setMode: (state: SystemState, action: PayloadAction<ThemeTypes>) => {
      state.mode = action.payload;
    },
    resetSystem: () => initialState,
  },
});

export const { setMode, resetSystem } = sysmtemSlice.actions;
