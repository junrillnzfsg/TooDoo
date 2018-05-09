import React, { Component } from "react";
import TodoList from "./TodoList";

export default class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = props;
    const state = store.getState();
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
    const todoList = filterTodos(state.todos, state.visibilityFilter);
    return (
      <TodoList
        todos={todoList}
        onTodoClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id
          })
        }
      />
    );
  }
}