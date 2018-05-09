import React, { Component } from "react";
import Link from "./Link";

export default class FilterLink extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = this.store.getState();
  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;

    return (
      <Link
        active={props.filter === this.state.visibilityFilter}
        onClick={e => {
          e.preventDefault();
          this.store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter
          });
        }}
      >
        {props.children}
      </Link>
    );
  }
}
