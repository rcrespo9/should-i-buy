import React from "react";
import styled from "styled-components";

const StyledActionsWrapper = styled.div`
`

const ActionsWrapper = (props) => {
  const { children } = props

  return <StyledActionsWrapper>{children}</StyledActionsWrapper>
}

export default ActionsWrapper