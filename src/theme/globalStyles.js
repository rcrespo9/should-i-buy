import { createGlobalStyle } from "styled-components";
import { stripUnit, normalize, modularScale, fluidRange, darken } from "polished";

export default createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    line-height: ${stripUnit(modularScale(1))};

    ${props => fluidRange(
      {
        prop: "font-size",
        fromSize: "16px",
        toSize: "24px"
      },
      props.theme.breakpoints.sm,
      props.theme.breakpoints.lg
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

  a {
    color: inherit;
    font-weight: 500;
    transition: color ${props => props.theme.easingTiming};

    &:hover {
      color: ${props => darken(.01, props.theme.primaryColor)};
    }
  }
`;
