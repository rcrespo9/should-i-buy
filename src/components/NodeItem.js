import React from "react";
import PropTypes from "prop-types";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

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
          {details !== null && <Paragraph>{details}</Paragraph>}
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
