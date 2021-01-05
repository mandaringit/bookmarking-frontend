import React, { useState } from "react";
import styled from "styled-components";
import kakaoApi, { KakaoBook } from "../../api/kakaoApi";
import SearchBar from "../../components/molecules/SearchBar";
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
  books: KakaoBook[];
  /**
   * 로딩 상태
   */
  loading: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

export const PureBookSearch = ({
  books,
  loading,
  query,
  onChange,
  onSearch,
}: PureBookSearchProps) => {
  return (
    <Container>
      <SearchBar query={query} onChange={onChange} onSearch={onSearch} />
      <BookSearchList books={books} loading={loading} />
    </Container>
  );
};

const BookSearch = () => {
  const { value: query, onChange } = useInput("");
  const [books, setBooks] = useState<KakaoBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch = async () => {
    setLoading(true);
    const { data } = await kakaoApi.searchBooks(query);
    setLoading(false);

    if (data.meta.total_count === 0) return;
    setBooks(data.documents);
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
