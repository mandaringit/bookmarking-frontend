import React from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { useDispatch } from "react-redux";
import { createReportThunk } from "../../slices/reportsSlice";
import { KakaoBook } from "../../api/kakaoApi";
import { KakaoBookForm } from "../../types/utils";
import { extractFname, getFullThumbnailUrl } from "../../lib/utils";

interface AddButtonProps {
  alreadyAdded: boolean;
  book: KakaoBookForm;
}

/**
 * 책 추가 버튼
 */
const AddButton = ({ alreadyAdded, book }: AddButtonProps) => {
  const dipatch = useDispatch();

  if (alreadyAdded) {
    return <Button disabled>이미 등록된 책</Button>;
  }
  const onAdd = () => {
    const fname = extractFname(book.thumbnail);
    dipatch(
      createReportThunk({
        book: {
          ...book,
          thumbnail: fname,
        },
        title: `${book.title}의 생각 모음`,
      })
    );
  };
  return <Button onClick={onAdd}>추가하기</Button>;
};

export interface PureBookSearchItemProps {
  /**
   * 네이버 API로 가져온 책 정보
   */
  book: KakaoBook;
  /**
   * 로그인한 유저가 이미 등록한 책인지에 대한 여부
   */
  alreadyAdded: boolean;
}

/**
 * `BookSearchItem`은 검색된 책 하나의 정보를 표시합니다.
 */
export const PureBookSearchItem = ({
  book,
  alreadyAdded,
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
        <AddButton alreadyAdded={alreadyAdded} book={book} />
      </div>
    </Container>
  );
};

export interface BookSearchItemProps {
  book: KakaoBook;
}

const BookSearchItem = ({ book }: BookSearchItemProps) => {
  const alreadyAdded = false;

  return <PureBookSearchItem book={book} alreadyAdded={alreadyAdded} />;
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
