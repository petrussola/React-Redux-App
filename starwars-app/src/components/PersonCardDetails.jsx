import React from "react";

export default function PersonCardDetails({ cardPerson }) {

  if (!cardPerson) {
    return null
  }
  return (
    <div>
      <h1>{cardPerson.name}</h1>
      <p>Gender: {cardPerson.gender}</p>
      <p>Birth year: {cardPerson.birth_year}</p>
      <p>Starred in {cardPerson.films.length} films</p>
    </div>
  );
}
