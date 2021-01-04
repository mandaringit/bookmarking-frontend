import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./pages/todos/todosSlice";
import authReducer from "./pages/auth/authSlice";
import { History } from "history";
import customHistory from "./lib/customHistory";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
  // https://redux-toolkit.js.org/api/getDefaultMiddleware#customizing-the-included-middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          history: customHistory,
        },
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export interface iThunkAPI {
  extra: { history: History };
}
