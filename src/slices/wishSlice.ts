import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import wishesAPI from "../api/wish";
import { RootState } from "../store";
import { BasicWish, ID } from "../types/entity";
import { CreateReportForm, LoadingState } from "../types/utils";

const wishAdapter = createEntityAdapter<BasicWish>({
  selectId: (wish) => wish.book.isbn,
});

export const findMyWishesWithLibraryOwnStatusThunk = createAsyncThunk<
  BasicWish[]
>("wishes/findMyWishesWithLibraryOwnStatus", async () => {
  const response = await wishesAPI.findMyWishesWithLibraryStatus();
  return response.data;
});

export const createWishThunk = createAsyncThunk<
  BasicWish,
  Pick<CreateReportForm, "book">
>("wishes/createWish", async ({ book }) => {
  const response = await wishesAPI.createWish(book);
  return response.data;
});

export const removeWishThunk = createAsyncThunk<
  BasicWish,
  { id: ID; isbn: string }
>("wishes/removeWish", async ({ id }) => {
  const response = await wishesAPI.removeWish(id);
  return response.data;
});

const wishSlice = createSlice({
  initialState: wishAdapter.getInitialState({
    status: {
      findMyWishesWithLibraryOwnStatus: "idle" as LoadingState,
    },
  }),
  name: "wishes",
  reducers: {
    clearAllWishes: (state) => {
      wishAdapter.removeAll(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findMyWishesWithLibraryOwnStatusThunk.pending, (state) => {
        state.status.findMyWishesWithLibraryOwnStatus = "loading";
      })
      .addCase(
        findMyWishesWithLibraryOwnStatusThunk.fulfilled,
        (state, action) => {
          state.status.findMyWishesWithLibraryOwnStatus = "succeeded";
          wishAdapter.upsertMany(state, action.payload);
        }
      );

    builder.addCase(createWishThunk.fulfilled, (state, action) => {
      wishAdapter.upsertOne(state, action.payload);
    });

    builder.addCase(removeWishThunk.fulfilled, (state, action) => {
      wishAdapter.removeOne(state, action.meta.arg.isbn);
    });
  },
});

export default wishSlice.reducer;

export const { clearAllWishes } = wishSlice.actions;

export const {
  selectAll: selectWishes,
  selectById: selectWishByISBN,
} = wishAdapter.getSelectors<RootState>((state) => state.wishes);

export const selectWishStatus = (state: RootState) => state.wishes.status;
