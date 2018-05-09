import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterLinkList from "./FilterLinkList";

let todoIndex = 0;

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
      <h1>TODO APP</h1>
      <AddTodo
        onAddClick={text => {
          store.dispatch({
            type: "ADD_TODO",
            id: todoIndex++,
            text
          });
        }}
      />
      <FilterLinkList todos={todos} />
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
