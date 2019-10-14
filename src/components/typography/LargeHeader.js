import React from "react";
import styled from "styled-components";
import { modularScale } from 'polished'

const StyledLargeHeader = styled.h2`
  margin-bottom: ${modularScale(-4)};
  font-weight: 700;
  font-size: ${modularScale(4)};
`

const LargeHeader = (props) => {
  const { children, tag } = props

  return <StyledLargeHeader as={tag}>{children}</StyledLargeHeader>
}

export default LargeHeader