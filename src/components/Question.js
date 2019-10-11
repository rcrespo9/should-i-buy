import React from 'react';

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import SmallHeader from "./typography/SmallHeader";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";
import Button from "./Button";

const Question = (props) => {
  const { title, info, yesId, noId, isFinalDecision } = props

  return (
    <ContentWrapper>
      <SmallHeader text="Should I Buy This?" />
      <LargeHeader text={title} />
      {info.length &&
        <Paragraph>
          {info}
        </Paragraph>
      }

      {isFinalDecision &&
        <ActionsWrapper>
          <Button text="Yes" />
          <Button text="No" />
        </ActionsWrapper>
      }
    </ContentWrapper>
  )
}

export default Question;