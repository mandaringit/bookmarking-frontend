import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {
  initialSearchBooks,
  loadNextSearchBooks,
  setCurrentQuery,
} from "../../slices/searchSlice";
import { useAppDispatch } from "../../store";

export interface PureSearchBarProps extends SearchBarProps {}

export const PureSearchBar = ({
  query,
  onChange,
  onSearch,
}: PureSearchBarProps) => {
  return (
    <Container onSubmit={onSearch}>
      <Input
        value={query}
        onChange={onChange}
        width='100%'
        placeholder='책을 검색해보세요.'
        focus
      />
      <Button size='medium' width='6rem'>
        책찾기
      </Button>
    </Container>
  );
};

export interface SearchBarProps {
  /**
   * 검색어 쿼리
   */
  query: string;
  /**
   * Input 핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   *  Button 클릭 핸들러
   */
  onSearch?: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * `SearchBar`는 인풋값을 통해 검색을 수행할 수 있는 컴포넌트 입니다.
 */
const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCurrentQuery(query));
    dispatch(initialSearchBooks());
  };

  return (
    <PureSearchBar query={query} onChange={onChange} onSearch={onSearch} />
  );
};

export default SearchBar;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  * + * {
    margin-top: 0.5rem;
  }
`;
