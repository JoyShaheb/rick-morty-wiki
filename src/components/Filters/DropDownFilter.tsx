import { FC } from "react";
import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";

interface iDropDownFilter {
  state: number;
  setState: (e: SelectChangeEvent) => void;
  total: number;
  label: string;
  name: string;
}

const DropDownFilter: FC<iDropDownFilter> = ({
  setState,
  state,
  total,
  label,
  name,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.toString()}
          label={label}
          onChange={setState}
        >
          {Array?.from({
            length: total,
          }).map((_, b) => (
            <MenuItem key={nanoid()} value={b + 1}>
              {name} - {b + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownFilter;
