import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
   font-family: 'Archivo', sans-serif;
  color: #242424;
  background-color: #ffffff;
  font-size: 16px;
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --text-color: #242424;
  --background-color: #ffffff;
  --background-secondary-color: #ffffff;
  --border-color: #e5e5e5;
}

[data-theme='dark'] {
  --text-color: #ffffff;
  --background-color: #2b2f34;
  --background-secondary-color: #242424;
  --border-color: #242424;
}

 /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
}
`;

export default GlobalStyles;
