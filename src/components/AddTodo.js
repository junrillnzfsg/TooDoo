import React, { Component } from "react";

export default class AddTodo extends Component {
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
    const { store } = this.props;
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
