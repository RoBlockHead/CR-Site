import React, {useState, useEffect} from 'react';
import Navbar from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
	const [ isNavOn, setNavOn ] = useState(false);
	useEffect(() => {
		if(isNavOn){
			document.getElementsByClassName('lockme').forEach((v, i) => {
				v.style.top = -window.scrollY + 'px';
			});
		}
	});
	return(
		<>

		<div className="App" >
			<div className="upper-content">
				<Navbar navState={isNavOn} navSetter={setNavOn} />
				<MainContent className="lockme"/>
			</div>
			<Footer className="lockme"/>
		</div>
		</>
	);
}

export default App;