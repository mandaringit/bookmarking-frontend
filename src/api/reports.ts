import { AxiosResponse } from "axios";
import { iReport, ReportWithoutUser } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type CreateReportResponse = AxiosResponse<iReport>;
type FindMyReportsResponse = AxiosResponse<ReportWithoutUser[]>;

const reportsAPI = {
  findMyReports: async () =>
    await client.get<any, FindMyReportsResponse>("/reports"),
  createReport: async (book: KakaoBookForm, title: string) =>
    await client.post<any, CreateReportResponse>("/reports", {
      title,
      bookInfo: book,
    }),
};

export default reportsAPI;
