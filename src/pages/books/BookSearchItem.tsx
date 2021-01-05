import { NaverBook } from "../../api/naverApi";
import React from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { removeHTMLTag } from "../../lib/utils";

interface AddButtonProps {
  alreadyAdded: boolean;
  book: NaverBook;
}

/**
 * 책 추가 버튼
 */
const AddButton = ({ alreadyAdded, book }: AddButtonProps) => {
  if (alreadyAdded) {
    return <Button disabled>이미 등록된 책</Button>;
  }
  const onAdd = () => {
    // TODO: 책 생성 & 리포트 생성
    console.log("책 & 리포트를 생성합니다");
    console.log(book);
    const title = removeHTMLTag(book.title);
    console.log(title);
  };
  return <Button onClick={onAdd}>추가하기</Button>;
};

export interface PureBookSearchItemProps {
  /**
   * 네이버 API로 가져온 책 정보
   */
  book: NaverBook;
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
  const { author, image, title, description } = book;
  return (
    <Container>
      <div className='book__image'>
        <img src={image} alt={`${title} 표지`} />
      </div>
      <div className='book__info'>
        <span className='title' dangerouslySetInnerHTML={{ __html: title }} />
        <span className='author'>{author}</span>
        <p
          className='description'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <AddButton alreadyAdded={alreadyAdded} book={book} />
      </div>
    </Container>
  );
};

export interface BookSearchItemProps {
  book: NaverBook;
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
  grid-template-columns: auto auto;
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
