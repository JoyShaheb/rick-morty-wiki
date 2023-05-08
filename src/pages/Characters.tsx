import { Grid } from "@mui/material";
import { useGetAllCharactersQuery } from "../store";
import CardComponent from "../components/CardComponent/CardComponent";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../types/characters.interface";
import { nanoid } from "nanoid";

const Characters = () => {
  const { data, isLoading, error, isFetching } = useGetAllCharactersQuery("");
  const { info, results } = data || {};

  console.log(data);

  const navigate = useNavigate();

  return (
    <div>
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
            {/* <LoadingState
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
            /> */}

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
