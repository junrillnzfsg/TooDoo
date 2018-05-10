import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLinkList from "./FilterLinkList";
import logoURL from "../assets/logo.png";

export default () => {
  return (
    <div className="container text-center">
      <img src={logoURL} className="img-fluid my-5" />
      <AddTodo />
      <FilterLinkList />
      <TodoList />
    </div>
  );
};
