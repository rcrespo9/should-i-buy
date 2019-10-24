import { createGlobalStyle } from "styled-components";
import { stripUnit, normalize, modularScale, fluidRange } from "polished";

export default createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    line-height: ${stripUnit(modularScale(1))};

    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "16px",
        toSize: "24px"
      },
      "640px",
      "2560px"
    )}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    color: ${props => props.theme.primaryColor};
    font-family: aktiv-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  p {
    margin: 0;
  }
`;
