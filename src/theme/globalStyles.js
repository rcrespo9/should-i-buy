import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()}
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`