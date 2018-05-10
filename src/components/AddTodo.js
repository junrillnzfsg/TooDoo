import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="input-group">
        <input
          ref={node => {
            this.input = node;
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
                id: state.todos.length,
                text: this.input.value
              });
              this.input.value = "";
            }}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

AddTodo.contextTypes = {
  store: PropTypes.object
};
