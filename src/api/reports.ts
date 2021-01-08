import { AxiosResponse } from "axios";
import { BasicReport, BasicReportWithFragments, ID } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type RemoveReportResponse = AxiosResponse<{ id: ID }>;
type CreateReportResponse = AxiosResponse<BasicReport>;
type FindMyReportsResponse = AxiosResponse<BasicReport[]>;
type FindReportByIdResponse = AxiosResponse<BasicReportWithFragments>;

const reportsAPI = {
  removeReport: async (reportId: ID) =>
    await client.delete<any, RemoveReportResponse>(
      `/reports?reportId=${reportId}`
    ),
  findMyReports: async () =>
    await client.get<any, FindMyReportsResponse>("/reports"),
  createReport: async (book: KakaoBookForm, title: string) =>
    await client.post<any, CreateReportResponse>("/reports", {
      title,
      bookInfo: book,
    }),
  findReportById: async (reportId: ID) =>
    await client.get<any, FindReportByIdResponse>(
      `/reports/find?reportId=${reportId}`
    ),
};

export default reportsAPI;
