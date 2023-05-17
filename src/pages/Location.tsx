import { Stack, Typography, Grid } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  RootState,
  setFilters,
  useGetAllLocationsQuery,
  useGetMultipleCharactersQuery,
  useGetOneLocationQuery,
} from "../store";
import { useDispatch, useSelector } from "react-redux";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import DropDownFilter from "../components/Filters/DropDownFilter";
import { useNavigate } from "react-router-dom";
import { States } from "../components/states";
import { ICharacter } from "../types/characters.interface";
import CardComponent from "../components/CardComponent/CardComponent";
import { nanoid } from "nanoid";

const Location = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filter = useSelector((store: RootState) => store.filter);

  const { data: allLocationsData } = useGetAllLocationsQuery(undefined);

  const { data: OneLocationData } = useGetOneLocationQuery(
    (filter.location as number) ? (filter.location as number) : 1
  );

  const { dimension, residents = [], type, name } = OneLocationData || {};

  const multipleCharactersRequest: string | undefined = residents
    ?.map((item: string) => item.split("/").pop())
    .join(",");

  const {
    data: locationCharacters = [],
    isLoading,
    isFetching,
    error,
  } = useGetMultipleCharactersQuery(
    multipleCharactersRequest ? multipleCharactersRequest : "",
    {
      // pollingInterval: 1000,
    }
  );

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setFilters({ name: "location", value: e.target.value }));
  };

  ProgressBar(isLoading || isFetching);

  return (
    <div>
      {!isLoading && !error && !isFetching && (
        <Stack direction="column" alignItems="center" my={3}>
          {type && (
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
            >
              {type}
            </Typography>
          )}
          <Typography variant="h6">Location : {name}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {dimension}
          </Typography>
        </Stack>
      )}

      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={2} lg={2}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            Pick Location
          </Typography>
          <DropDownFilter
            total={allLocationsData?.info?.count as number}
            label="Locations"
            name="Location"
            state={filter.location}
            setState={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <States
              dataLength={residents?.length as number}
              error={error}
              isLoading={isLoading}
              skeletonCount={12}
              isFetching={isFetching}
            />
            {!isLoading &&
              !error &&
              !isFetching &&
              locationCharacters?.length > 0 &&
              locationCharacters?.map((character: ICharacter) => (
                <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
                  <CardComponent
                    onClick={() => navigate(`/characters/${character.id}`)}
                    {...character}
                  />
                </Grid>
              ))}

            {!isLoading &&
              residents?.length !== 0 &&
              !error &&
              !isFetching &&
              !Array.isArray(locationCharacters) && (
                <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
                  <CardComponent
                    onClick={() =>
                      navigate(
                        `/characters/${(locationCharacters as ICharacter)?.id}`
                      )
                    }
                    {...(locationCharacters as ICharacter)}
                  />
                </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Location;
