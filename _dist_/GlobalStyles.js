import { createGlobalStyle } from '../web_modules/styled-components.js';
import futurabold from './assets/fonts/Futura-Bold.otf.proxy.js';
import futurabook from './assets/fonts/Futura-Book.otf.proxy.js';
import futuraboldoutline from './assets/fonts/FuturaBQ-BoldOutline.otf.proxy.js';
const style = createGlobalStyle`
	::root{
		
	}
  html {
    --brand-cyan: #4df4d4;
    --brand-red: #ff0000;
		--dark-color: #000000;
		--light-color: #FFFFFF;
	}
	@font-face {
    font-family: Futura-Book;
    src: url(${futurabook});
	}
	@font-face {
    font-family: Futura-Bold;
    src: url(${futurabold});
	}
	@font-face {
    font-family: Futura-Bold-Outline;
    src: url(${futuraboldoutline});
	}
	html{
		height: 100%;
		margin: 0;
	}
	body {
		overflow: auto;
		height: 100%;
		background-color: var(--dark-color);
		color: var(--light-color);
		z-index: -1;
	}
	.cyan {
		color: var(--brand-cyan);
	}
	.red {
		color: var(--brand-red);
	}
	.main {
		// padding-top: 5em;
		// padding: 0 5em 0 5em;
	}
	.fixed {
		// position: fixed;
		overflow: hidden;
	}
`;
export default style;