import type { Meta, StoryObj } from "@storybook/react";
import CharacterDetailsSkeleton from "./CharacterDetailsSkeleton";
import { Grid, Typography } from "@mui/material";

const meta = {
  title: "Components/Skeleton",
  component: CharacterDetailsSkeleton,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {Story()}
        </Grid>
      </Grid>
    ),
  ],
} satisfies Meta<typeof CharacterDetailsSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <>
      <Typography mb={2} textAlign="left" variant="h6">
        Card Details Loader
      </Typography>
      <CharacterDetailsSkeleton {...args} />
    </>
  ),
  args: {
    error: undefined,
    isLoading: true,
    isFetching: true,
  },
};
