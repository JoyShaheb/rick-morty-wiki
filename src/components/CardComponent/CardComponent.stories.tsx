import type { Meta, StoryObj } from "@storybook/react";
import CardComponent from "./CardComponent";
import { action } from "@storybook/addon-actions";
import {
  CharacterGenderEnums,
  CharacterSpeciesEnums,
  CharacterStatusEnums,
} from "../../types/enums";
import { Grid } from "@mui/material";

const meta = {
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Grid container rowSpacing={1} columnSpacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CardComponent {...args} />
      </Grid>
    </Grid>
  ),
  args: {
    created: "",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    gender: CharacterGenderEnums.FEMALE,
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    name: "Rick Sanchez",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    species: CharacterSpeciesEnums.HUMAN,
    status: CharacterStatusEnums.ALIVE,
    type: "",
    url: "https://rickandmortyapi.com/api/character/1",
    onClick: action("clicked"),
  },
};
