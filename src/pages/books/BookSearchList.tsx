import { useSelector } from "react-redux";
import styled from "styled-components";
import { KakaoBook } from "../../api/kakaoApi";
import { selectBooks, selectSearchStatus } from "../../slices/searchSlice";
import { LoadingState } from "../../types/utils";
import BookSearchItem from "./BookSearchItem";

export interface PureBookSearchListProps {
  /**
   * API 요청 후 받아온 책 목록
   */
  books: KakaoBook[];
  /**
   * API 요청 상태
   */
  status: LoadingState;
}

export const PureBookSearchList = ({
  books,
  status,
}: PureBookSearchListProps) => {
  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <Container>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </Container>
    );
  }

  if (status === "succeeded" && books.length === 0) {
    // TODO: 빈화면 구현
    return <Container>EMPTY!</Container>;
  }

  return (
    <Container>
      {books.map((book) => (
        <BookSearchItem book={book} key={book.isbn} />
      ))}
    </Container>
  );
};

const BookSearchList = () => {
  const books = useSelector(selectBooks);
  const status = useSelector(selectSearchStatus);

  return <PureBookSearchList books={books} status={status} />;
};

export default BookSearchList;

const Container = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
`;

const LoadingItem = () => (
  <LoadingContainer>
    <span className='thumbnail glow' />
    <div>
      <span className='title glow'>책제목은 이정도 길이</span>
      <span className='author glow'>작가명</span>
      <p className='description glow'>텍스트</p>
    </div>
  </LoadingContainer>
);

const LoadingContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 100px auto;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  .thumbnail {
    width: 100%;
    height: 150px;
  }

  .title {
    display: block;
    width: 200px;
    margin-bottom: 0.3rem;
  }

  .author {
    display: block;
    width: 50px;
  }

  .description {
  }

  [class~="glow"] {
    background-color: #bdbdbd;
    color: #bdbdbd;
    animation: glow 1s infinite alternate;
    border-radius: 5px;
  }

  @keyframes glow {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 0.8;
    }
  }
`;
