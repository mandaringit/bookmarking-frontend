import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import fragmentAPI from "../api/fragments";
import reportsAPI from "../api/reports";
import { RootState } from "../store";
import {
  BasicFragment,
  BasicReport,
  BasicReportWithFragments,
  ID,
} from "../types/entity";
import {
  LoadingState,
  CreateReportForm,
  CreateFragmentForm,
} from "../types/utils";

const reportAdapter = createEntityAdapter<BasicReport>({
  selectId: (report) => report.book.isbn,
});

/**
 * Thunk
 * Report - Create / Read(all) / Read(one) / Delete / Update
 */

export const createReportThunk = createAsyncThunk<
  BasicReport,
  CreateReportForm
>("reports/createReport", async ({ book, title }) => {
  const response = await reportsAPI.createReport(book, title);
  return response.data;
});

export const findMyReportThunk = createAsyncThunk<BasicReport[]>(
  "reports/findMyReports",
  async () => {
    const response = await reportsAPI.findMyReports();
    return response.data;
  }
);

export const findReportByIdThunk = createAsyncThunk<
  BasicReportWithFragments,
  { reportId: ID }
>("reports/findReportById", async ({ reportId }) => {
  const response = await reportsAPI.findReportById(reportId);
  return response.data;
});

export const removeReportByIdThunk = createAsyncThunk<
  Pick<BasicReport, "id">,
  { reportId: ID }
>("reports/removeReportById", async ({ reportId }) => {
  const response = await reportsAPI.removeReport(reportId);
  return response.data;
});

export const updateReportTitleThunk = createAsyncThunk<
  Pick<BasicReport, "id" | "title">,
  { reportId: ID; title: string }
>("reports/updateReportTitle", async ({ reportId, title }) => {
  const response = await reportsAPI.updateReportTitle(reportId, title);
  return response.data;
});

/**
 * Thunk
 * Report의 Fragment Create /
 */

export const createFragmentThunk = createAsyncThunk<
  BasicFragment,
  CreateFragmentForm
>("fragments/createFragment", async ({ reportId, text }) => {
  const response = await fragmentAPI.createFragement(reportId, text);
  return response.data;
});

export const removeFragmentThunk = createAsyncThunk<
  Pick<BasicFragment, "id">,
  { fragemntId: ID }
>("fragments/removeFragment", async ({ fragemntId }) => {
  const response = await fragmentAPI.removeFragment(fragemntId);
  return response.data;
});

const reportsSlice = createSlice({
  initialState: reportAdapter.getInitialState({
    // ids: [] ,
    // entities: [],
    report: null as BasicReportWithFragments | null,
    status: {
      findMyReports: "idle" as LoadingState,
      createReport: "idle" as LoadingState,
    } as { [requestId: string]: LoadingState },
    error: {
      findMyReports: "",
      createReport: "",
      removeReportByIdThunk: "",
    },
  }),
  name: "reports",
  reducers: {
    clearReport: (state) => {
      state.report = null;
    },
    clearAllReports: (state) => {
      reportAdapter.removeAll(state);
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
    builder.addCase(findMyReportThunk.pending, (state, action) => {
      state.status.findMyReports = "loading";
      state.error.findMyReports = "";
    });
    builder.addCase(findMyReportThunk.fulfilled, (state, action) => {
      state.status.findMyReports = "succeeded";
      state.error.findMyReports = "";
      reportAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(findMyReportThunk.rejected, (state, action) => {
      state.status.findMyReports = "failed";
      state.error.findMyReports = "독후감을 가져오는데 실패했습니다.";
    });

    /**
     * 리포트 생성하기
     */
    builder.addCase(createReportThunk.pending, (state, action) => {
      state.status.createReport = "loading";
      state.error.createReport = "";
    });
    builder.addCase(createReportThunk.fulfilled, (state, action) => {
      state.status.createReport = "succeeded";
      reportAdapter.upsertOne(state, action.payload);
    });
    builder.addCase(createReportThunk.rejected, (state, action) => {
      state.status.createReport = "failed";
      state.error.createReport = "독후감을 만드는데 실패했습니다.";
    });

    /**
     * 리포트 삭제. 아직 따로 하는 일 없음.
     */

    // builder
    //   .addCase(removeReportByIdThunk.pending, (state, action) => {
    //     state.status.removeReportByIdThunk = "loading";
    //     state.error.removeReportByIdThunk = "";
    //   })
    //   .addCase(removeReportByIdThunk.fulfilled, (state, action) => {
    //     state.status.removeReportByIdThunk = "succeeded";
    //   })
    //   .addCase(removeReportByIdThunk.rejected, (state, action) => {
    //     state.status.removeReportByIdThunk = "failed";
    //     state.error.removeReportByIdThunk = "삭제에 실패했습니다.";
    //   });

    /**
     * 리포트 업데이트
     */

    builder.addCase(updateReportTitleThunk.fulfilled, (state, action) => {
      state.report!.title = action.payload.title;
    });

    /**
     * 기억 조각 생성하기
     */
    builder.addCase(createFragmentThunk.fulfilled, (state, action) => {
      state.report!.fragments.push(action.payload);
    });
    builder.addCase(removeFragmentThunk.fulfilled, (state, action) => {
      state.report!.fragments = state.report!.fragments.filter(
        (fragment) => fragment.id !== action.payload.id
      );
    });
  },
});

/**
 * 액션
 */

export const { clearReport, clearAllReports } = reportsSlice.actions;

/**
 * 리듀서
 */

export default reportsSlice.reducer;

/**
 * 셀렉터
 */

export const {
  selectAll: selectReports,
  selectIds: selectReportISBNs,
  selectById: selectReportByISBN,
} = reportAdapter.getSelectors<RootState>((state) => state.reports);
// export const selectReports = (state: RootState) => state.reports.reports;
export const selectReport = (state: RootState) => state.reports.report;
export const selectReportStatus = (state: RootState) => state.reports.status;
