import React from "react";
import styled from "styled-components";
import { modularScale, lighten, darken } from "polished";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  appearance: none;
  padding: ${modularScale(1, "0.875em")} ${modularScale(2)};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: #fff;
  background-color: ${props => props.theme.secondaryColor};
  font-size: ${modularScale(0)};
  font-weight: 500;
  transition: all ${props => props.theme.easingTiming};

  &:hover:enabled {
    cursor: pointer;
    background-color: ${props => lighten(0.03, props.theme.secondaryColor)};
  }

  &:focus:enabled {
    background-color: ${props => darken(0.03, props.theme.secondaryColor)};
  }

  &:disabled {
    opacity: 0.85;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    max-width: ${modularScale(8)};
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

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClickEvt: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default Button;
