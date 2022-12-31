import { FC } from "react";
import { TextField, Stack, Typography } from "@mui/material";

interface iSearchBar {
  title: string;
  placeholder: string;
  variant?: "outlined" | "standard" | "filled";
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<iSearchBar> = ({ placeholder, title, variant, label,onChange }) => {
  return (
    <Stack direction="column" gap={2} mt={3} mb={4}>
      <Typography variant="h5" textAlign="center">
        {title}
      </Typography>
      <TextField
        placeholder={placeholder}
        defaultValue=""
        id="outlined-basic"
        label={label}
        variant={variant || "outlined"}
        onChange={onChange}
      />
    </Stack>
  );
};

export default SearchBar;
