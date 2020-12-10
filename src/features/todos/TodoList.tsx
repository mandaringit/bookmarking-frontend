import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoAddForm from "./TodoAddForm";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, selectAllTodos } from "./todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Container>
      <h1>TodoList</h1>
      <TodoAddForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
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
