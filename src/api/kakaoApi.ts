import { AxiosResponse } from "axios";
import { client } from "./client";

export interface KakaoResponseMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface KakaoBook {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface KakaoBookSearchApiResponse {
  meta: KakaoResponseMeta;
  documents: KakaoBook[];
}

const kakaoApi = {
  searchBooks: (query: string) =>
    client.get<any, AxiosResponse<KakaoBookSearchApiResponse>>(
      `/kakao/search/book/?query=${query}`
    ),
};

export default kakaoApi;
