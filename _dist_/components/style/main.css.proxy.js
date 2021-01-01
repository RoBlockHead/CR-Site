// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".content {\n  text-align: justify;\n  font-size: 1.0625em;\n}\n@media screen and (max-width: 900px) {\n  .content {\n    padding-right: 1.5em;\n    padding-left: 1.5em;\n  }\n}\n@media screen and (min-width: 900px) {\n  .content {\n    padding-right: 15vw;\n    padding-left: 15vw;\n  }\n}\n.content .h3 {\n  text-align: left;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}