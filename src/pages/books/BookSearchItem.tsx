import React from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { useSelector } from "react-redux";
import {
  createReportThunk,
  selectReportByISBN,
} from "../../slices/reportsSlice";
import {
  selectWishByISBN,
  createWishThunk,
  removeWishThunk,
} from "../../slices/wishSlice";
import { KakaoBook } from "../../api/kakaoApi";
import { extractFname, getFullThumbnailUrl } from "../../lib/utils";
import { RootState, useAppDispatch } from "../../store";
import ButtonGroup from "../../components/molecules/ButtonGroup";
import { BasicReport, BasicWish } from "../../types/entity";

export interface PureBookSearchItemProps extends BookSearchItemProps {
  /**
   * 로그인한 유저가 이미 등록한 책인지에 대한 여부
   */
  isReportExist: boolean;
  isWishExist: boolean;
  toggleWishHanlder: () => void;
  addReportHandler: () => void;
}

/**
 * `BookSearchItem`은 검색된 책 하나의 정보를 표시합니다.
 */
export const PureBookSearchItem = ({
  book,
  isReportExist,
  isWishExist,
  addReportHandler,
  toggleWishHanlder,
}: PureBookSearchItemProps) => {
  const { thumbnail, title, authors, contents } = book;
  const fname = extractFname(thumbnail);
  const imageURL = getFullThumbnailUrl(fname, 150);

  return (
    <Container>
      <div className='book__image'>
        <img src={imageURL} alt={`${title} 표지`} />
      </div>
      <div className='book__info'>
        <span className='title' dangerouslySetInnerHTML={{ __html: title }} />
        <span className='author'>{authors[0]}</span>
        <p
          className='description'
          dangerouslySetInnerHTML={{ __html: contents }}
        />
        <ButtonGroup align='start'>
          <Button onClick={addReportHandler} disabled={isReportExist}>
            + 독후감
          </Button>
          <Button onClick={toggleWishHanlder}>
            {isWishExist ? "💘" : "🖤"}
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export interface BookSearchItemProps {
  /**
   * 네이버 API로 가져온 책 정보
   */
  book: KakaoBook;
}

const BookSearchItem = ({ book }: BookSearchItemProps) => {
  const dispatch = useAppDispatch();
  const report = useSelector<RootState>((state) =>
    selectReportByISBN(state, book.isbn)
  ) as BasicReport;
  const wish = useSelector<RootState>((state) =>
    selectWishByISBN(state, book.isbn)
  ) as BasicWish;

  const fname = extractFname(book.thumbnail);

  const addReportHandler = () => {
    dispatch(
      createReportThunk({
        book: {
          ...book,
          thumbnail: fname,
        },
        title: `${book.title}의 생각 모음`,
      })
    );
  };

  const toggleWishHandler = () => {
    if (!wish) {
      dispatch(
        createWishThunk({
          book: {
            ...book,
            thumbnail: fname,
          },
        })
      );
    } else {
      dispatch(removeWishThunk({ id: wish.id, isbn: wish.book.isbn }));
    }
  };

  return (
    <PureBookSearchItem
      book={book}
      isReportExist={Boolean(report)}
      isWishExist={Boolean(wish)}
      addReportHandler={addReportHandler}
      toggleWishHanlder={toggleWishHandler}
    />
  );
};

export default BookSearchItem;

const Container = styled.li`
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 100px auto;
  border-bottom: 2px solid #f0f0f0;
  padding: 1rem 0;

  .book__image {
    img {
      width: 100px;
      height: 150px;
    }
  }

  .book__info {
    & > span {
      display: block;
    }

    .title {
      font-size: 0.875rem;
      margin-bottom: 0.4rem;
    }

    .author {
      font-size: 0.875rem;
      color: grey;
    }

    .description {
      font-size: 0.875rem;
      color: grey;
    }
  }
`;
