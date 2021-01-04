import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Container = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 0.5rem;
  }
`;

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

/**
 * `SearchBar`는 인풋값을 통해 검색을 수행할 수 있는 컴포넌트 입니다.
 */
const SearchBar = ({ query, onChange, onSearch }: SearchBarProps) => {
  return (
    <Container>
      <Input value={query} onChange={onChange} width='100%' />
      <Button onClick={onSearch} size='medium'>
        SEARCH
      </Button>
    </Container>
  );
};

export default SearchBar;
