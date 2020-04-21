import React from "react";
import { connect } from "react-redux";

import "./app-header.css";

const AppHeader = ({ todos }) => {
  const done = todos.filter((todo) => todo.done === true).length;
  const active = todos.length - done;

  return (
    <header className="d-flex">
      <h1>Todo List</h1>
      <p>
        {active} more to do, {done} done
      </p>
    </header>
  );
};

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  };
};

export default connect(mapStateToProps)(AppHeader);
