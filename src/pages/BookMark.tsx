import { RootState, useGetMultipleCharactersQuery } from "../store";
import { useSelector } from "react-redux";
import { Stack, Typography, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent/CardComponent";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../types/characters.interface";
import { nanoid } from "nanoid";
import { States } from "../components/states";
import { ProgressBar } from "../components/NProgress/ProgressBar";

const BookMark = () => {
  const navigate = useNavigate();
  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.savedCharacters,
  );

  const { data, isLoading, error, isFetching } = useGetMultipleCharactersQuery(
    bookmarks.toString(),
  );

  ProgressBar(isLoading || isFetching);
  return (
    <Stack>
      <Typography mb={2} textAlign="center" variant="h6">
        BookMarked Characters
      </Typography>

      <Grid item xs={12} md={10} lg={10}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <States
            dataLength={data?.length as number}
            error={error}
            isLoading={isLoading}
            skeletonCount={12}
            isFetching={isFetching}
          />

          {!isLoading &&
            !error &&
            !isFetching &&
            (data as ICharacter[])?.length > 0 &&
            data?.map((character: ICharacter) => (
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
    </Stack>
  );
};

export default BookMark;
