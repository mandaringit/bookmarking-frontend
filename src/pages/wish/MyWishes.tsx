import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  findMyWishesWithLibraryOwnStatusThunk,
  selectWishes,
  selectWishStatus,
} from "../../slices/wishSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicWish } from "../../types/entity";
import { LoadingState } from "../../types/utils";
import WishList from "./WishList";

export interface PureMyWishesProps {
  wishes: BasicWish[];
  status: LoadingState;
}

export const PureMyWishes = ({ wishes, status }: PureMyWishesProps) => {
  return (
    <Container>
      <h1>나의 찜 목록</h1>
      {status === "loading" && <div>로딩..</div>}
      {status === "failed" && <div>아이템을 가져오는데 실패했어요.</div>}
      {status === "succeeded" && wishes.length === 0 && (
        <Link to='/search'>찜하세요!</Link>
      )}
      {status === "succeeded" && wishes.length > 0 && (
        <WishList wishes={wishes} />
      )}
    </Container>
  );
};

const MyWishes = () => {
  const dispatch = useAppDispatch();
  const wishes = useSelector(selectWishes);
  const status = useSelector(selectWishStatus);

  useEffect(() => {
    dispatch(findMyWishesWithLibraryOwnStatusThunk());
  }, [dispatch]);

  return (
    <PureMyWishes
      wishes={wishes}
      status={status.findMyWishesWithLibraryOwnStatus}
    />
  );
};

export default MyWishes;

const Container = styled.div`
  ${pageContainer}
  h1 {
    margin: 0;
    padding-bottom: 1rem;
  }
`;
