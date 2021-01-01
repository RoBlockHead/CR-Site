import React from '../../web_modules/react.js';
import { Switch, Route } from '../../web_modules/react-router-dom.js';
import "./style/common.css.proxy.js";
import './style/main.css.proxy.js';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Error404 from '../pages/404.js';
import PaymentPage from '../pages/PaymentPage.js';

const MainContent = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    component: About
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/payment",
    component: PaymentPage
  }), /*#__PURE__*/React.createElement(Route, {
    component: Error404
  })));
};

export default MainContent;