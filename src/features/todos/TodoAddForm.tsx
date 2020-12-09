import React, { useState } from "react";
import styled from "styled-components";
import { iTodo } from "../../types/entity";
import todoAPI from "../../api/todos";

interface TodoAddFormProps {
  setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
}

const TodoAddForm = ({ setTodos }: TodoAddFormProps) => {
  const [text, setText] = useState<string>("");
  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const onClickHanlder = (e: React.MouseEvent) => {
    e.preventDefault();
    todoAPI
      .addTodo(text)
      .then((res) => {
        const newTodo = res.data;
        setText("");
        setTodos((prev) => [newTodo, ...prev]);
      })
      .catch((e) => console.log(e));
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
