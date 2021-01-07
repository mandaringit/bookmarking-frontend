import { KakaoBook } from "../api/kakaoApi";

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
  reportId: string;
  text: string;
}
