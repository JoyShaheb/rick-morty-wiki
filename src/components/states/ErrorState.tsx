import { FC } from "react";
import { nanoid } from "nanoid";
import { Grid, Typography } from "@mui/material";
import { iErrorState } from "../../types/types";

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
