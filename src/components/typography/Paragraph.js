import React from "react";
import styled from "styled-components";
import { modularScale } from 'polished'

const StyledParagraph = styled.p`
  margin-bottom: 0;
  font-size: ${modularScale(2)};
`;

const Paragraph = (props) => {
  const { children } = props

  return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph