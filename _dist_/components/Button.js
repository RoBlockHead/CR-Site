import React from '../../web_modules/react.js';
import { NavLink } from '../../web_modules/react-router-dom.js';
import './style/button.css.proxy.js';

const LinkButton = props => {
  if (props.internal) {
    return /*#__PURE__*/React.createElement(NavLink, {
      to: props.to,
      onClick: props.onClick,
      className: "linkButton"
    }, props.text);
  } else {
    return /*#__PURE__*/React.createElement("a", {
      href: props.to,
      onClick: props.onClick,
      className: "linkButton"
    }, props.text);
  }
};

export default LinkButton;