import { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classnames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  let handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <ul className="todo_list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({ completed: todo.status === "completed" })}
          onClick={() => handleTodoClick(todo, index)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
