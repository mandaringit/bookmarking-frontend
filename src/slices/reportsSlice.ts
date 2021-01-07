import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fragmentAPI from "../api/fragments";
import reportsAPI from "../api/reports";
import { RootState } from "../store";
import {
  BasicFragment,
  BasicReport,
  BasicReportWithFragments,
} from "../types/entity";
import {
  LoadingState,
  CreateReportForm,
  CreateFragmentForm,
} from "../types/utils";

export const createReportThunk = createAsyncThunk<
  BasicReport,
  CreateReportForm
>("reports/createReport", async ({ book, title }) => {
  const response = await reportsAPI.createReport(book, title);
  return response.data;
});

export const findMyReportsThunk = createAsyncThunk<BasicReport[]>(
  "reports/findMyReports",
  async () => {
    const response = await reportsAPI.findMyReports();
    return response.data;
  }
);

export const findReportByIdThunk = createAsyncThunk<
  BasicReportWithFragments,
  { reportId: string }
>("reports/findReportById", async ({ reportId }) => {
  const response = await reportsAPI.findReportById(reportId);
  return response.data;
});

export const createFragmentThunk = createAsyncThunk<
  BasicFragment,
  CreateFragmentForm
>("fragments/createFragment", async ({ reportId, text }) => {
  const response = await fragmentAPI.createFragement(reportId, text);
  return response.data;
});

const initialState = {
  reports: [] as BasicReport[],
  report: null as BasicReportWithFragments | null,
  loading: {
    findMyReports: "idle" as LoadingState,
    createReport: "idle" as LoadingState,
  },
  error: {
    findMyReports: "",
    createReport: "",
  },
};

const reportsSlice = createSlice({
  initialState,
  name: "reports",
  reducers: {
    clearReport: (state) => {
      state.report = null;
    },
  },
  extraReducers: (builder) => {
    /**
     * 리포트 아이디로 하나 가져오기
     */
    builder.addCase(findReportByIdThunk.fulfilled, (state, action) => {
      state.report = action.payload;
    });

    /**
     * 나의 리포트 가져오기.
     */
    builder.addCase(findMyReportsThunk.pending, (state, action) => {
      state.loading.findMyReports = "loading";
      state.error.findMyReports = "";
    });
    builder.addCase(findMyReportsThunk.fulfilled, (state, action) => {
      state.loading.findMyReports = "succeeded";
      state.error.findMyReports = "";
      state.reports = action.payload;
    });
    builder.addCase(findMyReportsThunk.rejected, (state, action) => {
      state.loading.findMyReports = "failed";
      state.error.findMyReports = "독후감을 가져오는데 실패했습니다.";
    });

    /**
     * 리포트 생성하기
     */
    builder.addCase(createReportThunk.pending, (state, action) => {
      state.loading.createReport = "loading";
      state.error.createReport = "";
    });
    builder.addCase(createReportThunk.fulfilled, (state, action) => {
      state.loading.createReport = "succeeded";
      state.reports.push(action.payload);
    });
    builder.addCase(createReportThunk.rejected, (state, action) => {
      state.loading.createReport = "failed";
      state.error.createReport = "독후감을 만드는데 실패했습니다.";
    });

    /**
     * 기억 조각 생성하기
     */
    builder.addCase(createFragmentThunk.fulfilled, (state, action) => {
      state.report!.fragments.push(action.payload);
    });
  },
});

export const { clearReport } = reportsSlice.actions;

export default reportsSlice.reducer;

export const selectReports = (state: RootState) => state.reports.reports;
export const selectReport = (state: RootState) => state.reports.report;
