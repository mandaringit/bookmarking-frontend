import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoAPI from "../../api/todos";
import { iTodo } from "../../types/entity";

// THUNKS
export const getTodos = createAsyncThunk<iTodo[]>(
  "todos/getTodos",
  async () => {
    const response = await todoAPI.getTodos();
    return response.data;
  }
);

// <페이로드 리턴타입, 함수 인자>
export const toggleTodo = createAsyncThunk<iTodo, { todoId: number }>(
  "todos/toggleTodo",
  async ({ todoId }) => {
    const response = await todoAPI.toggleTodo(todoId);
    return response.data;
  }
);

export const addTodo = createAsyncThunk<iTodo, { text: string }>(
  "todos/addTodo",
  async ({ text }) => {
    const response = await todoAPI.addTodo(text);
    return response.data;
  }
);

export const removeTodo = createAsyncThunk<number, { todoId: number }>(
  "todos/removeTodo",
  async ({ todoId }) => {
    await todoAPI.removeTodo(todoId);
    return todoId;
  }
);

export const updateTodoText = createAsyncThunk<
  iTodo,
  { todoId: number; text: string }
>("todos/updateTodoText", async ({ todoId, text }) => {
  const response = await todoAPI.updateTodoText(todoId, text);
  return response.data;
});

// SLICE
const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [] as iTodo[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = [action.payload, ...state.todos];
    });

    builder.addCase(toggleTodo.fulfilled, (state, { payload: { id } }) => {
      const idx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[idx].done = !state.todos[idx].done;
    });

    builder.addCase(removeTodo.fulfilled, (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    });

    builder.addCase(
      updateTodoText.fulfilled,
      (state, { payload: { id, text } }) => {
        const idx = state.todos.findIndex((todo) => todo.id === id);
        state.todos[idx].text = text;
      }
    );
  },
});

// REDUCER
export default todosSlice.reducer;
