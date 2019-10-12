import React from 'react';

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const NodeItem = (props) => {
  const { text, details, yesChildId, noChildId, commentChildId, isFinalDecision, isPositiveDecision, isComment, actions } = props

  return (
    <ContentWrapper>
      <SmallHeader text="Should I Buy This?" />
      <LargeHeader text={text} />
      {details.length &&
        <Paragraph>
          {details}
        </Paragraph>
      }
      <ActionsWrapper>
        { actions }
      </ActionsWrapper>
    </ContentWrapper>
  )
}

export default NodeItem;