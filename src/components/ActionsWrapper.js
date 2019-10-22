import React from "react";
import styled from "styled-components";
import { modularScale } from 'polished'

const StyledActionsWrapper = styled.div`
  display: ${props => (props.fullWidth ? "grid" : "flex")};
  row-gap: ${props => (props.fullWidth ? modularScale(2) : null)};
  justify-content: ${props => (props.fullWidth ? null : "space-between")};
  margin-top: ${modularScale(3)};

  &:not(:last-of-type) {
    margin-bottom: ${modularScale(4)};
  }
`;

const ActionsWrapper = (props) => {
  const { children, fullWidth } = props

  return <StyledActionsWrapper fullWidth={fullWidth}>{children}</StyledActionsWrapper>
}

export default ActionsWrapper