import { AxiosResponse } from "axios";
import { iReport, BasicReport } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type CreateReportResponse = AxiosResponse<iReport>;
type FindMyReportsResponse = AxiosResponse<BasicReport[]>;
type FindReportByIdResponse = AxiosResponse;

const reportsAPI = {
  findMyReports: async () =>
    await client.get<any, FindMyReportsResponse>("/reports"),
  createReport: async (book: KakaoBookForm, title: string) =>
    await client.post<any, CreateReportResponse>("/reports", {
      title,
      bookInfo: book,
    }),
  findReportById: async (reportId: string) =>
    await client.get<any, FindReportByIdResponse>(
      `/reports/find?reportId=${reportId}`
    ),
};

export default reportsAPI;
