import React, { FC } from "react";
import { Typography } from "@mui/material";

interface iInfoCard {
  label: string;
  value: number;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
}

const InfoCard: FC<iInfoCard> = ({ label, value, variant }) => {
  return (
    <Typography mb={2} textAlign="center" variant={variant}>
      Total {label} : {value}
    </Typography>
  );
};

export default InfoCard;
