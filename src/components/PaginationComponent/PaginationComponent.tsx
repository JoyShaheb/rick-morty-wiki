import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";

interface iPaginationComponent {
  count: number;
  shape?: "rounded" | "circular";
  onChange?: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: FC<iPaginationComponent> = ({
  count,
  shape,
  onChange,
}) => {
  return (
    <Pagination
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      count={count}
      shape={shape || "rounded"}
      onChange={onChange}
    />
  );
};

export default PaginationComponent;
