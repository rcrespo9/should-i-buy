import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";

const StyledButton = styled.button`
  appearance: none;
  min-width: ${modularScale(8)};
  padding: ${modularScale(0)} ${modularScale(2)};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: #fff;
  background-color: ${props => props.theme.secondaryColor};
  font-size: ${modularScale(0)};
  font-weight: 500;

  &:disabled {
    opacity: 0.85;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const Button = props => {
  const { children, onClickEvt, isDisabled } = props;

  return (
    <StyledButton onClick={onClickEvt} disabled={isDisabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
