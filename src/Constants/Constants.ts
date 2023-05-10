import { CharacterStatusEnums, CharacterGenderEnums } from "../types/enums";

export const SpeciesOption = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

export const StatusOptions: CharacterStatusEnums[] = [
  CharacterStatusEnums.ALIVE,
  CharacterStatusEnums.DEAD,
  CharacterStatusEnums.UNKNOWN,
];

export const GenderOptions: CharacterGenderEnums[] = [
  CharacterGenderEnums.FEMALE,
  CharacterGenderEnums.MALE,
  CharacterGenderEnums.GENDERLESS,
  CharacterGenderEnums.UNKNOWN,
];
