import React, { useState } from "react";
import { iTodo } from "../../types/entity";
import styled from "styled-components";
import cx from "classnames";
import todoAPI from "../../api/todos";
import TodoEditForm from "./TodoEditForm";

interface TodoItemProps {
  todo: iTodo;
  setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
}

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const toggleTodo = () => {
    todoAPI
      .toggleTodo(todo.id)
      .then((res) => {
        const todo = res.data;
        setTodos((prev) => {
          const idx = prev.findIndex((t) => t.id === todo.id);
          return [...prev.slice(0, idx), todo, ...prev.slice(idx + 1)];
        });
      })
      .catch((err) => console.log(err));
  };

  const onRemoveHandler = () => {
    todoAPI
      .removeTodo(todo.id)
      .then((res) => {
        if (res.status === 204) {
          setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <Container onDoubleClick={onRemoveHandler}>
      {isUpdate ? (
        <TodoEditForm
          todo={todo}
          setTodos={setTodos}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div className='todo__info'>
          <span
            className={cx({ done: todo.done })}
            onClick={() => setIsUpdate(!isUpdate)}
          >
            {todo.text}
          </span>
          <input type='checkbox' checked={todo.done} onChange={toggleTodo} />
        </div>
      )}
      <span className='todo__date'>
        {new Date(todo.createdAt).toLocaleString()}
      </span>
    </Container>
  );
};

export default React.memo(TodoItem);

const Container = styled.li`
  & + & {
    margin-top: 1rem;
  }

  .todo__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    span {
      &.done {
        text-decoration: line-through;
      }
    }
  }

  .todo__date {
    font-size: 0.8rem;
    color: grey;
  }
`;
