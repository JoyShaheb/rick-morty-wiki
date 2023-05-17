import {
  RootState,
  setPageNumber,
  setSearchTerm,
  useGetAllCharactersQuery,
} from "../store";
import CardComponent from "../components/CardComponent/CardComponent";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../types/characters.interface";
import { nanoid } from "nanoid";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import { Typography, Grid } from "@mui/material";
import { States } from "../components/states/index";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import CharacterFilter from "../components/Filters/CharacterFilter";

const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchTerm, pageNumber, gender, status, species } = useSelector(
    (store: RootState) => store.filter
  );

  const { data, isLoading, error, isFetching } = useGetAllCharactersQuery(
    {
      page: pageNumber,
      name: searchTerm,
      gender: gender,
      status: status,
      species: species,
    },
    {
      // pollingInterval: 1000,
    }
  );
  const { info, results } = data || {};

  ProgressBar(isLoading || isFetching);
  return (
    <div>
      <SearchBar
        value={searchTerm}
        title="Characters"
        placeholder="Search for characters"
        label="Search"
        onChange={(e) => {
          dispatch(setPageNumber(1));
          dispatch(setSearchTerm(e.target.value));
        }}
      />
      <Typography mb={2} textAlign="center" variant="h6">
        Total Characters Found :{" "}
        {error && !isLoading && !isFetching ? 0 : info?.count}
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} mb={2}>
          <PaginationComponent
            currentPage={pageNumber}
            count={info?.pages}
            onChange={(_, page: number) => dispatch(setPageNumber(page))}
          />
        </Grid>

        <Grid item xs={12} md={2} lg={2}>
          <CharacterFilter />
        </Grid>

        <Grid item xs={12} md={10} lg={10}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <States
              dataLength={results?.length as number}
              error={error}
              isLoading={isLoading}
              skeletonCount={12}
              isFetching={isFetching}
            />

            {!isLoading &&
              !error &&
              !isFetching &&
              (results as ICharacter[])?.length > 0 &&
              results?.map((character: ICharacter) => (
                <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3}>
                  <CardComponent
                    key={character.id}
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

export default Characters;
