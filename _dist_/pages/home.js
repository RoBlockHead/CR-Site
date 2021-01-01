import React from '../../web_modules/react.js';
import Jumbotron, { JumboText, JumboTagline } from '../components/jumbotron.js';
import img1 from '../assets/Backdrop1.png.proxy.js';
import LinkButton from '../components/Button.js';
import Content from '../components/content.js';

const Home = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement(Jumbotron, {
    image: img1
  }, /*#__PURE__*/React.createElement(JumboText, null, "FROM ", /*#__PURE__*/React.createElement("span", {
    className: "cyan"
  }, "POTENTIAL"), " TO ", /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "KINETIC")), /*#__PURE__*/React.createElement(JumboTagline, null, "We're CircuitRunners Robotics and we don't just build robots!"), /*#__PURE__*/React.createElement(LinkButton, {
    internal: true,
    text: "See More...",
    to: "/about"
  })), /*#__PURE__*/React.createElement(Content, null));
};

export default Home;