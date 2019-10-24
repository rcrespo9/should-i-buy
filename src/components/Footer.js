import React from "react";
import styled from "styled-components";
import { modularScale } from "polished";
import PropTypes from "prop-types";

const StyledFooter = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
`;

const SmallCopy = styled.small`
  color: ${props => props.theme.grayColor};
  font-size: ${modularScale(0)};

  a {
    color: inherit;
    font-weight: 500;

    &:hover {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

const Footer = props => {
  const { children } = props;

  return (
    <StyledFooter>
      <SmallCopy>{children}</SmallCopy>
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.any.isRequired
}

export default Footer;
