import { ProgressBar } from "../components/NProgress/ProgressBar";
import { useNavigate } from "react-router-dom";
import {
  RootState,
  useGetAllEpisodesQuery,
  useGetMultipleCharactersQuery,
  useGetOneEpisodeQuery,
  setFilters,
} from "../store";
import { Grid, Stack, Typography } from "@mui/material";
import DropDownFilter from "../components/Filters/DropDownFilter";
import { useSelector, useDispatch } from "react-redux";
import { SelectChangeEvent } from "@mui/material/Select";
import { States } from "../components/states";
import CardComponent from "../components/CardComponent/CardComponent";
import { nanoid } from "nanoid";
import { ICharacter } from "../types/characters.interface";

const Episode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filter = useSelector((store: RootState) => store.filter);

  const { data: allEpisodesInfo } = useGetAllEpisodesQuery(undefined);

  const { data, error, isLoading, isFetching } = useGetOneEpisodeQuery(
    filter.episode
  );

  const { episode, air_date, characters, name } = data || {};

  const multipleCharactersRequest: string | undefined = characters
    ?.map((item) => item.split("/").pop())
    .join(",");

  const { data: characterData } = useGetMultipleCharactersQuery(
    multipleCharactersRequest ? multipleCharactersRequest : "",
    {
      // pollingInterval: 1000,
    }
  );

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setFilters({ name: "episode", value: e.target.value }));
  };

  ProgressBar(isLoading || isFetching);

  return (
    <div>
      {!isLoading && !error && !isFetching && (
        <Stack direction="column" alignItems="center" my={3}>
          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
          >
            {episode}
          </Typography>
          <Typography variant="h6" my={1} textAlign="center">
            Episode name : {name}
          </Typography>
          <Typography>Air Date: {air_date}</Typography>
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
            Pick Episode
          </Typography>
          <DropDownFilter
            total={allEpisodesInfo?.info?.count as number}
            label="Episodes"
            name="Episode"
            state={filter.episode}
            setState={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <States
              dataLength={characters?.length as number}
              error={error}
              isLoading={isLoading}
              skeletonCount={12}
              isFetching={isFetching}
            />

            {!isLoading &&
              !error &&
              !isFetching &&
              (characterData as ICharacter[])?.length > 0 &&
              (characterData as ICharacter[])?.map((character: ICharacter) => (
                <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
                  <CardComponent
                    {...character}
                    onClick={() => navigate(`/characters/${character.id}`)}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Episode;
