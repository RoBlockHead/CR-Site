import React, { useState, useRef } from '../../web_modules/react.js';
import { NavLink } from '../../web_modules/react-router-dom.js';
import './style/nav.css.proxy.js';
import logo_wide from '../assets/logo_wide.png.proxy.js';

const Navbar = props => {
  const [navOn, setNavOn] = [props.navState, props.navSetter];
  const [windowOffset, setWindowOffset] = useState(0);
  const node = useRef();

  const toggleNav = () => {
    setNavOn(!navOn);
  }; // useEffect(() => {
  // 	if(navOn){
  // 		document.addEventListener("click", handleClick);
  // 		return;
  // 	}
  // 	return () => {
  // 	  document.removeEventListener("click", handleClick);
  // 	};
  //   }, []);
  // const handleClick = (e: MouseEvent) => {
  // 	if (node.current.contains(e.target)) {
  // 		return;
  // 	}
  // 	toggleNav();
  // }


  return /*#__PURE__*/React.createElement("div", {
    className: "nav",
    ref: node
  }, /*#__PURE__*/React.createElement("div", {
    className: "desktop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo_wide,
    className: "logo",
    alt: "CircuitRunners Logo"
  })), /*#__PURE__*/React.createElement("nav", null, mainNav))), /*#__PURE__*/React.createElement("div", {
    className: "mobile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement(Hamburger, {
    navToggle: toggleNav,
    navState: navOn
  }), /*#__PURE__*/React.createElement("img", {
    src: logo_wide,
    className: "logo",
    alt: "CircuitRunners Logo"
  })), /*#__PURE__*/React.createElement(NavSlide, {
    navState: navOn,
    navSetter: setNavOn
  }, mainNav)));
};

export default Navbar;

const NavFolder = props => {
  const [open, setOpen] = useState(false); // const { height } = useWindowSize();

  const openFolder = () => {
    setOpen(!open);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: open ? "folder item open" : "folder item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "name",
    onClick: openFolder,
    href: "#"
  }, props.name), /*#__PURE__*/React.createElement("div", {
    className: "items"
  }, props.children));
};

const NavItem = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: props.to
  }, props.name));
};

const Hamburger = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "ham",
    onClick: props.navToggle
  }, /*#__PURE__*/React.createElement("div", {
    id: "ham1",
    className: props.navState ? "changed" : ""
  }, " "), /*#__PURE__*/React.createElement("div", {
    id: "ham2",
    className: props.navState ? "changed" : ""
  }, " "), /*#__PURE__*/React.createElement("div", {
    id: "ham3",
    className: props.navState ? "changed" : ""
  }, " "));
};

export const NavSlide = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.navState ? "visible side" : "side"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "container"
  }, props.children));
};
const mainNav = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavItem, {
  name: "Home",
  to: "/"
}), /*#__PURE__*/React.createElement(NavItem, {
  name: "About Us",
  to: "/about"
}));