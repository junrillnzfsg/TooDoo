import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLinkList from "./FilterLinkList";
import logoURL from "../assets/logo.png";

export default ({ todos, visibilityFilter, store }) => {
  const filterTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  };
  const todoList = filterTodos(todos, visibilityFilter);
  return (
    <div className="container">
      <img src={logoURL} className="img-fluid" />
      <AddTodo
        onAddClick={text => {
          store.dispatch({
            type: "ADD_TODO",
            id: todos.length,
            text
          });
        }}
      />
      <FilterLinkList store={store} todos={todos} />
      <TodoList
        todos={todoList}
        onTodoClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id
          })
        }
      />
    </div>
  );
};
