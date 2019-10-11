import React from "react";

import ContentWrapper from './ContentWrapper'
import ActionsWrapper from './ActionsWrapper'
import LargeHeader from './typography/LargeHeader'
import Paragraph from './typography/Paragraph'
import Button from './Button'

const Intro = () => {
  return (
    <ContentWrapper>
      <LargeHeader text="Should I Buy This?" />
      <Paragraph>
        Some text.
      </Paragraph>
      <ActionsWrapper>
        <Button text="Get Started" />
      </ActionsWrapper>
    </ContentWrapper>
  )
}

export default Intro