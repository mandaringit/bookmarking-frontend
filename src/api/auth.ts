import { AxiosResponse } from "axios";
import { iUser } from "../types/entity";
import { client } from "./client";

interface iAuthAPI {
  localAuth: (email: string, password: string) => Promise<AxiosResponse<iUser>>;
}

const authAPI: iAuthAPI = {
  localAuth: async (email: string, password: string) =>
    await client.post("/auth/local", { email, password }),
};

export default authAPI;
