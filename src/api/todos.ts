import { AxiosResponse } from "axios";
import { iTodo } from "../types/entity";
import { client } from "./client";

type TodoResponse = AxiosResponse<iTodo>;
type TodosResponse = AxiosResponse<iTodo[]>;

const todoAPI = {
  getTodos: async () => await client.get<any, TodosResponse>("/todos"),
  addTodo: async (text: string) =>
    await client.post<any, TodoResponse>("/todos", { text }),
  toggleTodo: async (todoId: number) =>
    await client.patch<any, TodoResponse>(`/todos/${todoId}/toggle`),
  updateTodoText: async (todoId: number, text: string) =>
    await client.patch<any, TodoResponse>(`/todos/${todoId}`, { text }),
  removeTodo: async (todoId: number) =>
    await client.delete<any, AxiosResponse>(`/todos/${todoId}`),
};

export default todoAPI;
