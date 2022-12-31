import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, useGetAllCharactersQuery } from "../store";
import CardComponent from "../components/CardComponent/CardComponent";
import { nanoid } from "@reduxjs/toolkit";
import { iCharacter } from "../interface";
import { useNavigate } from "react-router-dom";
import LoadingState from "../components/states/LoadingState/LoadingState";
import ErrorState from "../components/states/ErrorState/ErrorState";
import NoDataState from "../components/states/NoDataState/NoDataState";

const Characters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state: any) => state.filter.searchTerm);
  console.log(searchTerm);
  // @ts-ignore
  const { data, error, isLoading } = useGetAllCharactersQuery({name: searchTerm});
  const { info, results } = data || {};
  console.log(data);

  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <SearchBar
        title="Characters"
        placeholder="Search for characters"
        label="Search"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />

      <Grid container rowSpacing={1} columnSpacing={1}>
        <LoadingState error={error} isLoading={isLoading} skeletonCount={12} />
        <ErrorState error={error} isLoading={isLoading} />
        <NoDataState
          error={error}
          isLoading={isLoading}
          dataLength={results?.length}
        />

        {!isLoading &&
          !error &&
          results?.length > 0 &&
          results?.map((character: iCharacter) => (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
              <CardComponent
                id={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                onClick={() => navigate(`/characters/${character.id}`)}
                location={character.location}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Characters;
