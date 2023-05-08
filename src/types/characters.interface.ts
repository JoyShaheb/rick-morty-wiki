import { CharacterStatusEnums } from "./enums";

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: CharacterStatusEnums;
  species: string;
  type: string;
  // implement the gender enum later
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
