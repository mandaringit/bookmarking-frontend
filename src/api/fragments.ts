import { AxiosResponse } from "axios";
import { BasicFragment, ID } from "../types/entity";
import { client } from "./client";

export type CreateFragmentResponse = AxiosResponse<BasicFragment>;
export type RemoveFragmentResponse = AxiosResponse<Pick<BasicFragment, "id">>;

const fragmentAPI = {
  createFragement: async (reportId: ID, text: string) =>
    await client.post<any, CreateFragmentResponse>("/fragments", {
      reportId,
      text,
    }),
  removeFragment: async (fragmentId: ID) =>
    await client.delete<any, RemoveFragmentResponse>(
      `/fragments?fragmentId=${fragmentId}`
    ),
};

export default fragmentAPI;
