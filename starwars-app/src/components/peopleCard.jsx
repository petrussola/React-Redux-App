import React from "react";
import styled from "styled-components";

const StyledPeopleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default function PeopleCard({ person, selectPerson }) {
  return (
    <StyledPeopleCard className="test">
      <p>{person.name}</p>
      <button onClick={() => selectPerson(person.name)}>
        Select Character
      </button>
    </StyledPeopleCard>
  );
}
