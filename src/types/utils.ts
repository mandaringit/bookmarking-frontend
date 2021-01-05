import { KakaoBook } from "../api/kakaoApi";

export type LoadingState = "idle" | "loading" | "succeeded" | "failed";

export type KakaoBookForm = Pick<KakaoBook, "title" | "isbn" | "thumbnail">;
export interface CreateReportForm {
  book: KakaoBookForm;
  title: string;
}
