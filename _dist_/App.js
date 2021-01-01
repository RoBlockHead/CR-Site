import React, { useState } from '../web_modules/react.js';
import Navbar from './components/Nav.js';
import './App.css.proxy.js';
import Footer from './components/Footer.js';
import MainContent from './components/MainContent.js';

const App = () => {
  const [isNavOn, setNavOn] = useState(false);
  var scroll = 0; // useEffect(() => {
  // 	if(isNavOn){
  // 		scroll = window.scrollY;
  // 		Array.from(document.getElementsByClassName('lockme')).forEach(element => {
  // 			element.setAttribute('style', `position: fixed;top: -${scroll}px`);
  // 			// setAttribute('style', 'top: ' -window.scrollY + 'px');
  // 		});
  // 	}
  // 	else if(!isNavOn){
  // 		window.scroll(0, scroll);
  // 		Array.from(document.getElementsByClassName('lockme')).forEach(element => {
  // 			element.setAttribute('style', ``);
  // 			// setAttribute('style', 'top: ' -window.scrollY + 'px');
  // 		});
  // 	}
  // });

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "App lockme"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upper-content"
  }, /*#__PURE__*/React.createElement(Navbar, {
    navState: isNavOn,
    navSetter: setNavOn
  }), /*#__PURE__*/React.createElement(MainContent, {
    className: "lockme"
  })), /*#__PURE__*/React.createElement(Footer, {
    className: "lockme"
  })));
};

export default App;