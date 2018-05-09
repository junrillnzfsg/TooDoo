import React from "react";
import FilterLink from "./FilterLink";

export default ({ store }) => {
  return (
    <ul className="nav">
      <FilterLink store={store} filter="SHOW_ALL">
        ALL
      </FilterLink>
      <FilterLink store={store} filter="SHOW_COMPLETED">
        COMPLETED
      </FilterLink>
      <FilterLink store={store} filter="SHOW_ACTIVE">
        ACTIVE
      </FilterLink>
    </ul>
  );
};
