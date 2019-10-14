import React from 'react'
import styled from 'styled-components'
import { modularScale } from 'polished'

import GlobalStyles from './theme/globalStyles'
import DecisionTree from './components/DecisionTree'

const SiteWrapper = styled.div`
  max-width: ${modularScale(13)};
  margin: 0 auto;
`

const App = () => {
  return (
    <SiteWrapper>
      <main>
        <GlobalStyles />
        <DecisionTree />
      </main>
    </SiteWrapper>
  )
}

export default App;
