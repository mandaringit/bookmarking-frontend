import React from "react";
import styled from "styled-components";
import { BasicFragment } from "../../types/entity";
import moment from "moment";
import { useDispatch } from "react-redux";
import { removeFragmentThunk } from "../../slices/reportsSlice";

export interface PureFragmentItemProps extends FragmentItemProps {
  onRemove: () => void;
}

export const PureFragmentItem = ({
  fragment,
  onRemove,
}: PureFragmentItemProps) => {
  return (
    <Container>
      {/* TODO: 수정 기능 필요 */}
      <span className='fragment__createdAt'>
        {moment(fragment.createdAt).fromNow()}
      </span>
      <span onClick={onRemove}>x</span>
      <p className='fragment__text'>{fragment.text}</p>
    </Container>
  );
};

export interface FragmentItemProps {
  fragment: BasicFragment;
}

const FragmentItem = ({ fragment }: FragmentItemProps) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeFragmentThunk({ fragemntId: fragment.id }));
  };
  return <PureFragmentItem fragment={fragment} onRemove={onRemove} />;
};

export default FragmentItem;

const Container = styled.li`
  list-style: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(158, 158, 158, 0.1);

  padding: 1rem;
  border-radius: 10px;

  & + & {
    margin-top: 1rem;
  }

  .fragment__text {
    margin: 0.3rem 0 0 0;
    line-height: 1.3;
    white-space: pre-line;
  }

  .fragment__createdAt {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;
