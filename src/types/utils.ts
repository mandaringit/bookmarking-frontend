import { KakaoBook } from "../api/kakaoApi";
import { ID } from "./entity";

export type LoadingState = "idle" | "loading" | "succeeded" | "failed";

export type KakaoBookForm = Pick<
  KakaoBook,
  "title" | "isbn" | "thumbnail" | "authors"
>;
export interface CreateReportForm {
  book: KakaoBookForm;
  title: string;
}

export interface CreateFragmentForm {
  reportId: ID;
  text: string;
}
