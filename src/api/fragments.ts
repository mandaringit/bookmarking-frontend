import { AxiosResponse } from "axios";
import { BasicFragment, ID } from "../types/entity";
import { client } from "./client";

export type CreateFragmentResponse = AxiosResponse<BasicFragment>;

const fragmentAPI = {
  createFragement: async (reportId: ID, text: string) =>
    await client.post<any, CreateFragmentResponse>("/fragments", {
      reportId,
      text,
    }),
};

export default fragmentAPI;
