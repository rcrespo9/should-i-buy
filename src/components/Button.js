import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
`

const Button = (props) => {
  const { text } = props

  return <StyledButton>{text}</StyledButton>
}

export default Button