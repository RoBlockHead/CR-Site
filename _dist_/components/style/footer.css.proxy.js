// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer {\n  background-color: #141414;\n}\n.footer .container {\n  display: flex;\n  padding: 2.5em;\n  justify-content: center;\n  align-content: center;\n  flex-flow: row;\n  overflow-wrap: normal;\n}\n.footer .container .col {\n  width: 100%;\n  overflow: hidden;\n  flex-basis: 100%;\n  align-self: center;\n}\n.footer .container .col .social {\n  display: flex;\n  flex-flow: nowrap;\n  justify-content: center;\n}\n.footer .container .col .social a {\n  padding-left: 1em;\n  padding-right: 1em;\n  filter: invert(1);\n  display: inline-block;\n  justify-content: space-evenly;\n}\n.footer .container .col .social a img {\n  width: 3em;\n}\n.footer .container .col .copyright {\n  font-weight: bold;\n  font-size: 1.125em;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}