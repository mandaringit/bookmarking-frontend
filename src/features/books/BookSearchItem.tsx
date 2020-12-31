import { NaverBook } from "../../api/naverApi";
import React from "react";
import styled from "styled-components";

export interface BookSearchItemProps {
  book: NaverBook;
}

const BookSearchItem = ({ book }: BookSearchItemProps) => {
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
      </div>
    </Container>
  );
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
