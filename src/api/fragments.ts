import { AxiosResponse } from "axios";
import { BasicFragment } from "../types/entity";
import { client } from "./client";

export type CreateFragmentResponse = AxiosResponse<BasicFragment>;

const fragmentAPI = {
  createFragement: async (reportId: string, text: string) =>
    await client.post<any, CreateFragmentResponse>("/fragments", {
      reportId,
      text,
    }),
};

export default fragmentAPI;
