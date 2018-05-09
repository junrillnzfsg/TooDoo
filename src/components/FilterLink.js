import React from "react";

export default ({ filter, currentFilter, children, onClick }) => {
  if (filter === currentFilter) {
    return <a className="nav-link disabled">{children}</a>;
  }
  return (
    <a
      className="nav-link"
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};
