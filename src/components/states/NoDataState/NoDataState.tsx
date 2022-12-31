import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Grid, Typography } from "@mui/material";

interface iNoDataState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  dataLength?: number;
}

const NoDataState: FC<iNoDataState> = ({ error, isLoading, dataLength }) => {
  return (
    <>
      {!isLoading && !error && dataLength === 0 && (
        <Grid key={nanoid()} item xs={12}>
          <Typography variant="h5" textAlign="center">
            No Data found
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default NoDataState;
