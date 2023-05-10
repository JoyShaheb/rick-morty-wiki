import {
  CharacterStatusEnums,
  CharacterGenderEnums,
  CharacterSpeciesEnums,
} from "../types/enums";

export const SpeciesOption: CharacterSpeciesEnums[] = [
  CharacterSpeciesEnums.HUMAN,
  CharacterSpeciesEnums.ALIEN,
  CharacterSpeciesEnums.HUMANOID,
  CharacterSpeciesEnums.POOPYBUTTHOLE,
  CharacterSpeciesEnums.MYTHOLOGICAL,
  CharacterSpeciesEnums.UNKNOWN,
  CharacterSpeciesEnums.ANIMAL,
  CharacterSpeciesEnums.DISEASE,
  CharacterSpeciesEnums.ROBOT,
  CharacterSpeciesEnums.CRONENBERG,
  CharacterSpeciesEnums.PLANET,
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
