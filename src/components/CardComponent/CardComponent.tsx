import { FC } from "react";
import { Typography, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { ICharacter } from "../../types/characters.interface";
import { CharacterStatusEnums } from "../../types/enums";

interface iCardComponent extends ICharacter {
  onClick: () => void;
}

const CardComponent: FC<iCardComponent> = ({
  image,
  name,
  status,
  onClick,
  location,
  species,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onClick}
    >
      <CardMedia
        sx={{ height: 220 }}
        image={image}
        title="Character Image here"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {species}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {location.name}
        </Typography>
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
