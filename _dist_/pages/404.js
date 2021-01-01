import React from '../../web_modules/react.js';
import Jumbotron, { JumboText } from '../components/jumbotron.js';

const Error404 = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "404"
  }, /*#__PURE__*/React.createElement(Jumbotron, null, /*#__PURE__*/React.createElement(JumboText, null, /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "Error 404")), /*#__PURE__*/React.createElement("h3", null, "Sorry, the page you requested could not be found.")));
};

export default Error404;