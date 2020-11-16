import { createGlobalStyle } from 'styled-components';
import futurabold from './assets/fonts/Futura-Bold.otf'
import futurabook from './assets/fonts/Futura-Book.otf'
import futuraboldoutline from './assets/fonts/FuturaBQ-BoldOutline.otf'

const style = createGlobalStyle`
  html {
    --brand-cyan: #4df4d4;
    --brand-red: #ff0000;
    --color-black: #000000;
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
`;
export default style;