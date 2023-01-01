import { FC } from "react";
import { TextField, Stack, Typography } from "@mui/material";

interface iSearchBar {
  title: string;
  placeholder: string;
  variant?: "outlined" | "standard" | "filled";
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<iSearchBar> = ({
  placeholder,
  title,
  variant,
  label,
  onChange,
  value,
}) => {
  return (
    <Stack direction="column" gap={2} mt={3} mb={4}>
      <Typography variant="h5" textAlign="center">
        {title}
      </Typography>
      <TextField
        type="search"
        placeholder={placeholder}
        value={value}
        id="outlined-basic"
        label={label}
        variant={variant || "outlined"}
        onChange={onChange}
      />
    </Stack>
  );
};

export default SearchBar;
