import React from 'react';

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const NodeItem = (props) => {
  const { text, details, actions, navigation, isFinalDecision } = props

  return (
    <ContentWrapper
      content={
        <div>
          <SmallHeader>
            {isFinalDecision ? "The verdict" : "Should I Buy This?"}
          </SmallHeader>
          <LargeHeader>{text}</LargeHeader>
          {details !== null && <Paragraph>{details}</Paragraph>}
          <ActionsWrapper>{actions}</ActionsWrapper>
          { navigation }
        </div>
      }
    />
  );
}

export default NodeItem;