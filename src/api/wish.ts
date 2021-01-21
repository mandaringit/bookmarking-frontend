import { AxiosResponse } from "axios";
import { BasicWish, ID } from "../types/entity";
import { KakaoBookForm } from "../types/utils";
import { client } from "./client";

type BasicWishResponse = AxiosResponse<BasicWish>;
type findMyWishesResponse = AxiosResponse<BasicWish[]>;

const wishesAPI = {
  findMyWishes: async () =>
    await client.get<any, findMyWishesResponse>("/wishes"),
  findMyWishesWithLibraryStatus: async () =>
    await client.get<any, findMyWishesResponse>("/wishes/library"),
  createWish: async (book: KakaoBookForm) =>
    await client.post<any, BasicWishResponse>("/wishes", {
      bookInfo: book,
    }),
  removeWish: async (wishId: ID) =>
    await client.delete<any, BasicWishResponse>(`/wishes?wishId=${wishId}`),
};

export default wishesAPI;
