import { FC } from "react";
import { Grid, Skeleton } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { iErrorState } from "../../types/types";

interface iLoadingState extends iErrorState {
  skeletonCount?: number;
}
const LoadingState: FC<iLoadingState> = ({
  error,
  isLoading,
  skeletonCount,
  isFetching,
}) => {
  const cardHeight = 350;
  const animationType = "wave";
  return (
    <>
      {(isLoading || isFetching) &&
        !error &&
        Array(skeletonCount)
          .fill(0)
          .map(() => (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
              <Skeleton
                animation={animationType}
                variant="rectangular"
                height={cardHeight}
                sx={{
                  borderRadius: 1,
                }}
              />
            </Grid>
          ))}
    </>
  );
};

export default LoadingState;
