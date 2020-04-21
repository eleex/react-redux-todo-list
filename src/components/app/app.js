import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

const App = () => {
  return (
    <div className="app-todo">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default App;
