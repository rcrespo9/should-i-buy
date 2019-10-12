import React from "react"
import styled from 'styled-components'

const StyledSmallHeader = styled.h1`
`

const SmallHeader = (props) => {
  const { tag, children } = props

  return <StyledSmallHeader as={tag}>{children}</StyledSmallHeader>
}

export default SmallHeader