import React from '../../web_modules/react.js';
import './style/contactForm.css.proxy.js';

const ContactForm = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "contactForm"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email",
    className: "required",
    required: true
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Message",
    className: "required",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Submit"
  })));
};

export default ContactForm;