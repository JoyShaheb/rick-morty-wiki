import React, { FC } from "react";
import { Typography, Card, CardContent, CardMedia, Chip } from "@mui/material";

interface iCardComponent {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  onClick: () => void;
  location: {
    name: string;
    url: string;
  };
}

const CardComponent: FC<iCardComponent> = ({
  id,
  image,
  name,
  status,
  onClick,
  location,
  species
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
      <CardMedia sx={{ height: 220 }} image={image} title="image here" />
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
          status === "Alive"
            ? "success"
            : status === "Dead"
            ? "error"
            : "warning"
        }
        size="small"
      />
    </Card>
  );
};

export default CardComponent;
