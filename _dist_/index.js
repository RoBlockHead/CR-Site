import React from '../web_modules/react.js';
import ReactDOM from '../web_modules/react-dom.js';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';
import { BrowserRouter } from '../web_modules/react-router-dom.js';
ReactDOM.render( /*#__PURE__*/React.createElement(BrowserRouter, {
  basename: "/"
}, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();