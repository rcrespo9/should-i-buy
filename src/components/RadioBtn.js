import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";

const Label = styled.label`
  padding: ${modularScale(-2)} ${modularScale(-1)};
  border: 2px solid ${props => props.theme.grayBorderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  color: ${props => props.theme.grayColor};
  font-size: ${modularScale(2)};
`;

const RadioInput = styled.input.attrs(props => ({
  type: "radio",
  name: "nodeChoice",
  id: props.id
}))`
  display: none;

  &:checked + label {
    border-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.lightBgColor};
  }
`;

const RadioBtn = props => {
  const { onChangeEvt, value, isChecked, label, id } = props;

  return (
    <>
      <RadioInput
        id={id}
        onChange={onChangeEvt}
        value={value}
        checked={isChecked}
      />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

export default RadioBtn;
