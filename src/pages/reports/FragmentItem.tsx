import React from "react";
import styled from "styled-components";
import { BasicFragment } from "../../types/entity";
import moment from "moment";

export interface FragmentItemProps {
  fragment: BasicFragment;
}

const FragmentItem = ({ fragment }: FragmentItemProps) => {
  return (
    <Container>
      {/* TODO: 수정, 삭제 기능 필요 */}
      <span className='fragment__createdAt'>
        {moment(fragment.createdAt).fromNow()}
      </span>
      <p className='fragment__text'>{fragment.text}</p>
    </Container>
  );
};

export default FragmentItem;

const Container = styled.li`
  list-style: none;

  & + & {
    margin-top: 1rem;
  }

  .fragment__text {
    margin: 0.3rem 0 0 0;
    line-height: 1.3;
  }

  .fragment__createdAt {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;
