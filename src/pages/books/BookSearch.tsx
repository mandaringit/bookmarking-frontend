import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import SearchBar from "../../components/molecules/SearchBar";
import { searchInit } from "../../slices/searchSlice";
import { pageContainer } from "../../styles/shared";
import BookSearchList from "./BookSearchList";

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

const Container = styled.div`
  ${pageContainer}

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;
