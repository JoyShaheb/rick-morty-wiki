import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Container } from "@mui/material";

const Characters = () => {
  return (
    <Container maxWidth="xl" sx={{my:3}}>
      <SearchBar
        title="Characters"
        placeholder="Search for characters"
        label="Search"
      />
    </Container>
  );
};

export default Characters;
