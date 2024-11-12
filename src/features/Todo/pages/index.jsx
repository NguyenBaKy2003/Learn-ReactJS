import PropTypes from "prop-types";
import TodoList from "../components/TodoList"; // Ensure this path is correct
import "./style.scss";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Value } from "sass";
import TodoForm from "../components/TodoForm";

TodoFeature.propTypes = {};

function TodoFeature() {
  const initialTodoList = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Code", status: "completed" },
    { id: 3, title: "Sleep", status: "completed" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState(initialTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    // Update the URL query string when filterStatus changes
    const params = queryString.stringify({ status: filterStatus });
    navigate({
      pathname: location.pathname,
      search: params ? `?${params}` : "",
    });
  }, [filterStatus, navigate, location.pathname]);

  const handleShowAllClick = () => setFilterStatus("all");
  const handleShowCompletedClick = () => setFilterStatus("completed");
  const handleShowNewClick = () => setFilterStatus("new");

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  function handleTodoFormSubmit(values) {
    console.log("Form Submid:", values);
  }
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onsubmit={handleTodoFormSubmit}></TodoForm>

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div className="filter-buttons">
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
