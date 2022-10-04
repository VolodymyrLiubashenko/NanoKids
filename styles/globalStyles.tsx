import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

.lock{
  overflow: hidden;
}

 
 #__next{
  position:relative;
  width: 100%;
  height: 100%;
  background:linear-gradient(90deg, #04b46b 0%, rgba(221,255,6,1) 51%, rgba(255,255,255,1) 100%);
  
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'Cuprum', sans-serif;;
  
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}
html{
  scroll-behavior:smooth;
}

body {
  height: 100%;
  width: 100%;
  line-height: 1;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: normal;
}
`;
export default GlobalStyle;
