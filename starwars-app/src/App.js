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
  height: 100vh;
  margin: 0 auto;
  background: repeat url(${img});
  .listWrapper,
  .selectedPerson {
    width: 50%;
  }
`;

function App() {
  return (
    <StyledApp className="App">
      <div>
        <h1>Star Wars encyclopedia</h1>
        <p>
          Powered by <a href="https://swapi.co">swapi.co</a>
        </p>
        <p>
          Proudly built by <a href="https://twitter.com/petrussola">Pere</a> with <a href="https://reactjs.org/">React</a> and <a href="https://redux.js.org/">Redux</a>
        </p>
      </div>
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
