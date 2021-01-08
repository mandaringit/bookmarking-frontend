import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { useInput } from "../../hooks/useInput";
import { createFragmentThunk } from "../../slices/reportsSlice";

export interface PureFragmentAddFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
}

export const PureFragmentAddForm = ({
  value,
  onChange,
  onClick,
}: PureFragmentAddFormProps) => {
  return (
    <Container>
      <textarea
        value={value}
        onChange={onChange}
        placeholder='책을 읽고 생각한 내용을 메모해보세요.'
      />
      <Button onClick={onClick}>생각조각 추가</Button>
    </Container>
  );
};

interface FragmentAddFormProps {
  reportId: string;
}

const FragmentAddForm = ({ reportId }: FragmentAddFormProps) => {
  const dispatch = useDispatch();
  const { value: text, onChange } = useInput<HTMLTextAreaElement>("");
  const onClick = () => {
    dispatch(createFragmentThunk({ reportId, text }));
  };
  return (
    <PureFragmentAddForm value={text} onChange={onChange} onClick={onClick} />
  );
};

export default FragmentAddForm;

const Container = styled.div`
  margin: 1rem 0;
  & > textarea {
    padding: 1rem;
    width: 100%;
    height: 200px;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
    :focus {
      outline: none;
    }
  }
`;
