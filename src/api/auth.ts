import { AxiosResponse } from "axios";
import { iUser } from "../types/entity";
import { client } from "./client";

type UserResponse = AxiosResponse<iUser>;

const authAPI = {
  logout: async () => await client.get("/auth/logout"),
  checkAuth: async () => await client.get<any, UserResponse>("/auth/checkAuth"),
  localAuth: async (email: string, password: string) =>
    await client.post<any, UserResponse>("/auth/local", {
      email,
      password,
    }),
};

export default authAPI;
