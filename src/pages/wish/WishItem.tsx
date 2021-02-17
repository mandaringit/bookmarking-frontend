import React from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { LIBRARY_CODE_TABLE } from "../../lib/libraryCodes";
import { getFullThumbnailUrl } from "../../lib/utils";
import { removeWishThunk } from "../../slices/wishSlice";
import { useAppDispatch } from "../../store";
import { BasicWish } from "../../types/entity";

export interface PureWishItemProps extends WishItemProps {
  onWishRemoveHanlder: () => void;
}

export const PureWishItem = ({
  wish,
  onWishRemoveHanlder,
}: PureWishItemProps) => {
  return (
    <Container>
      <img
        src={getFullThumbnailUrl(wish.book.thumbnail, 300)}
        alt={`${wish.book.title} 썸네일`}
      />
      <div className='statuses'>
        <h2 className='book__title'>{wish.book.title}</h2>
        {wish.book.libraryOwnStatuses &&
          wish.book.libraryOwnStatuses.map((status) => (
            <div className='status' key={status.id}>
              <span>{LIBRARY_CODE_TABLE[status.library.code]}</span>
              {status.hasBook ? (
                <span className='have'>소장</span>
              ) : (
                <span className='none'>미소장</span>
              )}
              {status.hasBook &&
                (status.loanAvailable ? (
                  <span className='available'>대출가능</span>
                ) : (
                  <span className='not__available'>대출불가</span>
                ))}
            </div>
          ))}
      </div>
      <Button onClick={onWishRemoveHanlder}>삭제</Button>
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
  const dispatch = useAppDispatch();
  const onWishRemoveHanlder = () =>
    dispatch(removeWishThunk({ id: wish.id, isbn: wish.book.isbn }));
  return <PureWishItem wish={wish} onWishRemoveHanlder={onWishRemoveHanlder} />;
};

export default WishItem;

const Container = styled.li`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  & > img {
    box-sizing: border-box;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    height: 250px;
  }

  & > .statuses {
    flex-grow: 1;
    padding: 0.5rem;
    .book__title {
      font-size: 0.7rem;
      margin: 0 0 0.1rem 0;
    }
  }

  .status {
    span {
      font-size: 0.6rem;
    }
    span + span {
      ::before {
        content: "•";
        color: black;
      }
    }
    .have {
      color: #fb8c00;
      font-weight: bold;
    }
    .none {
      font-weight: bold;
      color: #e57373;
    }

    .available {
      color: #00c853;
      font-weight: bold;
    }
    .not__available {
    }
  }
`;
