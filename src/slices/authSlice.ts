import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../api/auth";
import customHistory from "../lib/customHistory";
import { RootState, iThunkAPI } from "../store";
import { iUser } from "../types/entity";
import { iLocalLoginForm } from "../pages/auth/LocalLoginForm";
import { LoadingState } from "../types/utils";

const initialState = {
  error: "",
  loggedInUser: null as iUser | null,
  loading: "idle" as LoadingState,
};

export const checkAuth = createAsyncThunk<iUser>("auth/checkAuth", async () => {
  const response = await authAPI.checkAuth();
  return response.data;
});

export const localLogIn = createAsyncThunk<iUser, iLocalLoginForm, iThunkAPI>(
  "auth/localLogin",
  async ({ email, password }) => {
    const response = await authAPI.localAuth(email, password);
    return response.data;
  }
);

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    tempSetUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * checkAuth - 새로고침시 유저 체크
     */
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.error = "";
      state.loggedInUser = action.payload;
      localStorage.setItem("mandarin-dev", JSON.stringify(action.payload));
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loggedInUser = null;
      localStorage.removeItem("mandarin-dev");
      customHistory.push("/");
    });

    /**
     * localLogin - 로컬 전략 로그인
     */
    builder.addCase(localLogIn.pending, (state, action) => {
      state.loading = "loading";
    });

    builder.addCase(localLogIn.fulfilled, (state, action) => {
      state.error = "";
      state.loading = "succeeded";
      state.loggedInUser = action.payload;
      localStorage.setItem("mandarin-dev", JSON.stringify(action.payload));
      customHistory.push("/");
    });

    builder.addCase(localLogIn.rejected, (state, action) => {
      state.loading = "failed";
      state.error = "잘못된 로그인 정보입니다.";
    });
  },
});

export default authSlice.reducer;

export const { tempSetUser } = authSlice.actions;

export const selectLoggedInUser = (store: RootState) => store.auth.loggedInUser;
export const selectAuthError = (store: RootState) => store.auth.error;
export const selectAuthLoading = (store: RootState) => store.auth.loading;
