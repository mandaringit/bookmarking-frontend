import { AxiosResponse } from "axios";
import { iTodo } from "../types/entity";
import { client } from "./client";

interface todosAPI {
  getTodos: () => Promise<AxiosResponse<iTodo[]>>;
  addTodo: (text: string) => Promise<AxiosResponse<iTodo>>;
  toggleTodo: (id: number) => Promise<AxiosResponse<iTodo>>;
}

const todoAPI: todosAPI = {
  getTodos: async () => await client.get<iTodo[]>("/todos"),
  addTodo: async (text: string) => await client.post<iTodo>("/todos", { text }),
  toggleTodo: async (todoId: number) =>
    await client.patch<iTodo>(`/todos/${todoId}/toggle`),
};

export default todoAPI;
