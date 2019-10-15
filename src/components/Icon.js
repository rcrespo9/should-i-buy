import React from "react";
import styled from "styled-components";
// import { modularScale } from "polished"

const StyledIcon = styled.svg`
  width: 100%;
  height: auto;
  fill: ${props => props.theme.tertiaryColor};
`

const Icon = props => {
  const { href } = props

  return (
    <StyledIcon>
      <use xlinkHref={href}></use>
    </StyledIcon>
  )
}

export default Icon