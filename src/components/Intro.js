import React from "react";

import ContentWrapper from './ContentWrapper'
import ActionsWrapper from './ActionsWrapper'
import LargeHeader from './typography/LargeHeader'
import Paragraph from './typography/Paragraph'
import Button from './Button'

const Intro = () => {
  return (
    <ContentWrapper>
      <LargeHeader tag="h1">Should I Buy This?</LargeHeader>
      <Paragraph>
        Some text.
      </Paragraph>
      <ActionsWrapper>
        <Button>Get Started</Button>
      </ActionsWrapper>
    </ContentWrapper>
  )
}

export default Intro