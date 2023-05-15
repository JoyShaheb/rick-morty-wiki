import { useGetOneCharacterByIDQuery } from "../store";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import { useParams } from "react-router-dom";
import { Typography, CardMedia, Chip, Stack } from "@mui/material";
import { ErrorState } from "../components/states";
import Tags from "../components/Tags/Tags";
import { ICharacter } from "../types/characters.interface";
import {
  CharacterGenderEnums,
  CharacterSpeciesEnums,
  CharacterStatusEnums,
} from "../types/enums";
import CharacterDetailsSkeleton from "../components/Skeleton/CharacterDetailsSkeleton";

const CharacterDetails = () => {
  const params = useParams();

  const { data, isLoading, isFetching, error } = useGetOneCharacterByIDQuery(
    (
      params as {
        id: string;
      }
    )?.id,
    {
      // pollingInterval: 1000,
    }
  );

  const { gender, image, location, name, origin, status, species } = data || {};

  ProgressBar(isLoading || isFetching);
  return (
    <>
      <Stack direction="column" alignItems="center" gap={1}>
        <CharacterDetailsSkeleton
          error={error}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </Stack>
      <ErrorState error={error} isLoading={isLoading} />
      {!isLoading &&
        !error &&
        !isFetching &&
        Object?.keys(data as ICharacter)?.length > 0 && (
          <Stack direction="column" alignItems="center" gap={1}>
            <Stack
              direction={{ sm: "column", md: "row" }}
              alignItems={{ sm: "center", md: "center" }}
              gap={1}
              mb={1}
            >
              <Typography textAlign="center" variant="h5">
                {name}
              </Typography>
              <Chip
                label={status}
                color={
                  status === CharacterStatusEnums.ALIVE
                    ? "success"
                    : status === CharacterStatusEnums.DEAD
                    ? "error"
                    : "warning"
                }
                size="medium"
              />
            </Stack>
            <CardMedia
              component="img"
              image={image}
              alt={name}
              sx={{
                maxWidth: 300,
              }}
            />
            <Stack my={2}>
              <Tags label="Gender" value={gender as CharacterGenderEnums} />
              <Tags label="Location" value={location?.name as string} />
              <Tags label="Origin" value={origin?.name as string} />
              <Tags label="Species" value={species as CharacterSpeciesEnums} />
            </Stack>
          </Stack>
        )}
    </>
  );
};

export default CharacterDetails;
