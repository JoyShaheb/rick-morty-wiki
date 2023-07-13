import { FC } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import { ICharacter } from "../../types/characters.interface";
import { CharacterStatusEnums } from "../../types/enums";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { RootState, saveCharacter, removeCharacter } from "../../store";
import { useSelector, useDispatch } from "react-redux";

interface iCardComponent extends ICharacter {
  onClick: () => void;
  onSave?: () => void;
}

const CardComponent: FC<iCardComponent> = ({
  id,
  image,
  name,
  status,
  onClick,
  location,
  species,
}) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.savedCharacters,
  );

  const handleSave = () => {
    if (bookmarks.includes(id)) {
      dispatch(removeCharacter(id));
    } else {
      dispatch(saveCharacter(id));
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: 220, cursor: "pointer" }}
        image={image}
        title="Character Image here"
        onClick={onClick}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Stack
          onClick={onClick}
          sx={{
            cursor: "pointer",
          }}
          display="flex"
          flexDirection="column"
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {species}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {location.name}
          </Typography>
        </Stack>
        {bookmarks.includes(id) ? (
          <BookmarkAddedIcon
            sx={{
              alignSelf: "flex-end",
              color: "#d32f2f",
              cursor: "pointer",
            }}
            onClick={handleSave}
          />
        ) : (
          <BookmarkAddIcon
            sx={{
              alignSelf: "flex-end",
              // color: "primary.main",
              cursor: "pointer",
            }}
            onClick={handleSave}
          />
        )}
      </CardContent>
      <Chip
        label={status}
        sx={{ position: "absolute", right: "10px", top: "10px" }}
        color={
          status === CharacterStatusEnums.ALIVE
            ? "success"
            : status === CharacterStatusEnums.DEAD
            ? "error"
            : "warning"
        }
        size="small"
      />
    </Card>
  );
};

export default CardComponent;
