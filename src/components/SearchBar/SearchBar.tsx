import { FC } from "react";
import { TextField, Stack, Typography } from "@mui/material";

interface iSearchBar {
  title: string;
  placeholder: string;
  variant?: "outlined" | "standard" | "filled";
  label?: string;
}

const SearchBar: FC<iSearchBar> = ({ placeholder, title, variant, label }) => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h5" textAlign="center">
        {title}
      </Typography>
      <TextField
        placeholder={placeholder}
        id="outlined-basic"
        label={label}
        variant={variant || "outlined"}
      />
    </Stack>
  );
};

export default SearchBar;
