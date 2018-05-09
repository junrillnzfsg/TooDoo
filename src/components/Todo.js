import React from "react";

export default ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className="list-group-item d-flex justify-content-between align-items-center"
  >
    <span
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </span>
    <div>
      <button className="btn btn-link">
        <i className="fa fa-trash" />
      </button>
    </div>
  </li>
);
