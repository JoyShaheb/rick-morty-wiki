import { IPaginationInfo } from "./pagination.interface";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodeDataResponse {
  info: IPaginationInfo;
  results: IEpisode[];
}
