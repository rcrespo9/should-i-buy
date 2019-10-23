import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";
import PropTypes from "prop-types";

const StyledLargeHeader = styled.h2`
  font-weight: 700;
  font-size: ${modularScale(3)};
`;

const LargeHeader = props => {
  const { children, tag } = props;

  return <StyledLargeHeader as={tag}>{children}</StyledLargeHeader>;
};

LargeHeader.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string
}

export default LargeHeader;
