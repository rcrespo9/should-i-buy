import React from "react"
import styled from 'styled-components'

const StyledSmallHeader = styled.h1`
`

const SmallHeader = (props) => {
  const { text } = props

  return <StyledSmallHeader>{text}</StyledSmallHeader>
}

export default SmallHeader