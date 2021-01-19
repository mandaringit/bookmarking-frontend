import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import kakaoApi, {
  KakaoBook,
  KakaoBookSearchApiResponse,
} from "../api/kakaoApi";
import { RootState } from "../store";
import { LoadingState } from "../types/utils";

export const initialSearchBooks = createAsyncThunk<KakaoBookSearchApiResponse>(
  "seach/initialSearch",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const query = state.search.currentQuery;
    const response = await kakaoApi.searchBooks(query, 1);
    return response.data;
  }
);

/**
 * 인피니트 로딩에서 사용.
 */
export const loadNextSearchBooks = createAsyncThunk<KakaoBookSearchApiResponse>(
  "seach/searchBooks",
  async (_, { getState, dispatch }) => {
    dispatch(increasePage()); // 페이지 하나 증가시키고 시작
    const state = getState() as RootState;
    const query = state.search.currentQuery;
    const page = state.search.page;
    const response = await kakaoApi.searchBooks(query, page);
    return response.data;
  }
);

const searchSlice = createSlice({
  initialState: {
    currentQuery: "",
    books: [] as KakaoBook[],
    page: 1,
    is_end: false,
    status: {
      initial: "idle" as LoadingState,
      next: "idle" as LoadingState,
    },
    error: "",
  },
  name: "search",
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    searchInit: (state) => {
      state.books = [];
      state.status.initial = "idle";
      state.status.next = "idle";
      state.currentQuery = "";
      state.page = 1;
      state.is_end = false;
      state.error = "";
    },
    setSearchEnd: (state) => {
      state.is_end = true;
    },
    increasePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initialSearchBooks.pending, (state) => {
        state.status.initial = "loading";
        state.error = "";
        state.page = 1;
        state.is_end = false;
      })
      .addCase(initialSearchBooks.fulfilled, (state, action) => {
        state.status.initial = "succeeded";
        state.books = action.payload.documents;
        state.is_end = action.payload.meta.is_end;
        state.error = "";
      })
      .addCase(initialSearchBooks.rejected, (state, action) => {
        state.status.initial = "failed";
        state.books = [];
        state.error = "책을 가져오는데 실패했습니다.";
      });

    builder
      .addCase(loadNextSearchBooks.pending, (state) => {
        state.status.next = "loading";
        state.error = "";
      })
      .addCase(loadNextSearchBooks.fulfilled, (state, action) => {
        state.status.next = "succeeded";
        state.books = [...state.books, ...action.payload.documents];
        state.is_end = action.payload.meta.is_end;
        state.error = "";
      })
      .addCase(loadNextSearchBooks.rejected, (state, action) => {
        state.status.next = "failed";
        state.books = [];
        state.error = "책을 가져오는데 실패했습니다.";
      });
  },
});

export const {
  setCurrentQuery,
  searchInit,
  setSearchEnd,
  increasePage,
} = searchSlice.actions;

export default searchSlice.reducer;

export const selectBooks = (state: RootState) => state.search.books;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchEnd = (state: RootState) => state.search.is_end;
