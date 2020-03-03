import React, { useEffect } from "react";
import PeopleCard from "./PeopleCard";
import uuid from 'uuid';
import styled from 'styled-components';

// STATE
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function Counter({ fetchPeople, listPeople, selectPerson }) {
  useEffect(() => {
    fetchPeople();
  }, []);

  return listPeople.map(person => {
    return (
      <PeopleCard
        key={uuid()}
        person={person}
        selectPerson={selectPerson}
      />
    );
  });
}

export default connect(
  state => state,
  actionCreators
)(Counter);
