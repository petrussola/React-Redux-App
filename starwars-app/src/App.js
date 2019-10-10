import React from "react";
import "./App.css";
import styled from "styled-components";

// COMPONENTS
import ListPeople from "./components/ListPeople";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <div className="listWrapper">
        <ListPeople />
      </div>
      <div className="selectedPerson">
        <PersonCard />
      </div>
    </div>
  );
}

export default App;
