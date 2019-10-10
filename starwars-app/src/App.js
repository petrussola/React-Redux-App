import React from 'react';
import './App.css';
import styled from 'styled-components';

// COMPONENTS
import Counter from './components/ListPeople';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Counter />
      <PersonCard />
    </div>
  );
}

export default App;
