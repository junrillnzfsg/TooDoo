import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLinkList from "./FilterLinkList";
import VisibleTodoList from "./VisibleTodoList";
import logoURL from "../assets/logo.png";

export default ({ store }) => {
  const { todos, visibilityFilter } = store.getState();
  return (
    <div className="container text-center">
      <img src={logoURL} className="img-fluid my-5" />
      <AddTodo store={store} />
      <FilterLinkList store={store} />
      <VisibleTodoList store={store} />
    </div>
  );
};
