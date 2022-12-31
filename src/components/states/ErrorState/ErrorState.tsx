import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Grid, Typography } from "@mui/material";

interface iErrorState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}

const ErrorState: FC<iErrorState> = ({ error, isLoading }) => {
  return (
    <>
      {!isLoading && error && (
        <Grid key={nanoid()} item xs={12}>
          <Typography variant="h5" textAlign="center">
            Something went wrong
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default ErrorState;
