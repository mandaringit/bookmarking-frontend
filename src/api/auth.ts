import { AxiosResponse } from "axios";
import { iUser } from "../types/entity";
import { client } from "./client";

interface iAuthAPI {
  checkAuth: () => Promise<AxiosResponse<iUser>>;
  localAuth: (email: string, password: string) => Promise<AxiosResponse<iUser>>;
}

const authAPI: iAuthAPI = {
  checkAuth: async () => await client.get("/auth/checkAuth"),
  localAuth: async (email: string, password: string) =>
    await client.post("/auth/local", { email, password }),
};

export default authAPI;
