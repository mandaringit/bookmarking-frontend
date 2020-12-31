import { AxiosResponse } from "axios";
import { client } from "./client";

export interface NaverBook {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  price: string;
  pubdate: string;
  publisher: string;
  title: string;
}

interface NaverBookSearchApiResponse {
  display: number;
  items: NaverBook[];
  lastBuildDate: string;
  start: number;
  total: number;
}

const naverApi = {
  searchBooks: async (query: string) =>
    client.get<any, AxiosResponse<NaverBookSearchApiResponse>>(
      `/naver/search/book?query=${query}`
    ),
};

export default naverApi;
