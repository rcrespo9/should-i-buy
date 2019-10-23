import React from "react";
import styled from "styled-components";
import { modularScale, stripUnit } from "polished";

const StyledParagraph = styled.p`
  margin-top: ${modularScale(-2)};
  font-size: ${modularScale(1)};
  line-height: ${stripUnit(modularScale(2, "0.875em"))};
`;

const Paragraph = props => {
  const { children } = props;

  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
