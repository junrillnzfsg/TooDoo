import React from "react";

export default ({ active, children, onClick }) => {
  if (active) {
    return <a className="nav-link disabled">{children}</a>;
  }

  return (
    <a className="nav-link text-info" href="#" onClick={onClick}>
      {children}
    </a>
  );
};
