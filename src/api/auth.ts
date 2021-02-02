import { AxiosResponse } from "axios";
import { iUser } from "../types/entity";
import { client } from "./client";

export type UserWithToken = { token: string; user: iUser };
// type UserResponse = AxiosResponse<iUser>;
type UserWithJWTResponse = AxiosResponse<UserWithToken>;

const authAPI = {
  signup: async (email: string, password: string) =>
    await client.post<any, UserWithJWTResponse>("/auth/signup", {
      email,
      password,
    }),
  logout: async () => await client.get("/auth/logout"),
  checkAuth: async () =>
    await client.get<any, UserWithJWTResponse>("/auth/checkAuth"),
  localAuth: async (email: string, password: string) =>
    await client.post<any, UserWithJWTResponse>("/auth/local", {
      email,
      password,
    }),
};

export default authAPI;
