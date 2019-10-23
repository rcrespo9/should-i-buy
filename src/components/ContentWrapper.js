import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContentWrapper = styled.article``;

const ContentWrapper = props => {
  const { content } = props;
  return <StyledContentWrapper>{content}</StyledContentWrapper>;
};

ContentWrapper.propTypes = {
  content: PropTypes.any.isRequired
}

export default ContentWrapper;
