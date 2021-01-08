export type ID = number;

export interface iUser {
  id: ID;
  email: string;
  googleId: string;
  username: string;
}

export interface iAuthor {
  id: ID;
  name: string;
}

export interface iBook {
  id: ID;
  title: string;
  thumbnail: string;
  isbn: string;
  author: iAuthor;
}

export interface iFragment {
  id: ID;
  text: string;
  createdAt: string;
  report: iReport;
  user: iUser;
}
export interface iReport {
  id: ID;
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
