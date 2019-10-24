import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";
import PropTypes from "prop-types";

const StyledActionsWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.fullWidth
      ? null
      : `repeat(2, minmax(0, ${modularScale(8)}))`};
  column-gap: ${props => (props.fullWidth ? null : `${modularScale(2)}`)};
  row-gap: ${props => (props.fullWidth ? modularScale(2) : null)};
  justify-content: ${props => (props.fullWidth ? null : "space-between")};
  margin-top: ${modularScale(3)};

  &:not(:last-of-type) {
    margin-bottom: ${modularScale(4)};
  }
`;

const ActionsWrapper = props => {
  const { children, fullWidth } = props;

  return (
    <StyledActionsWrapper fullWidth={fullWidth}>
      {children}
    </StyledActionsWrapper>
  );
};

ActionsWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool
}

export default ActionsWrapper;
