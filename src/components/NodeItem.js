import React from "react";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const NodeItem = props => {
  const {
    text,
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
          <SmallHeader>
            {isFinalDecision ? "The verdict" : "Should I Buy This?"}
          </SmallHeader>
          <LargeHeader>{text}</LargeHeader>
          {details !== null && <Paragraph>{details}</Paragraph>}
          {!isFinalDecision && !isComment && (
            <ActionsWrapper>{choices}</ActionsWrapper>
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
