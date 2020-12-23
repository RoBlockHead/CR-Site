import React, {useState, useEffect} from 'react';
import Navbar from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
	const [ isNavOn, setNavOn ] = useState(false);
	var scroll = 0;
	useEffect(() => {
		if(isNavOn){
			scroll = window.scrollY;
			Array.from(document.getElementsByClassName('lockme')).forEach(element => {
				element.setAttribute('style', `position: fixed;top: -${scroll}px`);
				
				// setAttribute('style', 'top: ' -window.scrollY + 'px');
			});
		}
		else if(!isNavOn){
			window.scroll(0, scroll);
			Array.from(document.getElementsByClassName('lockme')).forEach(element => {
				element.setAttribute('style', ``);
				
				// setAttribute('style', 'top: ' -window.scrollY + 'px');
			});
			
		}
	});
	return(
		<>

		<div className="App lockme" >
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