import React from "react";
import PropTypes from "prop-types";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const Intro = props => {
  const { header, blurb, actions } = props;

  return (
    <ContentWrapper
      content={
        <>
          <LargeHeader tag="h1">{header}</LargeHeader>
          <Paragraph>{blurb}</Paragraph>
          <ActionsWrapper>{actions}</ActionsWrapper>
        </>
      }
    />
  );
};

Intro.propTypes = {
  header: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Intro;
