// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".linkButton {\n  background-color: var(--light-color);\n  color: var(--dark-color);\n  margin-top: 1em;\n  margin-bottom: 1em;\n  display: inline-block;\n  width: auto;\n  padding: 0.5em;\n  text-decoration: none;\n  font-family: futura-pt-bold;\n  box-shadow: 2px 2px 2px black;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}