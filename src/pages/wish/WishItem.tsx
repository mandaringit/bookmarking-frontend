import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LIBRARY_CODE_TABLE } from "../../lib/libraryCodes";
import { getFullThumbnailUrl } from "../../lib/utils";
import { BasicWish } from "../../types/entity";

export interface PureWishItemProps extends WishItemProps {}

export const PureWishItem = ({ wish }: PureWishItemProps) => {
  return (
    <Container>
      {wish.book.libraryOwnStatuses &&
        wish.book.libraryOwnStatuses.map((status) => (
          <div key={status.id}>
            <div>{LIBRARY_CODE_TABLE[status.library.code]}</div>
            <div>소장 여부 : {status.hasBook ? "소장" : "미소장"}</div>
            <div>대출 여부 : {status.loanAvailable ? "가능" : "불가능"}</div>
          </div>
        ))}
      {/* <Link to={`/wish/${wish.id}`}>
        <img
          className='item__thumbnail'
          src={getFullThumbnailUrl(wish.book.thumbnail, 152)}
          alt={`${wish.book.title} 썸네일`}
        />
      </Link> */}
    </Container>
  );
};

export interface WishItemProps {
  /**
   * 기본 독후감 정보
   */
  wish: BasicWish;
}

const WishItem = ({ wish }: WishItemProps) => {
  return <PureWishItem wish={wish} />;
};

export default WishItem;

const Container = styled.li`
  list-style: none;
  position: relative;
  width: 152px;
  & > a {
    color: black;
    text-decoration: none;
  }
  .item__thumbnail {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 152px;
    height: 225px;
  }
  .item__title {
    font-size: 0.875rem;
  }
`;
