import React from 'react';
import styled from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import DecisionTree from './components/DecisionTree'

const SiteWrapper = styled.div`
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
