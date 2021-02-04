import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import authAPI, { UserWithToken } from "../api/auth";
import { client } from "../api/client";
import { RootState } from "../store";
import { iUser } from "../types/entity";
import { LoginForm, SignupForm, LoadingState } from "../types/utils";

export interface RejectValueType {
  code: number;
  message: string;
}

/**
 * Thunk
 */
export const signup = createAsyncThunk<
  UserWithToken,
  SignupForm,
  { rejectValue: RejectValueType }
>("auth/signup", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await authAPI.signup(email, password);
    return response.data;
  } catch (e) {
    // TODO: error type?
    const error = e.response as AxiosResponse;
    return rejectWithValue({
      code: error.status,
      message: error.data.message,
    });
  }
});

export const localLogIn = createAsyncThunk<
  UserWithToken,
  LoginForm,
  { rejectValue: RejectValueType }
>("auth/localLogin", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await authAPI.localAuth(email, password);
    return response.data;
  } catch (e) {
    const error = e.response as AxiosResponse;
    return rejectWithValue({
      code: error.status,
      message: error.data.message,
    });
  }
});

export const checkAuth = createAsyncThunk<UserWithToken>(
  "auth/checkAuth",
  async () => {
    const response = await authAPI.checkAuth();
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logut", async () => {
  const response = await authAPI.logout();
  return response.data;
});

const initialState = {
  loggedInUser: null as iUser | null,
  status: {
    signup: "idle" as LoadingState,
    login: "idle" as LoadingState,
    checkAuth: "idle" as LoadingState,
  },
  errors: {
    signup: "",
    login: "",
  },
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    // 임시로 유저를 세팅하는 리듀서
    tempSetUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * 회원 가입 & 로그인까지.
     */
    builder
      .addCase(signup.pending, (state) => {
        state.status.signup = "loading";
        state.errors.signup = "";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status.signup = "succeeded";
        state.errors.signup = "";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status.signup = "failed";
        state.errors.signup = action.payload!.message || "ERROR";
      });

    /**
     * localLogin - 로컬 전략 로그인
     */
    builder
      .addCase(localLogIn.pending, (state, action) => {
        state.status.login = "loading";
        state.errors.login = "";
      })
      .addCase(localLogIn.fulfilled, (state, action) => {
        state.status.login = "succeeded";
        state.errors.login = "";
        state.loggedInUser = action.payload.user;
        // 앞으로의 요청에 토큰 달아주기
        client.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.token}`;
      })
      .addCase(localLogIn.rejected, (state, action) => {
        state.status.login = "failed";
        state.errors.login = action.payload!.message || "ERROR";
      });

    /**
     * checkAuth - 새로고침시 유저 체크
     */
    builder
      .addCase(checkAuth.pending, (state, action) => {
        state.status.checkAuth = "loading";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status.checkAuth = "succeeded";
        client.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.token}`;
        state.loggedInUser = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.status.checkAuth = "failed";
        state.loggedInUser = null;
      });

    /**
     * 로그아웃
     */
    builder.addCase(logout.fulfilled, (state) => {
      state.loggedInUser = null;
    });
  },
});

export default authSlice.reducer;

export const { tempSetUser } = authSlice.actions;

export const selectLoggedInUser = (state: RootState) => state.auth.loggedInUser;
export const selectAuthErrors = (state: RootState) => state.auth.errors;
export const selectAuthStatus = (state: RootState) => state.auth.status;
