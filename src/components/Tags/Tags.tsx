import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface iTags {
  label: string;
  value: string;
}

const Tags: FC<iTags> = ({ label, value }) => {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      <Typography variant="body1" fontWeight={700}>
        {label} :
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {value}
      </Typography>
    </Stack>
  );
};

export default Tags;
