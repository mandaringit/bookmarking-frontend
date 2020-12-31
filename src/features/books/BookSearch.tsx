import React, { useState } from "react";
import styled from "styled-components";
import naverApi, { NaverBook } from "../../api/naverApi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useInput } from "../../hooks/useInput";
import BookSearchList from "./BookSearchList";

export interface PureBookSearchProps {
  /**
   * 책 검색어
   */
  query: string;
  /**
   * API 요청 후 받아온 책 목록
   */
  books: NaverBook[];
  /**
   * 로딩 상태
   */
  loading: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

export const PureBookSearch = ({
  query,
  books,
  loading,
  onChange,
  onSearch,
}: PureBookSearchProps) => {
  return (
    <Container>
      <Input value={query} onChange={onChange} width='100%' />
      <Button onClick={onSearch}>SEARCH</Button>
      <BookSearchList books={books} loading={loading} />
    </Container>
  );
};

const BookSearch = () => {
  const { value: query, onChange } = useInput("");
  const [books, setBooks] = useState<NaverBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const onSearch = async () => {
    setLoading(true);
    const { data } = await naverApi.searchBooks(query);
    setLoading(false);

    if (data.items.length === 0) return;
    setBooks(data.items);
  };

  return (
    <PureBookSearch
      query={query}
      books={books}
      loading={loading}
      onChange={onChange}
      onSearch={onSearch}
    />
  );
};

export default BookSearch;
