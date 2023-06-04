import {
  CharacterStatusEnums,
  CharacterGenderEnums,
  CharacterSpeciesEnums,
} from "./enums";

interface IOrigin {
  /**
   * name of the origin
   * @type {string}
   **/
  name: string;
  /**
   * url of the origin
   * @type {string}
   **/
  url: string;
}

interface ILocation {
  /**
   * name of the location
   * @type {string}
   **/
  name: string;
  /**
   * url of the location
   * @type {string}
   **/
  url: string;
}

export interface ICharacter {
  /**
   * id number of the character
   */
  id: number;
  /**
   * name of the character
   */
  name: string;
  /**
   * status of the character
   * @type {CharacterStatusEnums}
   */
  status: CharacterStatusEnums;
  /**
   * species of the character
   * @type {CharacterSpeciesEnums}
   */
  species: CharacterSpeciesEnums;
  /**
   * type of the character
   **/
  type: string;
  /**
   * Gender of the character
   * @type {CharacterGenderEnums}
   **/
  gender: CharacterGenderEnums;
  /**
   * origin of the character
   * @type {IOrigin}
   */
  origin: IOrigin;
  /**
   * location of the character
   * @type {ILocation}
   **/
  location: ILocation;
  /**
   * url of the character's image
   **/
  image: string;
  /**
   * list of episodes in which the character has appeared
   * @type {string[]}
   **/
  episode: string[];
  /**
   * url of the character
   **/
  url: string;
  /**
   * date of creation of the character
   **/
  created: string;
}
