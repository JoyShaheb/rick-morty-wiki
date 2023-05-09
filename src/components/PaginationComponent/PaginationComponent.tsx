import React, { FC } from "react";
import Pagination from "@mui/material/Pagination";

interface iPaginationComponent {
  currentPage?: number;
  count: number | undefined;
  shape?: "rounded" | "circular";
  onChange?: (e: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: FC<iPaginationComponent> = ({
  currentPage,
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
      page={currentPage}
    />
  );
};

export default PaginationComponent;
