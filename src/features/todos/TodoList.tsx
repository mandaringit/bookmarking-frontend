import React, { useEffect, useState } from "react";
import { iTodo } from "../../types/entity";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoAddForm from "./TodoAddForm";
import todoAPI from "../../api/todos";

const TodoList = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    todoAPI
      .getTodos()
      .then((res) => {
        const todos = res.data;
        setTodos(todos);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <h1>TodoList</h1>
      <TodoAddForm setTodos={setTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;

  h1 {
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 1rem;
    list-style: none;
    max-height: 525px;
    overflow: scroll;
    border-radius: 5px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  }
`;
