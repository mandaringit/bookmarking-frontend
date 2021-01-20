import { AxiosResponse } from "axios";
import { BasicReport, BasicReportWithFragments, ID } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type RemoveReportResponse = AxiosResponse<Pick<BasicReport, "id">>;
type CreateReportResponse = AxiosResponse<BasicReport>;
type UpdateReportResponse = AxiosResponse<Pick<BasicReport, "id" | "title">>;
type FindMyReportsResponse = AxiosResponse<BasicReport[]>;
type FindReportByIdResponse = AxiosResponse<BasicReportWithFragments>;

const reportsAPI = {
  removeReport: async (reportId: ID) =>
    await client.delete<any, RemoveReportResponse>(
      `/reports?reportId=${reportId}`
    ),
  findMyReports: async () =>
    await client.get<any, FindMyReportsResponse>("/reports"),
  findMyReportsWithLibraryStatus: async () =>
    await client.get<any, FindMyReportsResponse>("/reports/library"),
  createReport: async (book: KakaoBookForm, title: string) =>
    await client.post<any, CreateReportResponse>("/reports", {
      title,
      bookInfo: book,
    }),
  findReportById: async (reportId: ID) =>
    await client.get<any, FindReportByIdResponse>(
      `/reports/find?reportId=${reportId}`
    ),
  updateReportTitle: async (reportId: ID, title: string) =>
    await client.patch<any, UpdateReportResponse>(
      `/reports?reportId=${reportId}`,
      {
        title,
      }
    ),
};

export default reportsAPI;
