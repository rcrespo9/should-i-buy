import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
`

const Paragraph = (props) => {
  const { children } = props

  return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph