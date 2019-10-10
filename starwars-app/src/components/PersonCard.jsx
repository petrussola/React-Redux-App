import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import PersonCardDetails from "./PersonCardDetails";

export function PersonCard({ listPeople, selectedPerson }) {
  const cardPerson = listPeople.find(person => {
    return person.name === selectedPerson;
  });
  return <PersonCardDetails cardPerson={cardPerson} />;
}

export default connect(
  state => state,
  actionCreators
)(PersonCard);
