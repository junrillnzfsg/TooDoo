import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLinkList from "./FilterLinkList";

export default () => {
  return (
    <div className="container text-center">
      <img
        src="https://uploads.codesandbox.io/uploads/user/7c44c586-da4b-4bf1-8f95-3485f6673811/3REH-logo.png"
        className="img-fluid my-5"
      />
      <AddTodo />
      <FilterLinkList />
      <TodoList />
    </div>
  );
};
