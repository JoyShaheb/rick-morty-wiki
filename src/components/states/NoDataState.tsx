import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Grid, Typography } from "@mui/material";
import { iErrorState } from "../../types/types";

interface iNoDataState extends iErrorState {
  dataLength?: number;
}

const NoDataState: FC<iNoDataState> = ({
  error,
  isLoading,
  dataLength,
  isFetching,
}) => {
  return (
    <>
      {!isLoading && !isFetching && !error && dataLength === 0 && (
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
