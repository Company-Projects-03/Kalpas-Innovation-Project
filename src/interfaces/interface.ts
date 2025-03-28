export interface IError {
  error: string;
  errorCode: string;
}

interface INews {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IAllSportsInitialState {
  allSportsNewsLoading: boolean;
  allSportsNewsSuccess: boolean;
  allSportsNewsFail: boolean;
  allSportsNewsError: IError | null;
  allSportsNewsData: INews[] | [];
}

export interface INewsData {
  status: string;
  totalResults: number;
  articles: INews[];
}

export interface INewsApiResponse {
  data: {
    status: string;
    totalResults: number;
    articles: INews[];
  };
}

export interface INotification {
  description: string;
}

export interface INewsDataCard {
  loading: boolean;
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface IAllNewsInitialState {
  allNewsLoading: boolean;
  infiniteScrollLoading: boolean;
  allNewsSuccess: boolean;
  allNewsFail: boolean;
  allNewsError: IError | null;
  allNewsData: INews[] | [];
}

export interface IBusinessNewsInitialState {
  allBusinessNewsLoading: boolean;
  allBusinessNewsSuccess: boolean;
  allBusinessNewsFail: boolean;
  allBusinessNewsError: IError | null;
  allBusinessNewsData: INews[] | [];
}

export interface ITechNewsInitialState {
  allTechNewsLoading: boolean;
  allTechNewsSuccess: boolean;
  allTechNewsFail: boolean;
  allTechNewsError: IError | null;
  allTechNewsData: INews[] | [];
}

export interface ISearchNewsInitialState {
  searchNewsLoading: boolean;
  searchNewsSuccess: boolean;
  searchNewsFail: boolean;
  searchNewsError: IError | null;
  searchNewsData: INews[] | [];
}

export interface IQuery {
  query: string;
}

export type TPage = number;
