import React from "react";
import FilterLink from "./FilterLink";

export default ({ todos }) => {
  if (todos.length) {
    return (
      <ul className="nav">
        <FilterLink filter="SHOW_ALL">ALL</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">COMPLETED</FilterLink>
        <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>
      </ul>
    );
  }
  return "";
};
