import React from "react";

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

export default NodeItem;
