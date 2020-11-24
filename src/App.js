import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Jumbotron, {JumboText} from './components/jumbotron';
import MainContent from './components/MainContent';

function App() {
  return (
		<>
		<GlobalStyles />
    <div className="App">
      <Navbar />
			<MainContent />
    </div>
		</>
  );
}

export default App;