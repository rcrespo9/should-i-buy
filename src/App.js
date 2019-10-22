import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { modularScale } from 'polished'

import GlobalStyles from './theme/globalStyles'
import Iconography from './components/Iconography'
import DecisionTree from './components/DecisionTree'

const theme = {
  primaryColor: "#373E40",
  secondaryColor: "#305252",
  tertiaryColor: "#488286"
};

const SiteWrapper = styled.div`
  max-width: ${modularScale(13)};
  margin: 0 auto;
  padding: 0 ${modularScale(0)};
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Iconography />
      <SiteWrapper>
        <main>
          <GlobalStyles />
          <DecisionTree />
        </main>
      </SiteWrapper>
    </ThemeProvider>
  );
}

export default App;
