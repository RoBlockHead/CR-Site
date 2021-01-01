// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  font-family: futura-pt;\n  font-size: 16px;\n}\n\nhtml {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  overflow: auto;\n  height: 100%;\n  background-color: #000000;\n  color: #FFFFFF;\n  z-index: -1;\n  font-family: futura-pt;\n}\n\n.cyan {\n  color: #4df4d4;\n}\n\n.red {\n  color: #ff0000;\n}\n\n.fixed {\n  overflow: hidden;\n}\n\n.content a {\n  color: #4df4d4;\n}\n.content a:visited {\n  color: #3e70db;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}