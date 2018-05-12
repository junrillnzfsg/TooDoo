import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "./Link";
import { setVisibilityFilter } from "../actions/actions";

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick() {
    dispatch(setVisibilityFilter(props.filter));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Link);
