// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".yeet {\n  --yeet: 100;\n}\n\n.contactForm {\n  background-color: #0F0F0F;\n  padding: 2.5em;\n  border-radius: 1.5em;\n  width: auto;\n  display: flex;\n}\n.contactForm textarea {\n  width: 100%;\n}\n.contactForm input.required::after {\n  color: var(--brand-red);\n  content: \"*\";\n}\n.contactForm input, .contactForm textarea {\n  padding: 0.5em;\n  border-radius: 0.75em;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}