import React, { Component } from "react";
import PropTypes from "prop-types";

const AddTodo = (props, { store }) => {
  let input;
  let todoxIndex = 0;
  return (
    <div className="input-group">
      <input
        ref={node => {
          input = node;
        }}
        type="text"
        className="form-control"
        placeholder="Write Something..."
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          type="button"
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              id: todoxIndex++,
              text: input.value
            });
            input.value = "";
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

AddTodo.contextTypes = {
  store: PropTypes.object
};

export default AddTodo;
