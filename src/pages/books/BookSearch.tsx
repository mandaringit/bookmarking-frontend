import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../components/molecules/SearchBar";
import { selectAuthStatus } from "../../slices/authSlice";
import { findMyReportThunk, clearAllReports } from "../../slices/reportsSlice";
import { searchInit } from "../../slices/searchSlice";
import {
  findMyWishesWithLibraryOwnStatusThunk,
  clearAllWishes,
} from "../../slices/wishSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import BookSearchList from "./BookSearchList";

export interface BookSearchProps {}
const BookSearch = (props: BookSearchProps) => {
  const dispatch = useAppDispatch();
  const { checkAuth: checkAuthStatus } = useSelector(selectAuthStatus);

  useEffect(() => {
    // 검색 전 페이지 및 검색어 초기화작업
    dispatch(searchInit());
    // 이미 등록되어있는지 여부를 확인하기 위해선
    // 현재 가지고있는 모든 리포트 목록 & 위시리스트 목록이 필요함.
    dispatch(findMyReportThunk());
    dispatch(findMyWishesWithLibraryOwnStatusThunk());
    return () => {
      dispatch(clearAllReports());
      dispatch(clearAllWishes());
    };
  }, [dispatch]);

  if (checkAuthStatus === "loading") {
    return <div>로딩 ...</div>;
  }

  return (
    <Container>
      <SearchBar />
      <BookSearchList />
    </Container>
  );
};

export default BookSearch;

const Container = styled.div`
  ${pageContainer}
  display: flex;
  flex-direction: column;
  align-items: center;
`;
