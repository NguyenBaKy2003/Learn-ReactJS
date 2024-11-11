import PropTypes from "prop-types";
import TodoList from "../components/TodoList"; // Ensure this path is correct
import "./style.scss";
import { useState } from "react";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const inittodoList = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Code", status: "completed" },
    { id: 3, title: "Sleep", status: "completed" },
  ];

  let [todoList, setTodoList] = useState(inittodoList);

  let [filterStatus, setFilterStatus] = useState("all");

  function handleShowAllClick() {
    setFilterStatus("all");
  }
  function handleShowCompletedClick() {
    setFilterStatus("completed");
  }
  function handleShowNewClick() {
    setFilterStatus("new");
  }

  let renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  console.log(renderTodoList);

  let handleTodoClick = (todo, index) => {
    console.log(todo, index);
    let newTodoList = [...todoList];
    let newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    newTodoList[index] = newTodo;
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      <div className="">
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
