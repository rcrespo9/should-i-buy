import React from "react"
import styled from 'styled-components'
import { modularScale } from 'polished'

const StyledSmallHeader = styled.h1`
  font-size: ${modularScale(0)};
  letter-spacing: ${modularScale(-9)};
  text-transform: uppercase;
`

const SmallHeader = (props) => {
  const { tag, children } = props

  return <StyledSmallHeader as={tag}>{children}</StyledSmallHeader>
}

export default SmallHeader