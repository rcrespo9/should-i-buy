import React from 'react';

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import ChoicesWrapper from "./ChoicesWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const NodeItem = (props) => {
  const { text, details, choices, actions, isFinalDecision, isComment } = props

  return (
    <ContentWrapper
      content={
        <div>
          <SmallHeader>
            {isFinalDecision ? "The verdict" : "Should I Buy This?"}
          </SmallHeader>
          <LargeHeader>{text}</LargeHeader>
          {details !== null && <Paragraph>{details}</Paragraph>}
          {!isFinalDecision && !isComment &&
            <ChoicesWrapper>{choices}</ChoicesWrapper>
          }
          <ActionsWrapper>{actions}</ActionsWrapper>
        </div>
      }
    />
  );
}

export default NodeItem;