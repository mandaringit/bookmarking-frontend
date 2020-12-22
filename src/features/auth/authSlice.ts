import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../api/auth";
import customHistory from "../../lib/customHistory";
import { RootState, iThunkAPI } from "../../store";
import { iUser } from "../../types/entity";
import { iLocalLoginForm } from "../auth/LocalLoginForm";

const initialState = {
  error: "",
  loggedInUser: null as iUser | null,
  loading: false,
};

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(localLogIn.rejected, (state, action) => {
      state.error = "잘못된 로그인 정보입니다.";
    });
    builder.addCase(localLogIn.fulfilled, (state, action) => {
      state.error = "";
      state.loggedInUser = action.payload;
      customHistory.push("/");
    });
  },
});

export default authSlice.reducer;

export const selectLoggedInUser = (store: RootState) => store.auth.loggedInUser;
export const selectAuthError = (store: RootState) => store.auth.error;
