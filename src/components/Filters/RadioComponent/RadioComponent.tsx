import React, { FC } from "react";
import { nanoid } from "nanoid";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface iRadioComponent {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string
}

const RadioComponent: FC<iRadioComponent> = ({ options, onChange, value }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={onChange}
        value={value}
      >
        {options?.map((option) => (
          <FormControlLabel
            key={nanoid()}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
