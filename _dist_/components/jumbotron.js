import React from '../../web_modules/react.js';
import "./style/jumbotron.css.proxy.js";

const Jumbotron = props => {
  const jumboStyle = {
    backgroundImage: 'url(' + props.image + ')',
    backgroundColor: props.color,
    objectFit: 'cover',
    backgroundPosition: 'center center'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "jumbotron",
    style: jumboStyle
  }, props.children);
};

export const JumboText = props => {
  return /*#__PURE__*/React.createElement("h1", {
    className: "JumboText"
  }, props.children);
};
export const JumboTagline = props => {
  return /*#__PURE__*/React.createElement("h3", {
    className: "JumboTagline"
  }, props.children);
};
export default Jumbotron;