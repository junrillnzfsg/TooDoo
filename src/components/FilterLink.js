import React, { Component } from "react";
import Link from "./Link";

export default class FilterLink extends Component {
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
    const { filter, children, store } = this.props;
    const state = store.getState();
    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={e => {
          e.preventDefault();
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter
          });
        }}
      >
        {children}
      </Link>
    );
  }
}
