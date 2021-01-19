import { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { KakaoBook } from "../../api/kakaoApi";
import Loader from "../../components/molecules/Loader";
import {
  loadNextSearchBooks,
  selectBooks,
  selectSearchStatus,
  selectSearchEnd,
} from "../../slices/searchSlice";
import { useAppDispatch } from "../../store";
import { LoadingState } from "../../types/utils";
import BookSearchItem from "./BookSearchItem";

export interface PureBookSearchListProps {
  /**
   * API 요청 후 받아온 책 목록
   */
  books: KakaoBook[];
  /**
   * 첫 검색 요청 상태
   */
  initialStatus: LoadingState;
  /**
   * 인피니트 로드 요청 상태
   */
  loadNextStatus: LoadingState;
  /**
   *  로더에 교차할 때 발생하는 콜백
   */
  loaderCallback: IntersectionObserverCallback;
}

export const PureBookSearchList = ({
  books,
  initialStatus,
  loadNextStatus,
  loaderCallback,
}: PureBookSearchListProps) => {
  // 초기 대기 화면상태
  if (initialStatus === "idle") {
    return null;
  }

  // 첫 fetch 중
  if (initialStatus === "loading" && books.length === 0) {
    return (
      <Container>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </Container>
    );
  }

  // fetch 성공 &  아이템 없음
  if (initialStatus === "succeeded" && books.length === 0) {
    return (
      <Empty>
        <span>앗! 찾으려는 책이 없어요 😭</span>
      </Empty>
    );
  }

  // fetch 성공 & 아이템 있음
  return (
    <Container>
      {books.map((book, i) => (
        <BookSearchItem book={book} key={book.isbn + i} />
      ))}
      {loadNextStatus === "loading" ? (
        <>
          <LoadingItem />
          <LoadingItem />
        </>
      ) : (
        <Loader loaderCallback={loaderCallback} />
      )}
    </Container>
  );
};

const BookSearchList = () => {
  const books = useSelector(selectBooks);
  const status = useSelector(selectSearchStatus);
  const isSearchEnd = useSelector(selectSearchEnd);
  const dispatch = useAppDispatch();
  const loaderCallback: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (!isSearchEnd && entry.isIntersecting) {
        dispatch(loadNextSearchBooks());
      }
    },
    [dispatch, isSearchEnd]
  );

  return (
    <PureBookSearchList
      books={books}
      initialStatus={status.initial}
      loadNextStatus={status.next}
      loaderCallback={loaderCallback}
    />
  );
};

export default BookSearchList;

const Container = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
`;

const Empty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

/**
 * 이하 로딩 컴포넌트
 */

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
