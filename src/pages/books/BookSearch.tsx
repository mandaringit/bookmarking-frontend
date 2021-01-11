import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../components/molecules/SearchBar";
import { searchInit } from "../../slices/searchSlice";
import BookSearchList from "./BookSearchList";

const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface BookSearchProps {}
const BookSearch = (props: BookSearchProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchInit());
  }, [dispatch]);

  return (
    <Container>
      <SearchBar />
      <BookSearchList />
    </Container>
  );
};

export default BookSearch;
