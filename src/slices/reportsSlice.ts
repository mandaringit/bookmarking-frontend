import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reportsAPI from "../api/reports";
import { iReport } from "../types/entity";
import { LoadingState, CreateReportForm } from "../types/utils";

export const createReportThunk = createAsyncThunk<iReport, CreateReportForm>(
  "reports/createReport",
  async ({ book, title }) => {
    const response = await reportsAPI.createReport(book, title);
    return response.data;
  }
);

const initialState = {
  reports: [] as iReport[],
  loading: "idle" as LoadingState,
  error: "",
};

const reportsSlice = createSlice({
  initialState,
  name: "reports",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReportThunk.pending, (state, action) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(createReportThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.reports.push(action.payload);
    });
    builder.addCase(createReportThunk.rejected, (state, action) => {
      state.loading = "failed";
      state.error = "리포트를 만드는데 에러발생";
    });
  },
});

export default reportsSlice.reducer;
