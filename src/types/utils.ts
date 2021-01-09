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

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  email: string;
  password: string;
}
