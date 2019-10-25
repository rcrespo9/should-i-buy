import React from "react";
import PropTypes from "prop-types";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import LargeHeader from "./typography/LargeHeader";
import Copy from "./typography/Copy";

const Intro = props => {
  const { header, blurb, actions } = props;

  return (
    <ContentWrapper
      content={
        <>
          <LargeHeader tag="h1">{header}</LargeHeader>
          <Copy>{blurb}</Copy>
          <ActionsWrapper fullWidth>{actions}</ActionsWrapper>
        </>
      }
    />
  );
};

Intro.propTypes = {
  header: PropTypes.string.isRequired,
  blurb: PropTypes.any.isRequired,
  actions: PropTypes.object.isRequired
}

export default Intro;
