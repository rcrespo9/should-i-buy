import React from 'react';
import styled from 'styled-components'
import GlobalStyles from './theme/globalStyles'
import Quiz from './components/Quiz'

const App = () => {
  return (
    <main>
      <GlobalStyles />
      <Quiz />
    </main>
  )
}

export default App;
