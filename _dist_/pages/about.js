import React from '../../web_modules/react.js';
import Jumbotron, { JumboText } from '../components/jumbotron.js';
import Content from '../components/content.js';
import ContactForm from '../components/contactForm.js';
import img1 from '../assets/Backdrop1.png.proxy.js';

const About = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "about"
  }, /*#__PURE__*/React.createElement(Jumbotron, {
    image: img1
  }, /*#__PURE__*/React.createElement(JumboText, null, "About Us")), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("h3", null, "Who We Are"), /*#__PURE__*/React.createElement("p", null, "CircuitRunners Robotics is best known as a nonprofit FIRST robotics organization based at Wheeler High School. While we compete as FIRST Robotics Competition Team 1002, FIRST Tech Challenge Teams 1002 and 11347, we are so much more than that. We have been competing and spreading STEM in Marietta, Georgia and beyond since 2002. We seek to instill important values of engineering, business, and so much more to our members, our community, and the world to inspire and create innovators and future leaders necessary for advancing society. We have been competing for almost 20 years across FIRST Robotics Competition, VEX Robotics, FIRST Tech Challenge, BEST Robotics, and Zero Robotics. Hundreds of students have used their CircuitRunner experience to be the foundation for a strong STEM career. We have and continue to help teams from around the world become better through mentoring and competition, and we do our best to show students what is possible through a STEM education. But while we have almost two decades of experience under our belt, we are not quite finished yet \u2013 we aim to keep shooting higher and higher!"), /*#__PURE__*/React.createElement("h3", null, "History"), /*#__PURE__*/React.createElement("p", null, "All the way back in 2002, CircuitRunners Robotics joined the robotics community with a mission of giving high school students the best hands-on opportunities to begin a lifelong journey in the fields of Science, Technology, Engineering, and Math. Since then, CircuitRunners Robotics has become an integral part of the Georgia competition robotics community. We have always taken pride in our strong outreach base, our competitive spirit, and our tight-knit community that spans decades."), /*#__PURE__*/React.createElement("h3", null, "Follow Us on Social Media!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://facebook.com/circuitrunners"
  }, "@circuitrunners"), " on Facebook", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/circuitrunners"
  }, "@circuitrunners"), " on Twitter", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/circuitrunners"
  }, "@circuitrunners"), " on instagram", /*#__PURE__*/React.createElement("br", null))));
};

export default About;