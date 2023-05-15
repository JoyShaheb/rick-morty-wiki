import { IPaginationInfo } from "./pagination.interface";

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationResponse {
  info: IPaginationInfo;
  results: ILocation[];
}
