import React from "react";
import { connect } from "react-redux";
import TodoListItem from "../todo-list-item";
import { onToggleStatus, onDeleteTodo } from "../../actions";

const TodoList = ({
  todos,
  searchTodoLabel,
  filter,
  onToggleStatus,
  onDeleteTodo,
}) => {
  const changeTodoStatus = (newItem) => {
    const idx = todos.findIndex((todo) => todo.label === newItem.label);
    const newTodos = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

    onToggleStatus(newTodos);
  };

  const deleteTodo = (label) => {
    const idx = todos.findIndex((todo) => todo.label === label);
    const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];

    onDeleteTodo(newTodos);
  };

  const searchItems = (items, searchLabel) => {
    return items.filter((item) =>
      item.label.toLowerCase().includes(searchLabel.toLowerCase())
    );
  };

  const filterItems = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);

      default:
        return items;
    }
  };

  const items = filterItems(searchItems(todos, searchTodoLabel), filter);

  const elements = items.map((item, idx) => {
    return (
      <li key={idx} className="list-group-item">
        <TodoListItem
          item={item}
          changeTodoStatus={changeTodoStatus}
          deleteTodo={deleteTodo}
        />
      </li>
    );
  });

  return <ul className="list-group my-3">{elements}</ul>;
};

const mapStateToProps = ({ todos, searchTodoLabel, filter }) => {
  return {
    todos,
    searchTodoLabel,
    filter,
  };
};

const mapDispatchToProps = {
  onToggleStatus,
  onDeleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
