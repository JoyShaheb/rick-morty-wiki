import React from "react";
import type { Preview } from "@storybook/react";
import { Container } from "@mui/material";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Container maxWidth="xl" sx={{ my: 3 }}>
        {Story()}
      </Container>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
