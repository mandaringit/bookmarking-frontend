import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  findMyWishesWithLibraryOwnStatusThunk,
  selectWishes,
} from "../../slices/wishSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicWish } from "../../types/entity";
import WishList from "./WishList";

export interface PureMyWishesProps {
  wishes: BasicWish[];
}

export const PureMyWishes = ({ wishes }: PureMyWishesProps) => {
  return (
    <Container>
      <h1>나의 찜 목록</h1>
      <WishList wishes={wishes} />
    </Container>
  );
};

const MyWishes = () => {
  const dispatch = useAppDispatch();
  const wishes = useSelector(selectWishes);

  useEffect(() => {
    dispatch(findMyWishesWithLibraryOwnStatusThunk());
  }, [dispatch]);

  return <PureMyWishes wishes={wishes} />;
};

export default MyWishes;

const Container = styled.div`
  ${pageContainer}
  h1 {
    margin: 0;
    padding: 1rem 0;
  }
`;
