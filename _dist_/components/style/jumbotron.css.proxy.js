// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media screen and (min-width: 925px) {\n  .jumbotron .JumboText {\n    font-size: 4em;\n  }\n  .jumbotron .JumboTagline {\n    font-size: 1.6em;\n  }\n}\n.jumbotron {\n  background: var(--dark-color);\n  padding: 2.5em 1.5em;\n}\n@media screen and (max-width: 900px) {\n  .jumbotron {\n    padding-top: 15vw;\n    padding-bottom: 15vw;\n  }\n}\n@media screen and (min-width: 900px) {\n  .jumbotron {\n    padding-top: 15vw;\n    padding-bottom: 15vw;\n  }\n}\n.jumbotron h1 {\n  font-size: 2.5em;\n}\n.jumbotron h1, .jumbotron h2, .jumbotron h3, .jumbotron h4, .jumbotron h5, .jumbotron h6 {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  text-shadow: 2px 2px 2px black;\n  font-family: futura-pt-bold;\n}\n.jumbotron .JumboTagline {\n  text-transform: uppercase;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}