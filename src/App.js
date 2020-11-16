import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import GlobalStyles from './GlobalStyles'

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
