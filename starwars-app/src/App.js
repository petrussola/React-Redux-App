import React from "react";
import "./App.css";
import styled from "styled-components";

// COMPONENTS
import ListPeople from "./components/ListPeople";
import PersonCard from "./components/PersonCard";

// MEDIA

import img from "./media/criss-cross.png";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  margin: 0 auto;
  .listWrapper, .selectedPerson {
    background: repeat url(${img});
    width: 50%;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <div className="listWrapper">
        <ListPeople />
      </div>
      <div className="selectedPerson">
        <PersonCard />
      </div>
    </StyledApp>
  );
}

export default App;
