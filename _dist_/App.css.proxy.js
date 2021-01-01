// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\r\n\tdisplay: flex;\r\n\tmin-height: 100vh;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\ttext-align: center;\r\n}\r\nbody{\r\n\tmargin: 0;\r\n}\r\nhtml {\r\n\t--brand-cyan: #4df4d4;\r\n\t--brand-red: #ff0000;\r\n\t--dark-color: #000000;\r\n\t--light-color: #FFFFFF;\r\n\tmargin: 0;\r\n}\r\n@font-face {\r\nfont-family: Futura-Book;\r\nsrc: url(${futurabook});\r\n}\r\n@font-face {\r\nfont-family: Futura-Bold;\r\nsrc: url(./assets/fonts/Futura-Bold.otf);\r\n}\r\n@font-face {\r\nfont-family: Futura-Bold-Outline;\r\nsrc: url(./assets/fonts/FuturaBQ-BoldOutline.otf);\r\n}\r\nhtml{\r\n\theight: 100%;\r\n\tmargin: 0;\r\n}\r\nbody {\r\n\toverflow: auto;\r\n\theight: 100%;\r\n\tbackground-color: var(--dark-color);\r\n\tcolor: var(--light-color);\r\n\tz-index: -1;\r\n}\r\n.cyan {\r\n\tcolor: var(--brand-cyan);\r\n}\r\n.red {\r\n\tcolor: var(--brand-red);\r\n}\r\n.main {\r\n\t/* padding-top: 5em; */\r\n\t/* padding: 0 5em 0 5em; */\r\n}\r\n.noscroll {\r\n\t/* position: fixed; */\r\n\toverflow: hidden;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}