import React from "react";
import styled from "styled-components";

const StyledLargeHeader = styled.h2`
`

const LargeHeader = (props) => {
  const { children, tag } = props

  return <StyledLargeHeader as={tag}>{children}</StyledLargeHeader>
}

export default LargeHeader