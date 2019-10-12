import React from 'react';
import styled from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import Quiz from './components/Quiz'

const SiteWrapper = styled.div`
`

const App = () => {
  return (
    <SiteWrapper>
      <main>
        <GlobalStyles />
        <Quiz />
      </main>
    </SiteWrapper>
  )
}

export default App;
