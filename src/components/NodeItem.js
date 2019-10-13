import React from 'react';

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const NodeItem = (props) => {
  const { text, details, isFinalDecision, actions } = props

  return (
    <ContentWrapper>
      <SmallHeader>Should I Buy This?</SmallHeader>
      <LargeHeader>{text}</LargeHeader>
      {details !== null &&
        <Paragraph>
          {details}
        </Paragraph>
      }
      {!isFinalDecision &&
        <ActionsWrapper>
          { actions }
        </ActionsWrapper>
      }
    </ContentWrapper>
  )
}

export default NodeItem;