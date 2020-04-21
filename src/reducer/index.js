const initialState = {
  todos: [
    { label: "Drink Coffe", done: false, important: false },
    { label: "Create React App", done: false, important: false },
    { label: "Upload React App on Git", done: false, important: false },
  ],
  addTodoLabel: "",
  searchTodoLabel: "",
  filter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_TOGGLE_STATUS":
      return {
        ...state,
        todos: action.payload,
      };

    case "ON_DELETE_TODO":
      return {
        ...state,
        todos: action.payload,
      };

    case "ON_CHANGE_ADD_TODO_INPUT":
      return {
        ...state,
        addTodoLabel: action.payload,
      };

    case "ON_ADD_TODO":
      return {
        ...state,
        todos: action.payload,
        addTodoLabel: "",
      };

    case "ON_CHANGE_SEARCH_TODO_INPUT":
      return {
        ...state,
        searchTodoLabel: action.payload,
      };

    case "ON_CLICK_BUTTON_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
