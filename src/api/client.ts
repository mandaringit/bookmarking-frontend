import axios from "axios";

export const client = axios.create({
  baseURL: "https://mandarinlog.me",
  // baseURL: "http://localhost:8080",
  withCredentials: true,
});
