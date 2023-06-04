import { FC } from "react";
import { TextField, Stack, Typography } from "@mui/material";

export interface iSearchBar {
  /**
   * This is the Title of the SearchBar
   */
  title: string;
  /**
   * This is the placeholder of the SearchBar
   **/
  placeholder: string;
  /**
   * This is the variant of the SearchBar
   * @default "outlined"
   * @type "outlined" | "standard" | "filled"
   * @example <SearchBar variant="outlined" />
   * */
  variant?: "outlined" | "standard" | "filled";
  /**
   * This is the label of the SearchBar
   **/
  label?: string;
  /**
   * This is the value of the SearchBar
   **/
  value?: string;
  /**
   * This is the onChange of the SearchBar
   **/
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<iSearchBar> = ({
  placeholder = "",
  title = "",
  variant = "outlined",
  label = "",
  onChange,
  value = "",
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
