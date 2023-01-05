import React, { FC } from "react";
import { Chip, Container, Stack, Typography } from "@mui/material";
import { useGetOneCharacterQuery } from "../store";
import { useParams } from "react-router-dom";
import LoadingState from "../components/states/LoadingState/LoadingState";
import Tags from "../components/Tags/Tags";
import ErrorState from "../components/states/ErrorState/ErrorState";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, isFetching } = useGetOneCharacterQuery(id);
  const { gender, image, location, name, origin, status, species } = data || {};
  console.log(data);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <LoadingState error={error} isLoading={isLoading} skeletonCount={1} />
      <ErrorState error={error} isLoading={isLoading} />
      {!isLoading &&
        !error &&
        !isFetching &&
        Object?.keys(data)?.length > 0 && (
          <Stack direction="column" alignItems="center" gap={1}>
            <Stack
              direction={{ sm: "column", md: "row" }}
              alignItems={{ sm: "start", md: "center" }}
              gap={1}
              mb={1}
            >
              <Typography textAlign="center" variant="h5">
                {name}
              </Typography>
              <Chip
                label={status}
                color={
                  status === "Alive"
                    ? "success"
                    : status === "Dead"
                    ? "error"
                    : "warning"
                }
                size="medium"
              />
            </Stack>
            <img src={image} alt="" />
            <Stack my={2}>
              <Tags label="Gender" value={gender} />
              <Tags label="Location" value={location?.name} />
              <Tags label="Origin" value={origin?.name} />
              <Tags label="Species" value={species} />
            </Stack>
          </Stack>
        )}
    </Container>
  );
};

export default CharacterDetails;
