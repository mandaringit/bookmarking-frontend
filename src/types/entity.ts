export interface iTodo {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface iUser {
  id: string;
  email: string;
  googleId: string;
  username: string;
}

export interface iAuthor {
  id: number;
  name: string;
}

export interface iBook {
  id: number;
  title: string;
  thumbnail: string;
  isbn: string;
  author: iAuthor;
}
export interface iReport {
  id: number;
  title: string;
  user: iUser;
  book: iBook;
}

export type ReportWithoutUser = Pick<iReport, "id" | "book" | "title">;
