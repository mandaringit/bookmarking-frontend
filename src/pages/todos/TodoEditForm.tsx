import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { iTodo } from "../../types/entity";
import { updateTodoText } from "../../slices/todosSlice";

interface TodoEditFormProps {
  todo: iTodo;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoEditForm = ({ todo, setIsUpdate }: TodoEditFormProps) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const onClickHanlder = (e: React.MouseEvent) => {
    e.preventDefault();
    if (todo.text === text || text === "") {
      setIsUpdate((prev) => !prev);
      return;
    }

    dispatch(updateTodoText({ todoId: todo.id, text }));
    setIsUpdate((prev) => !prev);
  };
  return (
    <Form>
      <input type='text' value={text} onChange={onChangeHandler} />
      <button onClick={onClickHanlder}>✍️</button>
    </Form>
  );
};

export default TodoEditForm;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  input {
    border: none;
    font-size: 1.3rem;
    opacity: 0.5;
    color: blue;
    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: 1px dashed black;
    border-radius: 3px;
    cursor: pointer;
    transition-duration: 0.3s;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
