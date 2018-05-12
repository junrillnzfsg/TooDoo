import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../actions/actions";

const TodoList = ({ todos, onTodoClick }) => (
  <ul className="list-group">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

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

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
