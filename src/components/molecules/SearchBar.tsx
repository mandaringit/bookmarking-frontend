import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {
  searchBooksThunk,
  selectSearchQuery,
  setQuery,
} from "../../slices/searchSlice";

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
  onSearch?: () => void;
}

export interface PureSearchBarProps {
  /**
   * 책 검색어
   */
  query: string;
  onSearch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const PureSearchBar = ({
  query,
  onChange,
  onSearch,
  onEnter,
}: PureSearchBarProps) => {
  return (
    <Container>
      <Input
        value={query}
        onChange={onChange}
        width='100%'
        placeholder='책을 검색해보세요.'
        onKeyDown={onEnter}
        focus
      />
      <Button onClick={onSearch} size='medium' width='6rem'>
        책찾기
      </Button>
    </Container>
  );
};

/**
 * `SearchBar`는 인풋값을 통해 검색을 수행할 수 있는 컴포넌트 입니다.
 */
const SearchBar = () => {
  // const { value: query, onChange } = useInput<HTMLInputElement>("");
  const query = useSelector(selectSearchQuery);
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };
  const onSearch = () => dispatch(searchBooksThunk());
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <PureSearchBar
      query={query}
      onChange={onChange}
      onSearch={onSearch}
      onEnter={onEnter}
    />
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  * + * {
    margin-top: 0.5rem;
  }
`;
