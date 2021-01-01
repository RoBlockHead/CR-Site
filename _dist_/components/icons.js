import React from "../../web_modules/react.js";
export const ChevronRot = props => {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "butt",
    strokeLinejoin: "arcs",
    transform: props.rotate && "rotate(90)"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", null)), /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  }));
};
export default "";