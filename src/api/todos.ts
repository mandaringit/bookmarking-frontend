import { AxiosResponse } from "axios";
import { iTodo } from "../types/entity";
import { client } from "./client";

interface todosAPI {
  getTodos: () => Promise<AxiosResponse<iTodo[]>>;
  addTodo: (text: string) => Promise<AxiosResponse<iTodo>>;
  toggleTodo: (id: number) => Promise<AxiosResponse<iTodo>>;
  updateTodoText: (id: number, text: string) => Promise<AxiosResponse<iTodo>>;
  removeTodo: (id: number) => Promise<AxiosResponse>;
}

const todoAPI: todosAPI = {
  getTodos: async () => await client.get<iTodo[]>("/todos"),
  addTodo: async (text: string) => await client.post<iTodo>("/todos", { text }),
  toggleTodo: async (todoId: number) =>
    await client.patch<iTodo>(`/todos/${todoId}/toggle`),
  updateTodoText: async (todoId: number, text: string) =>
    await client.patch<iTodo>(`/todos/${todoId}`, { text }),
  removeTodo: async (todoId: number) => await client.delete(`/todos/${todoId}`),
};

export default todoAPI;
