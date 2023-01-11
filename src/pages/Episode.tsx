import React from "react";
import {
  useGetAllEpisodesQuery,
  useGetOneEpisodeQuery,
  useGetMultipleCharactersQuery,
} from "../store";
import { Container, Grid, Typography, Stack } from "@mui/material";
import EpisodeFilter from "../components/Filters/EpisodeFilter/EpisodeFilter";
import { SelectChangeEvent } from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { changeEpisode } from "../store";
import CardComponent from "../components/CardComponent/CardComponent";
import { useNavigate } from "react-router-dom";
import { iCharacter } from "../interface";
import { nanoid } from "@reduxjs/toolkit";
import LoadingState from "../components/states/LoadingState/LoadingState";
import ErrorState from "../components/states/ErrorState/ErrorState";
import NoDataState from "../components/states/NoDataState/NoDataState";
import { Progress } from "../components/NProgress/ProgressBar";

const Episode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filter } = useSelector((state: any) => state);
  const { data: allEpisodes = {} } = useGetAllEpisodesQuery({});
  const { info } = allEpisodes;
  const { data: oneEpisode = {} } = useGetOneEpisodeQuery(filter.episode);
  const { air_date, characters = [], episode, name } = oneEpisode;

  var {
    data: episodeCharacters = [],
    isLoading,
    isFetching,
    error,
  } = useGetMultipleCharactersQuery(
    characters.map((character: string) => character.split("/").pop())
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeEpisode(event.target.value as string));
  };

  if (characters?.length === 1) {
    episodeCharacters = [episodeCharacters];
  }

  Progress(isFetching)

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {!isLoading && !error && !isFetching && (
        <Stack direction="column" alignItems="center" my={3}>
          {episode && (
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
            >
              {episode}
            </Typography>
          )}
          <Typography variant="h6">Episode name : {name}</Typography>
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
          <EpisodeFilter
            total={info?.count}
            label="Episodes"
            name="Episode"
            state={filter.episode}
            setState={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <LoadingState
              error={error}
              isLoading={isLoading}
              skeletonCount={12}
              isFetching={isFetching}
            />
            <ErrorState error={error} isLoading={isLoading} />
            <NoDataState
              error={error}
              isLoading={isLoading}
              dataLength={characters?.length}
              isFetching={isFetching}
            />
            {!isLoading &&
              !error &&
              !isFetching &&
              episodeCharacters?.length > 0 &&
              episodeCharacters?.map((character: iCharacter) => (
                <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
                  <CardComponent
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    species={character.species}
                    onClick={() => navigate(`/characters/${character.id}`)}
                    location={character.location}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Episode;
