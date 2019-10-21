import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";

const StyledChoicesWrapper = styled.div`
  margin-top: ${modularScale(3)};
`;

const ChoicesWrapper = props => {
  const { children } = props;

  return <StyledChoicesWrapper>{children}</StyledChoicesWrapper>;
};

export default ChoicesWrapper;
