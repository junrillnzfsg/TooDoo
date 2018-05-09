import React from "react";

export default ({ onAddClick }) => {
  let input;
  return (
    <div className="input-group">
      <input
        ref={node => (input = node)}
        type="text"
        className="form-control"
        placeholder="Write Something..."
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            onAddClick(input.value);
            input.value = "";
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
