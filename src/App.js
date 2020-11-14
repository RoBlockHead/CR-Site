import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --brand-cyan: #4df4d4;
    --brand-red: #ff0000;
    --color-black: #000000;
  }
`;

function App() {
  return (
		<>
		<GlobalStyles />
    <div className="App">
      <Navbar />
    </div>
		</>
  );
}

export default App;
