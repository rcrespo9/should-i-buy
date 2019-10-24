import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { modularScale, rgba } from "polished";

import GlobalStyles from "./theme/globalStyles";
import Iconography from "./components/Iconography";
import DecisionTree from "./components/DecisionTree";
import Footer from "./components/Footer";

const theme = {
  primaryColor: "#373E40",
  secondaryColor: "#305252",
  tertiaryColor: "#488286",
  lightBgColor: rgba("#488286", 0.1),
  grayColor: "#5A5C65",
  borderRadius: "5px",
  grayBorderColor: rgba("#5A5C65", 0.5)
};

const SiteWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  max-width: ${modularScale(13)};
  margin: 0 auto;
  padding: 0 ${modularScale(0)};
`;

const MainWrapper = styled.main`
  display: grid;
  align-self: center;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Iconography />
      <SiteWrapper>
        <MainWrapper>
          <GlobalStyles />
          <DecisionTree />
        </MainWrapper>
        <Footer>
          Created by{" "}
          <a
            href="https://rudycrespo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rudy Crespo
          </a>
        </Footer>
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default App;
