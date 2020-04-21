import React from "react";
import { connect } from "react-redux";
import { onChangeAdd, onAddTodo } from "../../actions";

const ItemAddForm = ({ label, onChangeAdd, onAddTodo, todos }) => {
  const trimLabel = label.trim();

  let isDisabled = true;
  if (trimLabel) {
    isDisabled = false;
  }

  const newTodos = [...todos, { label, done: false, important: false }];

  return (
    <form className="d-flex">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Whats need to be done"
        onChange={onChangeAdd}
        value={label}
      ></input>
      <input
        type="submit"
        value="Add item"
        className="btn btn-secondary px-4"
        onClick={(evt) => {
          evt.preventDefault();
          onAddTodo(newTodos);
        }}
        disabled={isDisabled}
      ></input>
    </form>
  );
};

const mapStateToProps = ({ todos, addTodoLabel }) => {
  return {
    todos,
    label: addTodoLabel,
  };
};

const mapDispatchToProps = {
  onChangeAdd,
  onAddTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);
