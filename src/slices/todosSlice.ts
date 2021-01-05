import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import todoAPI from "../api/todos";
import { RootState } from "../store";
import { iTodo } from "../types/entity";

const todosAdapter = createEntityAdapter({
  sortComparer: (a: iTodo, b: iTodo) =>
    b.createdAt.toString().localeCompare(a.createdAt.toString()),
});

const initialState = todosAdapter.getInitialState();

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
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      todosAdapter.upsertMany(state, action.payload);
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      todosAdapter.addOne(state, action.payload);
    });

    builder.addCase(
      toggleTodo.fulfilled,
      (state, { payload: { id, done } }) => {
        todosAdapter.updateOne(state, {
          id,
          changes: { done },
        });
      }
    );

    builder.addCase(removeTodo.fulfilled, (state, action) => {
      todosAdapter.removeOne(state, action.payload);
    });

    builder.addCase(
      updateTodoText.fulfilled,
      (state, { payload: { id, text } }) => {
        todosAdapter.updateOne(state, { id, changes: { text } });
      }
    );
  },
});

// REDUCER
export default todosSlice.reducer;

// SELECTORS
export const { selectAll: selectAllTodos } = todosAdapter.getSelectors(
  (state: RootState) => state.todos
);
