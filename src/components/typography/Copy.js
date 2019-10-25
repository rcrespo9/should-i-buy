import React from "react";
import styled from "styled-components";
import { modularScale, stripUnit } from "polished";
import PropTypes from "prop-types";

const StyledCopy = styled.div`
  margin-top: ${modularScale(-2)};
  font-size: ${modularScale(1)};
  line-height: ${stripUnit(modularScale(2, "0.875em"))};

  p + p {
    margin-top: ${modularScale(-1)};
  }
`;

const Copy = props => {
  const { children } = props;

  return <StyledCopy>{children}</StyledCopy>;
};

Copy.propTypes = {
  children: PropTypes.any.isRequired
}

export default Copy;
