import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Grid, CardMedia } from "@mui/material";
import { iErrorState } from "../../types/types";
import Error404 from "../../assets/Error404.svg";

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
        <Grid
          key={nanoid()}
          item
          xs={12}
          justifyContent="center"
          display="flex"
        >
          <CardMedia
            component="img"
            image={Error404}
            // onLoad={() => console.log("this is loading")}
            // onError={() => console.log("this is error")}
            alt="Error 404 image"
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "500px",
              },
              objectFit: "cover",
            }}
          />
        </Grid>
      )}
    </>
  );
};

export default NoDataState;
