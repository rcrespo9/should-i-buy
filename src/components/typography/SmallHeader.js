import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";
import PropTypes from "prop-types";

const StyledSmallHeader = styled.h1`
  color: ${props => props.theme.secondaryColor};
  margin-bottom: ${modularScale(-1)};
  font-size: ${modularScale(-1)};
  letter-spacing: ${modularScale(-10)};
  text-transform: uppercase;
`;

const SmallHeader = props => {
  const { tag, children } = props;

  return <StyledSmallHeader as={tag}>{children}</StyledSmallHeader>;
};

SmallHeader.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string
}

export default SmallHeader;
