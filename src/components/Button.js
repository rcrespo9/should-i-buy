import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
`

const Button = (props) => {
  const { children } = props

  return <StyledButton>{children}</StyledButton>
}

export default Button