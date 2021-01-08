import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import reportsReducer from "./slices/reportsSlice";
import { History } from "history";
import customHistory from "./lib/customHistory";

const store = configureStore({
  reducer: {
    auth: authReducer,
    reports: reportsReducer,
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
