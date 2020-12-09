import React, { useState } from "react";
import styled from "styled-components";
import todoAPI from "../../api/todos";
import { iTodo } from "../../types/entity";

interface TodoEditFormProps {
  todo: iTodo;
  setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoEditForm = ({ todo, setTodos, setIsUpdate }: TodoEditFormProps) => {
  const [text, setText] = useState(todo.text);
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

    todoAPI
      .updateTodoText(todo.id, text)
      .then((res) => {
        const updatedTodo = res.data;
        setTodos((prev) => {
          const idx = prev.findIndex((t) => t.id === todo.id);
          return [...prev.slice(0, idx), updatedTodo, ...prev.slice(idx + 1)];
        });
        setIsUpdate((prev) => !prev);
      })
      .catch((e) => console.log(e));
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
