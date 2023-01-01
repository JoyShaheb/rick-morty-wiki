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
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import InfoCard from "../components/InfoCard/InfoCard";

const Characters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPages] = React.useState<number>(1);
  const {
    filter: { searchTerm },
  } = useSelector((state: any) => state);
  const { data, error, isLoading, isFetching } = useGetAllCharactersQuery({
    name: searchTerm,
    page: currentPage,
  });
  const { info, results } = data || {};

  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <SearchBar
        value={searchTerm}
        title="Characters"
        placeholder="Search for characters"
        label="Search"
        onChange={(e) => {
          setCurrentPages(1);
          dispatch(setSearchTerm(e.target.value));
        }}
      />

      <InfoCard label="Characters Found" value={info?.count} variant="h6" />

      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} mb={2}>
          <PaginationComponent
            count={info?.pages}
            onChange={(e: React.ChangeEvent<unknown>, page: number) =>
              setCurrentPages(page)
            }
          />
        </Grid>
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
          dataLength={results?.length}
        />

        {!isLoading &&
          !error &&
          !isFetching &&
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
