import React, { useEffect } from "react";

// STATE
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Counter({ fetchPeople }) {
  useEffect(() => {
    fetchPeople();
  });

  return <div>Inside the counter component</div>;
}

export default connect(
  state => state,
  actionCreators
)(Counter);
