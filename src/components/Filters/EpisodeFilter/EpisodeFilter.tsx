// rename this to selectionFilter

import { FC } from "react";
import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

interface iEpisodeFilter {
  state?: any;
  setState?: any;
  option?: any;
  total: number;
  label: string;
  name: string;
}

const EpisodeFilter: FC<iEpisodeFilter> = ({
  option,
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
          value={state}
          label={label}
          onChange={setState}
        >
          {Array?.from({
            length: total,
          }).map((a, b) => (
            <MenuItem key={nanoid()} value={b + 1}>
              {name} - {b + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EpisodeFilter;
