import React from "react";

export default function PeopleCard({ person, selectPerson }) {
  return (
    <div>
      <p>{person.name}</p>
      <button onClick={() => selectPerson(person.name)}>
        Select Character
      </button>
    </div>
  );
}
