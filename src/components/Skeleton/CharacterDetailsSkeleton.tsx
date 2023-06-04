import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { iErrorState } from "../../types/types";

const CharacterDetailsSkeleton: FC<iErrorState> = ({
  error = undefined,
  isLoading = false,
  isFetching = false,
}) => {
  return (
    <div>
      {(isLoading || isFetching) && !error && (
        <>
          <Skeleton
            sx={{
              mb: 1,
            }}
          />
          <Skeleton variant="rectangular" width={300} height={300} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </>
      )}
    </div>
  );
};

export default CharacterDetailsSkeleton;
