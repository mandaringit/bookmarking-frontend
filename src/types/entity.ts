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

export interface iFragment {
  id: number;
  text: string;
  createdAt: string;
  report: iReport;
  user: iUser;
}
export interface iReport {
  id: number;
  title: string;
  user: iUser;
  book: iBook;
  fragments: BasicFragment[];
}

export type BasicReport = Pick<iReport, "id" | "book" | "title">;
export type BasicReportWithFragments = Pick<
  iReport,
  "id" | "book" | "title" | "fragments"
>;

export type BasicFragment = Pick<iFragment, "id" | "text" | "createdAt">;
