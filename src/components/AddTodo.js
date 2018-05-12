import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../actions/actions";

const AddTodo = ({ dispatch }) => {
  let input;
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
            dispatch(addTodo(input.value));
            input.value = "";
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);
