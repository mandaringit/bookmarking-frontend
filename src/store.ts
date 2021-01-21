import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import reportsReducer from "./slices/reportsSlice";
import searchReducer from "./slices/searchSlice";
import wishReducer from "./slices/wishSlice";
import { History } from "history";
import customHistory from "./lib/customHistory";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    reports: reportsReducer,
    search: searchReducer,
    wishes: wishReducer,
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

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
