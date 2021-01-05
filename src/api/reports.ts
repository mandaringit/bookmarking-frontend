import { AxiosResponse } from "axios";
import { iReport } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type ReportResponse = AxiosResponse<iReport>;
type ReportsResponse = AxiosResponse<iReport[]>;

const reportsAPI = {
  findMyReports: async () => await client.get<any, ReportsResponse>("/reports"),
  createReport: async (book: KakaoBookForm, title: string) =>
    await client.post<any, ReportResponse>("/reports", {
      title,
      bookInfo: book,
    }),
};

export default reportsAPI;
