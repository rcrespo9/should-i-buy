import React from "react";
import PropTypes from "prop-types";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Copy from "./typography/Copy";

const NodeItem = props => {
  const {
    header,
    question,
    details,
    choices,
    prevBtn,
    nextBtn,
    isFinalDecision,
    isComment
  } = props;

  return (
    <ContentWrapper
      content={
        <>
          <SmallHeader>{header}</SmallHeader>
          <LargeHeader>{question}</LargeHeader>
          {details !== null && (
            <Copy>
              <p>{details}</p>
            </Copy>
          )}
          {!isFinalDecision && !isComment && (
            <ActionsWrapper fullWidth={true}>{choices}</ActionsWrapper>
          )}
          <ActionsWrapper>
            {prevBtn}
            {nextBtn}
          </ActionsWrapper>
        </>
      }
    />
  );
};

NodeItem.propTypes = {
  header: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  details: PropTypes.string,
  isFinalDecision: PropTypes.bool.isRequired,
  isComment: PropTypes.bool.isRequired,
  choices: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  nextBtn: PropTypes.object.isRequired,
  prevBtn: PropTypes.object.isRequired
}

export default NodeItem;
