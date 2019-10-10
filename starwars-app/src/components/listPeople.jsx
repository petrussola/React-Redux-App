import React, { useEffect } from "react";
import PeopleCard from './peopleCard';

// STATE
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Counter({ fetchPeople, listPeople }) {
  useEffect(() => {
    fetchPeople();
  });

  return listPeople.map( person => {
    return <PeopleCard person={person} />
  });
}

export default connect(
  state => state,
  actionCreators
)(Counter);
