import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import kakaoApi, {
  KakaoBook,
  KakaoBookSearchApiResponse,
} from "../api/kakaoApi";
import { RootState } from "../store";
import { LoadingState } from "../types/utils";

export const searchBooksThunk = createAsyncThunk<KakaoBookSearchApiResponse>(
  "seach/searchBooks",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const query = state.search.query;
    const response = await kakaoApi.searchBooks(query);
    return response.data;
  }
);

const searchSlice = createSlice({
  initialState: {
    query: "",
    books: [] as KakaoBook[],
    status: "idle" as LoadingState,
    error: "",
  },
  name: "search",
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    searchInit: (state) => {
      state.books = [];
      state.status = "idle";
      state.query = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooksThunk.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(searchBooksThunk.fulfilled, (state, action) => {
        state.books = action.payload.documents;

        if (state.books.length > 0) {
          state.query = ""; // 쿼리 초기화.
        }

        state.status = "succeeded";
        state.error = "";
      })
      .addCase(searchBooksThunk.rejected, (state, action) => {
        state.books = [];
        state.status = "failed";
        state.error = "책을 가져오는데 실패했습니다.";
      });
  },
});

export const { setQuery, searchInit } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectBooks = (state: RootState) => state.search.books;
export const selectSearchStatus = (state: RootState) => state.search.status;
