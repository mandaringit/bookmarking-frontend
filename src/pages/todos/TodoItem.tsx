import React, { useState } from "react";
import { iTodo } from "../../types/entity";
import styled from "styled-components";
import cx from "classnames";
import TodoEditForm from "./TodoEditForm";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../slices/todosSlice";

interface TodoItemProps {
  todo: iTodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const dispatch = useDispatch();
  const onChangeHandler = () => dispatch(toggleTodo({ todoId: todo.id }));
  const onRemoveHandler = () => dispatch(removeTodo({ todoId: todo.id }));

  return (
    <Container onDoubleClick={onRemoveHandler}>
      {isUpdate ? (
        <TodoEditForm todo={todo} setIsUpdate={setIsUpdate} />
      ) : (
        <div className='todo__info'>
          <span
            className={cx({ done: todo.done })}
            onClick={() => setIsUpdate(!isUpdate)}
          >
            {todo.text}
          </span>
          <input
            type='checkbox'
            checked={todo.done}
            onChange={onChangeHandler}
          />
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
