import { createGlobalStyle } from "styled-components";
import { stripUnit, normalize, modularScale } from "polished";

export default createGlobalStyle`
  ${normalize()}
  
  body {
    color: ${props => props.theme.primaryColor};
    font-family: aktiv-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: ${stripUnit(modularScale(1))};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  p {
    margin: 0;
  }
`;
