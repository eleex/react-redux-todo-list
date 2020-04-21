import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ item, changeTodoStatus, deleteTodo }) => {
  const { label, done, important } = item;

  let classNames = "todo-list-item-label";

  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }

  return (
    <span className="todo-list-item">
      <span
        className={classNames}
        onClick={() => {
          changeTodoStatus({ ...item, done: !done });
        }}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success float-right"
        onClick={() => {
          changeTodoStatus({ ...item, important: !important });
        }}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger float-right mr-1"
        onClick={() => {
          deleteTodo(label);
        }}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
