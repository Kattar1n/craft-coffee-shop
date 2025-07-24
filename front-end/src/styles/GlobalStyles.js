import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #8B4513; /* SaddleBrown - Coffee-like color */
    --color-secondary: #D2B48C; /* Tan - Lighter coffee color */
    --color-accent: #A0522D; /* Sienna - Darker coffee color */
    --color-text-dark: #333;
    --color-text-light: #f5f5dc; /* Beige */
    --color-background-light: #f9f9f9;
    --color-background-dark: #222;
    --header-height: 80px;
    --max-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--color-text-dark);
    background-color: var(--color-background-light);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export default GlobalStyles;