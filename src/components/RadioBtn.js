import React from "react";
import styled from "styled-components";
import { modularScale, hideVisually } from "polished";
import PropTypes from "prop-types";

const RadioIcon = styled.svg`
  display: inline-block;
  width: ${modularScale(1)};
  height: ${modularScale(1)};
  vertical-align: text-top;
  margin-right: ${modularScale(-5)};
  transition: fill ${props => props.theme.easingTiming};
`;

const UncheckedRadioIcon = styled(RadioIcon)`
  fill: ${props => props.theme.grayColor};
`;

const CheckedRadioIcon = styled(RadioIcon)`
  fill: ${props => props.theme.secondaryColor};
`;

const Label = styled.label`
  padding: ${modularScale(-2)} ${modularScale(-1)};
  border: 2px solid ${props => props.theme.grayBorderColor};
  border-color: ${props =>
    props.isChecked ? props.theme.secondaryColor : null};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  background-color: ${props =>
    props.isChecked ? props.theme.lightBgColor : null};
  color: ${props =>
    props.isChecked ? props.theme.secondaryColor : props.theme.grayColor};
  font-size: ${modularScale(2)};
  transition: all ${props => props.theme.easingTiming};
  transition-property: color, background-color, border-color;

  &:hover {
    border-color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.lightBgColor};
    color: ${props => props.theme.secondaryColor};

    ${UncheckedRadioIcon} {
      fill: ${props => props.theme.secondaryColor};
    }
  }
`;

const RadioInput = styled.input.attrs(props => ({
  type: "radio",
  name: "nodeChoice",
  id: props.id
}))`
  ${hideVisually()};
`;

const RadioBtn = props => {
  const { onChangeEvt, value, isChecked, label } = props;

  return (
    <>
      <Label isChecked={isChecked}>
        {isChecked ? (
          <CheckedRadioIcon>
            <use xlinkHref="#icon-radio_button_checked"></use>
          </CheckedRadioIcon>
        ) : (
          <UncheckedRadioIcon>
            <use xlinkHref="#icon-radio_button_unchecked"></use>
          </UncheckedRadioIcon>
        )}
        {label}
        <RadioInput
          onChange={onChangeEvt}
          value={value}
          checked={isChecked}
        />
      </Label>
    </>
  );
};

RadioBtn.propTypes = {
  onChangeEvt: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default RadioBtn;
