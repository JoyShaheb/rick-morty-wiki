import { MuiThemeEnums } from "./enums";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

export type ThemeTypes = MuiThemeEnums.DARK | MuiThemeEnums.LIGHT;

export interface iErrorState {
  /**
   * This is the loading state of the component / app
   */
  isLoading: boolean;
  /**
   * This is the error state of the component / app
   */
  error: FetchBaseQueryError | SerializedError | undefined;
  /**
   * This is the error state of the component / app
   */
  isFetching?: boolean;
}
