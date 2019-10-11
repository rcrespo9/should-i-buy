import React from "react";
import styled from "styled-components";

const StyledLargeHeader = styled.h2`
`

const LargeHeader = (props) => {
  const { text } = props

  return <StyledLargeHeader>{text}</StyledLargeHeader>
}

export default LargeHeader