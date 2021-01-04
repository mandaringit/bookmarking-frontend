import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "./todosSlice";

const TodoAddForm = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const onClickHanlder = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <Form>
      <input type='text' onChange={onChangeHanlder} value={text} />
      <button onClick={onClickHanlder}>해야지해야지</button>
    </Form>
  );
};

export default TodoAddForm;

const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;

  input {
    flex-grow: 1;
    border: 1px solid black;
    border-right: none;
    height: 40px;
    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
    transition-duration: 0.2s;
    font-weight: bold;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
