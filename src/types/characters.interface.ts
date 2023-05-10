import {
  CharacterStatusEnums,
  CharacterGenderEnums,
  CharacterSpeciesEnums,
} from "./enums";

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
  species: CharacterSpeciesEnums;
  type: string;
  gender: CharacterGenderEnums;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
