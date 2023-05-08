import { Grid } from "@mui/material";
import { RootState, setSearchTerm, useGetAllCharactersQuery } from "../store";
import CardComponent from "../components/CardComponent/CardComponent";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../types/characters.interface";
import { nanoid } from "nanoid";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import { Typography } from "@mui/material";
import LoadingState from "../components/states/LoadingState";
import ErrorState from "../components/states/ErrorState";
import NoDataState from "../components/states/NoDataState";
// import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";

const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postsPerPage, searchTerm } = useSelector((x: RootState) => x.filter);

  const { data, isLoading, error, isFetching } = useGetAllCharactersQuery({
    page: 1,
    name: searchTerm,
    gender: "",
    status: "",
    species: "",
  });
  const { info, results } = data || {};

  ProgressBar(isFetching);
  return (
    <div>
      <SearchBar
        value={searchTerm}
        title="Characters"
        placeholder="Search for characters"
        label="Search"
        onChange={(e) => {
          // setCurrentPages(1);
          dispatch(setSearchTerm(e.target.value));
        }}
      />
      <Typography mb={2} textAlign="center" variant="h6">
        Total Characters Found :{" "}
        {error && !isLoading && !isFetching ? 0 : info?.count}
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} mb={2}>
          pagination will be here
          {/* <PaginationComponent
            count={info?.pages}
            onChange={(e: React.ChangeEvent<unknown>, page: number) =>
              setCurrentPages(page)
            }
          /> */}
        </Grid>

        <Grid item xs={12} md={2} lg={2}>
          {/* <CharacterFilter /> */}
          character filters will be here
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
              dataLength={results?.length}
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
