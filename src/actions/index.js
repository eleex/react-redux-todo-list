const onToggleStatus = (newTodos) => {
  return {
    type: "ON_TOGGLE_STATUS",
    payload: newTodos,
  };
};

const onDeleteTodo = (newTodos) => {
  return {
    type: "ON_DELETE_TODO",
    payload: newTodos,
  };
};

const onAddTodo = (newTodos) => {
  return {
    type: "ON_ADD_TODO",
    payload: newTodos,
  };
};

const onChangeAdd = (evt) => {
  const value = evt.target.value;

  return {
    type: "ON_CHANGE_ADD_TODO_INPUT",
    payload: value,
  };
};

const onChangeSearch = (evt) => {
  const value = evt.target.value;

  return {
    type: "ON_CHANGE_SEARCH_TODO_INPUT",
    payload: value,
  };
};

const onClickFilter = (filter) => {
  return {
    type: "ON_CLICK_BUTTON_FILTER",
    payload: filter,
  };
};

export {
  onToggleStatus,
  onDeleteTodo,
  onAddTodo,
  onChangeAdd,
  onChangeSearch,
  onClickFilter,
};
