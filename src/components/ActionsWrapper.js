import React from "react";
import styled from "styled-components";
import { modularScale } from 'polished'

const StyledActionsWrapper = styled.div`
  display: grid;
  margin-top: ${modularScale(3)};
  justify-content: space-between;
`

const ActionsWrapper = (props) => {
  const { children } = props

  return <StyledActionsWrapper>{children}</StyledActionsWrapper>
}

export default ActionsWrapper