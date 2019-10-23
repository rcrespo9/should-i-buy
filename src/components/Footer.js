import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";

const StyledFooter = styled.footer``

const SmallCopy = styled.small``

const Footer = props => {
  const { children } = props

  return (
    <StyledFooter>
      <SmallCopy>{children}</SmallCopy>
    </StyledFooter>
  )
}

export default Footer