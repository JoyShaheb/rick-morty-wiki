import React from "react";
import { useGetAllCharactersQuery } from "../store";

const Characters = () => {
  const { data } = useGetAllCharactersQuery("");

  console.log(data);

  return <div>Characters</div>;
};

export default Characters;
